"use client";
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/utils/format";
import { X, Trash2, ShoppingBag, Phone, Plus, Minus } from "lucide-react";
import { SITE, buildWhatsAppOrderLink } from "@/utils/site";

export default function CartDrawer() {
  const { isOpen, closeCart, items, totalAmount, clearCart, totalQuantity, updateQuantity, removeItem } = useCart();

  const message = (() => {
    if (items.length === 0) return `New Order Request`;
    
    // Get current date and time in India timezone
    const indiaTime = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
    
    const lines = items.map((it) => `• ${it.name} × ${it.quantity} = ${formatCurrency(it.price * it.quantity)}`);
    const orderDetails = lines.join("\n");
    const total = `Total: ${formatCurrency(totalAmount)}`;
    
    return `Order Date & Time: ${indiaTime}\n\n${orderDetails}\n\n${total}`;
  })();

  const isEmpty = items.length === 0;

  return (
    <div className={`fixed inset-0 z-50 transition ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!isOpen}>
      <div 
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`} 
        onClick={closeCart} 
      />
      <aside className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-earth-100 bg-gradient-to-r from-earth-50 to-pearl">
          <div className="flex items-center">
            <ShoppingBag className="h-5 w-5 text-earth-600" />
            <h2 className="text-xl font-semibold ml-2">
              Your Cart
                <span className="ml-2 px-2 py-0.5 bg-earth-600 text-white text-xs rounded-full">
                  {totalQuantity}
                </span>
            </h2>
          </div>
          <button 
            aria-label="Close cart" 
            onClick={closeCart} 
            className="btn btn-ghost touch-target"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto h-[calc(100%-200px)]">
          {isEmpty ? (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <p className="text-chocolate/70 font-medium">Your cart is empty</p>
              <p className="text-sm text-chocolate/50 mt-2">Add some delicious treats from our menu!</p>
            </div>
          ) : (
            <div className="p-4 space-y-3">
              {items.map((item, index) => (
                <div 
                  key={item.id} 
                  className="card p-4 animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <p className="font-medium text-chocolate">{item.name}</p>
                      <p className="text-sm text-chocolate/60 mt-1">
                        {formatCurrency(item.price)} each
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-600 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                        className="btn btn-ghost btn-sm touch-target"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-8 text-center font-medium text-chocolate">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="btn btn-ghost btn-sm touch-target"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <p className="font-semibold text-earth-600">
                      {formatCurrency(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with totals and checkout */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-earth-100 p-5 space-y-4 safe-bottom">
          {/* Totals */}
          <div className="flex items-center justify-between pb-3 border-b border-earth-100">
              <span className="text-chocolate/70 font-medium">Subtotal</span>
              <span className="text-2xl font-bold text-chocolate">
                {formatCurrency(totalAmount)}
              </span>
            </div>
          
          <div className="flex gap-3">
            {!isEmpty && (
              <button 
                className="btn btn-outline" 
                onClick={clearCart}
              >
                <Trash2 className="h-4 w-4" />
              </button>
            )}
            <a
              href={buildWhatsAppOrderLink(message)}
              target="_blank"
              rel="noreferrer"
              className={`btn btn-primary flex-1 group ${isEmpty ? 'opacity-50 pointer-events-none' : ''}`}
              onClick={closeCart}
            >
              <Phone className="h-4 w-4 mr-2 group-hover:animate-pulse-soft" />
              {isEmpty ? 'Add items to checkout' : 'Checkout on WhatsApp'}
            </a>
          </div>
          
          {!isEmpty && (
            <p className="text-xs text-center text-chocolate/50">
              Tap checkout to send your order via WhatsApp
            </p>
          )}
        </div>
      </aside>
    </div>
  );
}