"use client";
import { useEffect, useState } from "react";
import menu from "@/data/menu";
import ProductCard from "@/components/ProductCard";
import { Phone, Instagram, ChefHat, Heart, Award, Clock, Sparkles, ArrowRight } from "lucide-react";
import { buildWhatsAppOrderLink, instagramProfileUrl } from "@/utils/site";

export default function HomePage() {
  const ig = instagramProfileUrl();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero */}
      <section id="home" className={`rounded-3xl bg-gradient-to-br from-brand-100 via-brand-50 to-cream ring-1 ring-brand-200/50 grain-texture overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="relative">
          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 text-6xl opacity-10 rotate-12 animate-float">
            🧁
          </div>
          <div className="absolute bottom-4 left-4 text-6xl opacity-10 -rotate-12 animate-float animation-delay-300">
            🍪
          </div>
          
          <div className="grid gap-8 items-center p-8 sm:p-12">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur rounded-full text-xs font-medium text-brand-600 animate-slide-up">
                <Sparkles className="h-3 w-3" />
                Handcrafted with Love in Mumbai
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-bold text-chocolate tracking-tight leading-[1.1] animate-slide-up animation-delay-100">
                Premium artisan
                <span className="block text-brand-500 mt-2">desserts</span>
              </h1>
              
              <p className="text-base sm:text-lg text-chocolate/70 max-w-2xl leading-relaxed animate-slide-up animation-delay-200">
                Experience our delicious jar desserts and artisanal cookies made with whole grains and raw sugar. Every bite tells a story of quality and passion.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 animate-slide-up animation-delay-300">
                <a
                  href={buildWhatsAppOrderLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary group"
                >
                  <Phone className="mr-2 h-4 w-4 group-hover:animate-pulse-soft" /> 
                  Order on WhatsApp
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                {ig && (
                  <a href={ig} target="_blank" rel="noreferrer" className="btn btn-outline group">
                    <Instagram className="mr-2 h-4 w-4 group-hover:animate-pulse-soft" /> 
                    See Instagram
                  </a>
                )}
              </div>

              {/* Quick Links */}
              <div className="flex gap-3 animate-slide-up animation-delay-400">
                <a href="#jars" className="text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors">
                  Browse Jars →
                </a>
                <a href="#cookies" className="text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors">
                  Browse Cookies →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {[
          { icon: ChefHat, title: "Artisan Made", desc: "Handcrafted daily" },
          { icon: Heart, title: "Made with Love", desc: "Family recipes" },
          { icon: Award, title: "Premium Quality", desc: "Best ingredients" },
          { icon: Clock, title: "Fresh Daily", desc: "Never frozen" }
        ].map((feature, i) => (
          <div 
            key={feature.title}
            className={`card p-4 sm:p-6 text-center space-y-2 hover:scale-105 transition-all cursor-default ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
            style={{ animationDelay: `${(i + 1) * 100}ms` }}
          >
            <feature.icon className="h-8 w-8 mx-auto text-brand-500" />
            <h3 className="font-semibold text-chocolate text-sm sm:text-base">{feature.title}</h3>
            <p className="text-xs text-chocolate/60">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* Jars Menu */}
      <section id="jars" className="space-y-6 sm:space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-chocolate">Jar Menu</h2>
            <span className="text-2xl animate-float">🍯</span>
          </div>
          <p className="text-chocolate/60 text-sm">Tap to add to cart, then checkout via WhatsApp</p>
          <p className="text-chocolate/70 text-base">Premium desserts in jars - perfect for gifting or treating yourself</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {menu.find((c) => c.id === "jars")!.items.map((p, i) => (
            <div
              key={p.id}
              className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>

      {/* Cookies Menu */}
      <section id="cookies" className="space-y-6 sm:space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-chocolate">Cookie Collection</h2>
            <span className="text-2xl animate-float animation-delay-200">🍪</span>
          </div>
          <p className="text-chocolate/60 text-sm">Freshly baked, wholesome goodness</p>
          <p className="text-chocolate/70 text-base">Artisanal cookies made with whole grains and raw sugar</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {menu.find((c) => c.id === "cookies")!.items.map((p, i) => (
            <div
              key={p.id}
              className={`${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="rounded-3xl bg-gradient-to-br from-brand-600 to-brand-700 p-8 sm:p-12 text-center text-white grain-texture">
        <div className="space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Order?</h2>
          <p className="text-white/90 text-lg">
            Get your favorite treats delivered fresh to your doorstep. Order now via WhatsApp!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={buildWhatsAppOrderLink()}
              target="_blank"
              rel="noreferrer"
              className="btn bg-white text-brand-700 hover:bg-cream hover:shadow-2xl group"
            >
              <Phone className="mr-2 h-4 w-4 group-hover:animate-pulse-soft" />
              Order on WhatsApp
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            {ig && (
              <a
                href={ig}
                target="_blank"
                rel="noreferrer"
                className="btn border-2 border-white text-white hover:bg-white/10"
              >
                <Instagram className="mr-2 h-4 w-4" />
                Follow Us
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}