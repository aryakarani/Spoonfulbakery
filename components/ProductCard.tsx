"use client";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Plus } from "lucide-react";
import { formatCurrency } from "@/utils/format";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  return (
    <div className="card overflow-hidden">
      <div className="relative h-52">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-chocolate">{product.name}</h3>
        <p className="text-sm text-chocolate/70 mt-1 line-clamp-2">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-chocolate font-semibold">{formatCurrency(product.price)}</span>
          <button className="btn btn-primary" onClick={() => addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
          })}>
            <Plus className="h-4 w-4 mr-2" /> Add
          </button>
        </div>
      </div>
    </div>
  );
}