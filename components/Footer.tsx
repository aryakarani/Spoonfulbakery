import { instagramProfileUrl, buildWhatsAppOrderLink } from "@/utils/site";
import { Instagram, Phone, MapPin, Clock, Heart } from "lucide-react";

export default function Footer() {
  const ig = instagramProfileUrl();
  
  return (
    <footer className="mt-20 bg-gradient-to-b from-[#F5E6D3] to-[#F9F2EA] border-t border-[#E5D4C1]">
      {/* Main Footer Content */}
      <div className="container-gutter py-12 space-y-8">
        {/* About Section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="flex justify-center items-center gap-2">
            <h3 className="brand-name text-3xl text-[#8B4513]">Spoonful Bakery</h3>
          </div>
          <p className="text-[#6B4423]/80 text-sm leading-relaxed body-text">
            Boutique home bakery crafting premium desserts with love. We use real butter, Belgian chocolate, 
            seasonal fruits, and stone-ground whole wheat to create unforgettable treats for your special moments.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="space-y-2">
            <MapPin className="h-5 w-5 mx-auto text-[#D4A574]" />
            <h4 className="font-semibold text-[#6B4423] text-sm">Location</h4>
            <p className="text-xs text-[#6B4423]/60">Mumbai, India</p>
          </div>
          
          <div className="space-y-2">
            <Clock className="h-5 w-5 mx-auto text-[#D4A574]" />
            <h4 className="font-semibold text-[#6B4423] text-sm">Order Time</h4>
            <p className="text-xs text-[#6B4423]/60">5 days advance</p>
          </div>
          
          <div className="space-y-2">
            <Heart className="h-5 w-5 mx-auto text-[#D4A574]" />
            <h4 className="font-semibold text-[#6B4423] text-sm">Handmade</h4>
            <p className="text-xs text-[#6B4423]/60">With love</p>
          </div>
          
          <div className="space-y-2">
            <Phone className="h-5 w-5 mx-auto text-[#D4A574]" />
            <h4 className="font-semibold text-[#6B4423] text-sm">Order Via</h4>
            <p className="text-xs text-[#6B4423]/60">WhatsApp</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-3">
          <a
            href={buildWhatsAppOrderLink()}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline btn-sm group border-[#D4A574] text-[#8B4513] hover:bg-[#D4A574]/10"
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
              className="btn btn-outline btn-sm group border-[#D4A574] text-[#8B4513] hover:bg-[#D4A574]/10"
              aria-label="Instagram"
            >
              <Instagram className="h-3.5 w-3.5 group-hover:animate-pulse-soft" />
              <span className="ml-2">Instagram</span>
            </a>
          )}
        </div>

        {/* Order Info */}
        <div className="bg-white/40 backdrop-blur rounded-2xl p-4 space-y-3 border border-[#E5D4C1]">
          <h4 className="font-semibold text-[#6B4423] text-sm text-center">Order Information</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#6B4423]/70">
            <div className="flex items-start gap-2">
              <span className="text-[#D4A574]">•</span>
              <span>Place orders 5 days in advance</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#D4A574]">•</span>
              <span>50% advance payment required</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#D4A574]">•</span>
              <span>Delivery charges vary by location</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#D4A574]">•</span>
              <span>Cancellation: Advance non-refundable</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-[#E5D4C1] bg-[#FAF5F0]">
        <div className="container-gutter py-4">
          <p className="text-xs text-center text-[#6B4423]/60">
            © {new Date().getFullYear()} Spoonful Bakery. All rights reserved. Made with 
            <Heart className="inline h-3 w-3 mx-1 text-[#D4A574]" /> 
            in Mumbai.
          </p>
        </div>
      </div>
    </footer>
  );
}