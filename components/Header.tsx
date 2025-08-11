"use client";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Phone, Instagram, Menu, X, Home, Cookie, Package } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { buildWhatsAppOrderLink, instagramProfileUrl } from "@/utils/site";
import { useState, useEffect } from "react";

export default function Header() {
  const { openCart, totalQuantity } = useCart();
  const ig = instagramProfileUrl();
  const [logoSrc, setLogoSrc] = useState<string>("/logo.png");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartAnimating, setCartAnimating] = useState(false);
  const [prevQuantity, setPrevQuantity] = useState(totalQuantity);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Animate cart icon when quantity changes
  useEffect(() => {
    if (totalQuantity > prevQuantity) {
      setCartAnimating(true);
      setTimeout(() => setCartAnimating(false), 600);
    }
    setPrevQuantity(totalQuantity);
  }, [totalQuantity, prevQuantity]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg' : 'bg-white/95 backdrop-blur shadow-sm'} safe-top`}>
        <div className="container-gutter h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group" onClick={() => setMobileMenuOpen(false)}>
            <Image 
              src={logoSrc} 
              alt="Spoonful Bakery" 
              width={40} 
              height={40} 
              className="rounded-lg transition-transform group-hover:scale-105" 
              onError={() => setLogoSrc("/logo.png")} 
            />
            <div className="flex flex-col">
              <span className="brand-name text-2xl text-brand-600 leading-tight transition-all group-hover:tracking-tight">
                Spoonful
              </span>
              <span className="brand-name text-lg text-earth-600 -mt-2">
                Bakery
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-chocolate/70 hover:text-chocolate font-medium transition-colors">Home</a>
            <a href="#jars" className="text-chocolate/70 hover:text-chocolate font-medium transition-colors">Jar Menu</a>
            <a href="#cookies" className="text-chocolate/70 hover:text-chocolate font-medium transition-colors">Cookies</a>
            <a href="#contact" className="text-chocolate/70 hover:text-chocolate font-medium transition-colors">Contact</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {ig && (
              <a 
                href={ig} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-ghost"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            )}
            <a
              href={buildWhatsAppOrderLink()}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              <Phone className="h-4 w-4 mr-2" /> WhatsApp
            </a>
            <button 
              aria-label="Open cart" 
              className={`btn btn-primary relative ${cartAnimating ? 'animate-bounce' : ''}`} 
              onClick={openCart}
            >
              <ShoppingBag className={`h-4 w-4 ${cartAnimating ? 'animate-pulse' : ''}`} />
              {totalQuantity > 0 && (
                <span className={`absolute -top-1 -right-1 bg-earth-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center ${cartAnimating ? 'animate-ping' : 'animate-scale-in'}`}>
                  {totalQuantity}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <button 
              aria-label="Open cart" 
              className={`btn btn-primary btn-sm relative touch-target ${cartAnimating ? 'animate-bounce' : ''}`} 
              onClick={openCart}
            >
              <ShoppingBag className={`h-4 w-4 ${cartAnimating ? 'animate-pulse' : ''}`} />
              {totalQuantity > 0 && (
                <span className={`absolute -top-1 -right-1 bg-earth-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center ${cartAnimating ? 'animate-ping' : 'animate-scale-in'}`}>
                  {totalQuantity}
                </span>
              )}
            </button>
            <button
              aria-label="Toggle menu"
              className="btn btn-ghost touch-target"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Social Links Bar */}
        <div className="md:hidden border-t border-earth-100 px-4 py-2 flex items-center justify-center gap-4 bg-gradient-to-r from-sand to-white">
          {ig && (
            <a 
              href={ig} 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-2 text-xs font-medium text-earth-600 hover:text-earth-700"
            >
              <Instagram className="h-3.5 w-3.5" />
              Instagram
            </a>
          )}
          <a
            href={buildWhatsAppOrderLink()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-medium text-earth-600 hover:text-earth-700"
          >
            <Phone className="h-3.5 w-3.5" />
            WhatsApp
          </a>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        <nav className={`absolute top-0 right-0 w-72 h-full bg-white shadow-2xl transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-chocolate">Menu</h2>
              <button
                aria-label="Close menu"
                className="btn btn-ghost touch-target"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-1">
              <a 
                href="#home" 
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-chocolate/80 hover:text-chocolate hover:bg-earth-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Home className="h-5 w-5" />
                <span className="font-medium">Home</span>
              </a>
              <a 
                href="#jars" 
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-chocolate/80 hover:text-chocolate hover:bg-earth-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Package className="h-5 w-5" />
                <span className="font-medium">Jar Menu</span>
              </a>
              <a 
                href="#cookies" 
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-chocolate/80 hover:text-chocolate hover:bg-earth-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Cookie className="h-5 w-5" />
                <span className="font-medium">Cookies</span>
              </a>
              <a 
                href="#contact" 
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-chocolate/80 hover:text-chocolate hover:bg-earth-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="h-5 w-5" />
                <span className="font-medium">Contact</span>
              </a>
            </div>

            <div className="pt-6 border-t border-earth-100 space-y-3">
              {ig && (
                <a 
                  href={ig} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-outline w-full"
                >
                  <Instagram className="h-4 w-4 mr-2" />
                  Follow on Instagram
                </a>
              )}
              <a
                href={buildWhatsAppOrderLink()}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary w-full"
              >
                <Phone className="h-4 w-4 mr-2" />
                Order on WhatsApp
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}