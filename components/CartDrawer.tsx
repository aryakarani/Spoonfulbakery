"use client";
import { useCart } from "@/context/CartContext";
import { formatCurrency } from "@/utils/format";
import { X } from "lucide-react";
import { SITE, buildWhatsAppOrderLink } from "@/utils/site";

export default function CartDrawer() {
  const { isOpen, closeCart, items, totalAmount, clearCart, totalQuantity } = useCart();

  const message = (() => {
    const handle = SITE.instagramUsername ? `\nInstagram: @${SITE.instagramUsername}` : "";
    if (items.length === 0) return `Spoonful Bakery – New Order\nLocation: Mumbai, India${handle}\n`;
    const lines = items.map((it, idx) => `${idx + 1}.\t${it.name} × ${it.quantity} — ${formatCurrency(it.price * it.quantity)}`);
    const subtotal = `\nSubtotal: ${formatCurrency(totalAmount)}`;
    return `Spoonful Bakery – New Order\nLocation: Mumbai, India${handle}\n\t${lines.join("\n\t")}\n${subtotal}`;
  })();

  const isEmpty = items.length === 0;

  return (
    <div className={`fixed inset-0 z-50 transition ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!isOpen}>
      <div className={`absolute inset-0 bg-black/30 transition-opacity ${isOpen ? "opacity-100" : "opacity-0"}`} onClick={closeCart} />
      <aside className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between p-4 border-b border-black/5">
          <h3 className="text-lg font-semibold text-chocolate">Your Cart {totalQuantity > 0 ? `(${totalQuantity})` : ""}</h3>
          <button aria-label="Close cart" onClick={closeCart} className="text-chocolate/60 hover:text-chocolate"><X size={20} /></button>
        </div>
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-160px)]">
          {items.length === 0 ? (
            <p className="text-chocolate/70">Your cart is empty. Add some treats from the menu!</p>
          ) : (
            items.map((it) => (
              <div key={it.id} className="flex items-center justify-between gap-3 border-b pb-3">
                <div>
                  <p className="font-medium text-chocolate">{it.name}</p>
                  <p className="text-sm text-chocolate/70">Qty: {it.quantity}</p>
                </div>
                <p className="font-medium text-chocolate">{formatCurrency(it.price * it.quantity)}</p>
              </div>
            ))
          )}
        </div>
        <div className="p-4 border-t space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-chocolate/70">Subtotal</span>
            <span className="text-lg font-semibold text-chocolate">{formatCurrency(totalAmount)}</span>
          </div>
          <div className="flex gap-2">
            <button className="btn btn-outline w-full" onClick={clearCart} disabled={isEmpty}>Clear</button>
            <a
              href={buildWhatsAppOrderLink(message)}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary w-full"
              aria-disabled={isEmpty}
              onClick={(e) => { if (isEmpty) e.preventDefault(); }}
            >
              Checkout on WhatsApp
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}