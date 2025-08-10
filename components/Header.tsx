"use client";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Phone, Instagram } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { buildWhatsAppOrderLink, instagramProfileUrl } from "@/utils/site";
import { useState } from "react";

export default function Header() {
  const { openCart, totalQuantity } = useCart();
  const ig = instagramProfileUrl();
  const [logoSrc, setLogoSrc] = useState<string>("/logo.png");
  return (
    <header className="sticky top-0 z-40 bg-cream/70 backdrop-blur supports-[backdrop-filter]:bg-cream/60 border-b border-black/5">
      <div className="container-gutter h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image src={logoSrc} alt="Spoonful Bakery" width={44} height={44} className="rounded" onError={() => setLogoSrc("/logo.svg")} />
          <span className="text-xl font-semibold text-chocolate group-hover:tracking-tight transition-all font-serif">Spoonful Bakery</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-chocolate/80">
          <a href="#home" className="hover:text-chocolate">Home</a>
          <a href="#jars" className="hover:text-chocolate">Jar Menu</a>
          <a href="#cookies" className="hover:text-chocolate">Cookies</a>
          <a href="#contact" className="hover:text-chocolate">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          {ig && (
            <a href={ig} target="_blank" rel="noreferrer" className="hidden sm:inline-flex btn btn-outline">
              <Instagram className="mr-2 h-4 w-4" /> Instagram
            </a>
          )}
          <a
            href={buildWhatsAppOrderLink()}
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