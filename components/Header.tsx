"use client";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Phone } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { openCart, totalQuantity } = useCart();
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "2348012345678";
  return (
    <header className="sticky top-0 z-40 bg-cream/70 backdrop-blur supports-[backdrop-filter]:bg-cream/60 border-b border-black/5">
      <div className="container-gutter h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Spoonful Bakery" width={44} height={44} />
          <span className="text-xl font-bold text-chocolate">Spoonful Bakery</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-chocolate/80">
          <a href="#menu" className="hover:text-chocolate">Menu</a>
          <a href="#about" className="hover:text-chocolate">About</a>
          <a href="#contact" className="hover:text-chocolate">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex btn btn-outline"
          >
            <Phone className="mr-2 h-4 w-4" /> WhatsApp
          </a>
          <button aria-label="Open cart" className="btn btn-primary" onClick={openCart}>
            <ShoppingBag className="h-4 w-4 mr-2" /> Cart{totalQuantity > 0 ? ` (${totalQuantity})` : ""}
          </button>
        </div>
      </div>
    </header>
  );
}