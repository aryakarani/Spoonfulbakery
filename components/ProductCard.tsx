"use client";
import { useCart } from "@/context/CartContext";
import { Plus, ChevronDown } from "lucide-react";
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

  const handleAdd = () => {
    addItem({
      id: `${product.id}:${selected.size}`,
      name: `${product.name} – ${selected.size}`,
      price: selected.price,
      quantity: 1,
    });
  };

  return (
    <div className="card overflow-hidden">
      <div className="p-4">
        <h3 className="text-lg font-semibold text-chocolate font-serif">{product.name}</h3>
        <p className="text-sm text-chocolate/70 mt-1 line-clamp-3">{product.description}</p>
        <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
          <div className="relative w-full sm:w-auto">
            <select
              aria-label="Select size"
              className="w-full sm:w-auto appearance-none border rounded-full px-3 py-2 pr-8 text-sm text-chocolate/90 focus:outline-none focus:ring-2 focus:ring-brand-300"
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
            <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-chocolate/50" />
          </div>
          <button className="btn btn-primary w-full sm:w-auto" onClick={handleAdd}>
            <Plus className="h-4 w-4 mr-2" /> Add
          </button>
        </div>
      </div>
    </div>
  );
}