import { instagramProfileUrl, buildWhatsAppOrderLink } from "@/utils/site";
import { Instagram, Phone, MapPin, Clock, Heart } from "lucide-react";

export default function Footer() {
  const ig = instagramProfileUrl();
  
  return (
    <footer className="mt-20 bg-gradient-to-b from-cream to-brand-50 border-t border-brand-100">
      {/* Main Footer Content */}
      <div className="container-gutter py-12 space-y-8">
        {/* About Section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="flex justify-center items-center gap-2">
            <h3 className="text-2xl font-bold text-chocolate italic">Spoonful Bakery</h3>
          </div>
          <p className="text-chocolate/70 text-sm leading-relaxed">
            Boutique home bakery crafting premium desserts with love ❤️. We use real butter, Belgian chocolate, 
            seasonal fruits, and stone-ground whole wheat to create unforgettable treats for your special moments.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="space-y-2">
            <MapPin className="h-5 w-5 mx-auto text-brand-500" />
            <h4 className="font-semibold text-chocolate text-sm">Location</h4>
            <p className="text-xs text-chocolate/60">Mumbai, India</p>
          </div>
          
          <div className="space-y-2">
            <Clock className="h-5 w-5 mx-auto text-brand-500" />
            <h4 className="font-semibold text-chocolate text-sm">Order Time</h4>
            <p className="text-xs text-chocolate/60">5 days advance</p>
          </div>
          
          <div className="space-y-2">
            <Heart className="h-5 w-5 mx-auto text-brand-500" />
            <h4 className="font-semibold text-chocolate text-sm">Handmade</h4>
            <p className="text-xs text-chocolate/60">With love ❤️</p>
          </div>
          
          <div className="space-y-2">
            <Phone className="h-5 w-5 mx-auto text-brand-500" />
            <h4 className="font-semibold text-chocolate text-sm">Order Via</h4>
            <p className="text-xs text-chocolate/60">WhatsApp</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-3">
          <a
            href={buildWhatsAppOrderLink()}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline btn-sm group"
            aria-label="WhatsApp"
          >
            <Phone className="h-3.5 w-3.5 group-hover:animate-pulse-soft" />
            <span className="ml-2">WhatsApp</span>
          </a>
          {ig && (
            <a 
              href={ig} 
              target="_blank" 
              rel="noreferrer"
              className="btn btn-outline btn-sm group"
              aria-label="Instagram"
            >
              <Instagram className="h-3.5 w-3.5 group-hover:animate-pulse-soft" />
              <span className="ml-2">Instagram</span>
            </a>
          )}
        </div>

        {/* Order Info */}
        <div className="bg-white/50 rounded-2xl p-4 space-y-3">
          <h4 className="font-semibold text-chocolate text-sm text-center">Order Information</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-chocolate/70">
            <div className="flex items-start gap-2">
              <span className="text-brand-500">•</span>
              <span>Place orders 5 days in advance</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-brand-500">•</span>
              <span>50% advance payment required</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-brand-500">•</span>
              <span>Delivery charges vary by location</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-brand-500">•</span>
              <span>Cancellation: Advance non-refundable</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-brand-100 bg-white/30">
        <div className="container-gutter py-4">
          <p className="text-xs text-center text-chocolate/60">
            © {new Date().getFullYear()} Spoonful Bakery. All rights reserved. Made with 
            <Heart className="inline h-3 w-3 mx-1 text-red-500" /> 
            in Mumbai.
          </p>
        </div>
      </div>
    </footer>
  );
}