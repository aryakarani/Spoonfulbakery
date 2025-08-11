"use client";
import { useEffect, useState } from "react";
import { Check, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartNotification() {
  const { totalQuantity } = useCart();
  const [prevQuantity, setPrevQuantity] = useState(totalQuantity);
  const [showNotification, setShowNotification] = useState(false);
  const [itemName, setItemName] = useState("");

  useEffect(() => {
    if (totalQuantity > prevQuantity) {
      setShowNotification(true);
      // Auto-hide after 3 seconds
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
    setPrevQuantity(totalQuantity);
  }, [totalQuantity, prevQuantity]);

  if (!showNotification) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-slide-up">
      <div className="bg-earth-500 text-white rounded-2xl shadow-2xl px-6 py-4 flex items-center gap-3 min-w-[250px]">
        <div className="bg-white/20 rounded-full p-2">
          <Check className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <p className="font-semibold">Added to cart!</p>
          <p className="text-sm opacity-90">Cart has {totalQuantity} {totalQuantity === 1 ? 'item' : 'items'}</p>
        </div>
        <ShoppingBag className="h-5 w-5 opacity-70" />
      </div>
    </div>
  );
}