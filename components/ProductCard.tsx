"use client";
import { useCart } from "@/context/CartContext";
import { Plus, ChevronDown, Check, ShoppingBag, ImageIcon, Minus } from "lucide-react";
import { formatCurrency } from "@/utils/format";
import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";

export type PriceOption = { size: string; price: number };
export type CardProduct = {
  id: string;
  name: string;
  description: string;
  prices: PriceOption[];
  image: string;
};

export default function ProductCard({ product }: { product: CardProduct }) {
  const { addItem, items, updateQuantity, removeItem } = useCart();
  const [selected, setSelected] = useState<PriceOption>(product.prices[0]);
  const [isAdded, setIsAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Calculate the quantity of this specific product variant in cart
  const cartQuantity = useMemo(() => {
    const itemId = `${product.id}:${selected.size}`;
    const cartItem = items.find(item => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  }, [items, product.id, selected.size]);

  // Magic scroll effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleAdd = () => {
    const itemId = `${product.id}:${selected.size}`;
    const existingItem = items.find(item => item.id === itemId);
    
    if (existingItem) {
      updateQuantity(itemId, existingItem.quantity + 1);
    } else {
      addItem({
        id: itemId,
        name: `${product.name} – ${selected.size}`,
        price: selected.price,
        quantity: 1,
      });
    }
    
    // Show success animation with longer duration
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2500);
  };

  const handleIncrement = () => {
    const itemId = `${product.id}:${selected.size}`;
    const existingItem = items.find(item => item.id === itemId);
    
    if (existingItem) {
      updateQuantity(itemId, existingItem.quantity + 1);
    } else {
      addItem({
        id: itemId,
        name: `${product.name} – ${selected.size}`,
        price: selected.price,
        quantity: 1,
      });
    }
  };

  const handleDecrement = () => {
    const itemId = `${product.id}:${selected.size}`;
    const existingItem = items.find(item => item.id === itemId);
    
    if (existingItem) {
      if (existingItem.quantity > 1) {
        updateQuantity(itemId, existingItem.quantity - 1);
      } else {
        removeItem(itemId);
      }
    }
  };

  // Generate image path based on product id
  const imagePath = `/images/products/${product.id}.jpg`;
  const fallbackImagePath = `/images/products/placeholder.jpg`;

  return (
    <div 
      ref={cardRef}
      className={`card overflow-hidden group relative transition-all duration-500 bg-white hover:shadow-xl ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Section */}
      <div className="relative h-48 sm:h-56 bg-gradient-to-br from-neutral-100 to-earth-50 overflow-hidden">
        {!imageError ? (
          <Image
            src={imagePath}
            alt={product.name}
            fill
            className={`object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
            onError={() => setImageError(true)}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-3">
              <ImageIcon className="h-12 w-12 text-neutral-300 mx-auto" />
              <div className="px-4">
                <p className="text-xs text-neutral-500 font-medium">Add image to:</p>
                <p className="text-xs text-earth-600 font-mono bg-white/80 px-2 py-1 rounded mt-1">
                  /public{imagePath}
                </p>
              </div>
            </div>
          </div>
        )}
        
        {/* Overlay gradient on hover */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
      </div>

      <div className="p-5 space-y-4">
        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-neutral-800 leading-tight">
            {product.name}
          </h3>
          <p className="text-sm text-neutral-500 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price & Size Selection */}
        <div className="space-y-3">
          {/* Size Selector */}
          <div className="relative">
            <select
              aria-label="Select size"
              className="w-full appearance-none bg-neutral-50 border border-neutral-200 rounded-2xl px-4 py-3 pr-10 text-sm font-medium text-neutral-700 focus:outline-none focus:ring-2 focus:ring-earth-400 focus:border-transparent transition-all cursor-pointer hover:bg-earth-50"
              value={selected.size}
              onChange={(e) => {
                const opt = product.prices.find((p) => p.size === e.target.value)!;
                setSelected(opt);
              }}
            >
              {product.prices.map((p) => (
                <option key={p.size} value={p.size}>
                  {p.size} — {formatCurrency(p.price)}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
          </div>

          {/* Add to Cart Button or Quantity Controls */}
          {cartQuantity === 0 ? (
            <button 
              className={`btn w-full relative overflow-hidden transition-all duration-300 transform ${
                isAdded 
                  ? 'bg-earth-500 hover:bg-earth-600 text-white scale-105 shadow-xl' 
                  : 'btn-primary hover:scale-102'
              }`} 
              onClick={handleAdd}
            >
              <span className={`flex items-center justify-center transition-all duration-300 ${
                isAdded ? 'scale-110' : ''
              }`}>
                {isAdded ? (
                  <>
                    <Check className="h-5 w-5 mr-2 animate-bounce" />
                    <span className="font-semibold">Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Add to Cart
                  </>
                )}
              </span>
              
              {/* Multiple ripple effects for emphasis */}
              {isAdded && (
                <>
                  <span className="absolute inset-0 bg-white/30 animate-ping" />
                  <span className="absolute inset-0 bg-earth-400/20 animate-pulse" />
                </>
              )}
            </button>
          ) : (
            <div className="flex items-center justify-between bg-gradient-to-r from-earth-50 to-brand-50 rounded-2xl p-2">
              <button
                onClick={handleDecrement}
                className="btn btn-sm bg-white hover:bg-earth-100 text-earth-600 shadow-sm"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <div className="flex flex-col items-center px-4">
                <span className="text-lg font-bold text-earth-700">{cartQuantity}</span>
                <span className="text-xs text-earth-500">in cart</span>
              </div>
              <button
                onClick={handleIncrement}
                className="btn btn-sm bg-earth-600 hover:bg-earth-700 text-white shadow-sm"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>

        {/* Price Display */}
        <div className="pt-3 border-t border-neutral-200">
          <div className="flex items-baseline justify-between">
            <span className="text-xs text-neutral-500 font-medium">
              {cartQuantity > 0 ? `Subtotal (${cartQuantity})` : 'Starting from'}
            </span>
            <span className="text-xl font-bold bg-gradient-to-r from-earth-600 to-brand-500 bg-clip-text text-transparent">
              {formatCurrency(cartQuantity > 0 ? selected.price * cartQuantity : selected.price)}
            </span>
          </div>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-earth-100/20 to-transparent pointer-events-none transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`} />
    </div>
  );
}