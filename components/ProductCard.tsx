"use client";
import { useCart } from "@/context/CartContext";
import { Plus, ChevronDown, Check, ShoppingBag } from "lucide-react";
import { formatCurrency } from "@/utils/format";
import { useState } from "react";

export type PriceOption = { size: string; price: number };
export type CardProduct = {
  id: string;
  name: string;
  description: string;
  prices: PriceOption[];
  image: string;
};

export default function ProductCard({ product }: { product: CardProduct }) {
  const { addItem } = useCart();
  const [selected, setSelected] = useState<PriceOption>(product.prices[0]);
  const [isAdded, setIsAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAdd = () => {
    addItem({
      id: `${product.id}:${selected.size}`,
      name: `${product.name} – ${selected.size}`,
      price: selected.price,
      quantity: 1,
    });
    
    // Show success animation
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };



  return (
    <div 
      className="card overflow-hidden group relative transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-5 space-y-4">
        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-chocolate leading-tight pr-8">
            {product.name}
          </h3>
          <p className="text-sm text-chocolate/60 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price & Size Selection */}
        <div className="space-y-3">
          {/* Size Selector */}
          <div className="relative">
            <select
              aria-label="Select size"
              className="w-full appearance-none bg-brand-50 border border-brand-200 rounded-2xl px-4 py-3 pr-10 text-sm font-medium text-chocolate focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-transparent transition-all cursor-pointer hover:bg-brand-100"
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
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-chocolate/50" />
          </div>

          {/* Add to Cart Button */}
          <button 
            className={`btn w-full relative overflow-hidden transition-all duration-300 ${
              isAdded 
                ? 'bg-green-500 hover:bg-green-600 text-white' 
                : 'btn-primary'
            }`} 
            onClick={handleAdd}
          >
            <span className={`flex items-center justify-center transition-all duration-300 ${
              isAdded ? 'scale-110' : ''
            }`}>
              {isAdded ? (
                <>
                  <Check className="h-4 w-4 mr-2 animate-scale-in" />
                  Added!
                </>
              ) : (
                <>
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Add to Cart
                </>
              )}
            </span>
            
            {/* Ripple effect */}
            {isAdded && (
              <span className="absolute inset-0 bg-white/30 animate-ping" />
            )}
          </button>
        </div>

        {/* Price Display */}
        <div className="pt-3 border-t border-brand-100">
          <div className="flex items-baseline justify-between">
            <span className="text-xs text-chocolate/50 font-medium">Starting from</span>
            <span className="text-xl font-bold text-brand-600">
              {formatCurrency(selected.price)}
            </span>
          </div>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-brand-100/20 to-transparent pointer-events-none transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`} />
    </div>
  );
}