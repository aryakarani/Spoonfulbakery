"use client";
import { useEffect, useState, useRef } from "react";
import menu from "@/data/menu";
import ProductCard from "@/components/ProductCard";
import { Phone, Instagram, ChefHat, Heart, Award, Clock, Sparkles, ArrowRight } from "lucide-react";
import { buildWhatsAppOrderLink, instagramProfileUrl } from "@/utils/site";
import AnnouncementMarquee from "@/components/AnnouncementMarquee";

export default function HomePage() {
  const ig = instagramProfileUrl();
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    setIsVisible(true);
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* Hero Section with Animations */}
      <section id="home" className={`relative min-h-[80vh] flex items-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        {/* Subtle gradient background with earthy tones */}
        <div className="absolute inset-0 gradient-earth opacity-30"></div>
        
        <div className="relative z-10 w-full">
          <div className="rounded-3xl bg-white/90 backdrop-blur-sm ring-1 ring-earth-200/30 overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 gap-12 items-center p-12 sm:p-16">
              <div className="space-y-8 relative">
                {/* Badge with earthy gradient */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-earth-100 to-earth-200/50 backdrop-blur rounded-full text-sm font-medium text-earth-800 animate-slide-up shadow-sm">
                  <Sparkles className="h-4 w-4 text-earth-600" />
                  Artisan Bakery • Mumbai
                </div>
                
                <div className="relative">
                  <h1 className="text-5xl sm:text-7xl font-bold text-neutral-900 tracking-tight leading-[1.1] animate-slide-up animation-delay-100">
                    Where Every Bite
                    <span className="block bg-gradient-to-r from-earth-500 to-earth-600 bg-clip-text text-transparent mt-3">
                      Tells a Story
                    </span>
                  </h1>
                  
                  {/* Kawaii floating cupcake with sparkles */}
                  <div className="pointer-events-none absolute -top-6 right-0 sm:-top-8 sm:-right-4 select-none" aria-hidden>
                    <div className="relative">
                      <span className="text-6xl sm:text-7xl animate-float drop-shadow">🧁</span>
                      <span className="absolute -top-2 -right-3 text-xl animate-pulse-soft">✨</span>
                      <span className="absolute -bottom-2 -left-3 text-lg animate-pulse-soft" style={{animationDelay: '150ms'}}>✨</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl leading-relaxed animate-slide-up animation-delay-200">
                  Handcrafted desserts made with premium ingredients, whole grains, and pure love. Experience the perfect blend of tradition and innovation.
                </p>
                
                {/* CTA Buttons with earthy colors */}
                <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-300">
                  <a
                    href={buildWhatsAppOrderLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-lg group shadow-lg hover:shadow-xl transition-all"
                  >
                    <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse-soft" /> 
                    Order on WhatsApp
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a href="#jars" className="btn btn-outline btn-lg group hover:shadow-md transition-all">
                    Explore Menu
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with More Spacing */}
      <section id="features" className="px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {[
            { icon: ChefHat, title: "Artisan Made", desc: "Handcrafted with passion", color: "earth" },
            { icon: Heart, title: "Made with Love", desc: "Family recipes", color: "warm" },
            { icon: Award, title: "Premium Quality", desc: "Finest ingredients", color: "brand" },
            { icon: Clock, title: "Fresh Daily", desc: "Never frozen", color: "earth" }
          ].map((feature, i) => (
            <div 
              key={feature.title}
              className={`card p-6 sm:p-8 text-center space-y-3 tile-interactive bg-white hover:shadow-xl transition-all ${visibleSections.has('features') ? 'animate-emerge' : 'opacity-0'}`}
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              <div className={`inline-flex p-3 rounded-full bg-gradient-to-br from-${feature.color}-50 to-${feature.color}-100`}>
                <feature.icon className={`h-8 w-8 text-${feature.color}-600`} />
              </div>
              <h3 className="font-semibold text-neutral-800 text-base sm:text-lg">{feature.title}</h3>
              <p className="text-sm text-neutral-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Menu Section with Announcement Marquee */}
      <div className="space-y-8">
        {/* Announcement Marquee */}
        <div className="px-4">
          <AnnouncementMarquee />
        </div>

        {/* Jars Menu */}
        <section id="jars" className={`space-y-8 sm:space-y-10 ${visibleSections.has('jars') ? 'scroll-emerge' : 'opacity-0'}`}>
          <div className="space-y-3 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="text-3xl animate-float">🍰</span>
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-neutral-800 to-neutral-700 bg-clip-text text-transparent">Jar Desserts</h2>
              <span className="text-3xl animate-float-delayed">🍰</span>
            </div>
            <p className="text-neutral-500 text-base">Perfect for gifting or treating yourself</p>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">Premium desserts layered with love in convenient jars</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {menu.find((c) => c.id === "jars")!.items.map((p, i) => (
              <div
                key={p.id}
                className={`${visibleSections.has('jars') ? 'magic-scroll' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </section>

        {/* Cookies Menu */}
        <section id="cookies" className={`space-y-8 sm:space-y-10 pt-12 ${visibleSections.has('cookies') ? 'scroll-emerge' : 'opacity-0'}`}>
          <div className="space-y-3 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="text-3xl animate-float">🍪</span>
              <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-neutral-800 to-neutral-700 bg-clip-text text-transparent">Cookie Collection</h2>
              <span className="text-3xl animate-float-delayed">🍪</span>
            </div>
            <p className="text-neutral-500 text-base">Baked fresh with whole grains</p>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">Artisanal cookies made with raw sugar and premium ingredients</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {menu.find((c) => c.id === "cookies")!.items.map((p, i) => (
              <div
                key={p.id}
                className={`${visibleSections.has('cookies') ? 'magic-scroll-scale' : 'opacity-0'}`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Simple Contact CTA with modern gradient */}
      <section id="contact" className={`px-4 ${visibleSections.has('contact') ? 'scroll-emerge' : 'opacity-0'}`}>
        <div className="rounded-3xl bg-gradient-to-br from-earth-100 via-brand-100 to-warm-100 p-12 sm:p-16 text-center text-earth-900 max-w-4xl mx-auto shadow-2xl">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-5xl font-bold">Ready to Indulge?</h2>
            <p className="text-neutral-700 text-lg sm:text-xl max-w-2xl mx-auto">
              Order your favorite treats now and get them delivered fresh to your doorstep
            </p>
            <a
              href={buildWhatsAppOrderLink()}
              target="_blank"
              rel="noreferrer"
              className="btn bg-earth-600 text-white hover:bg-earth-500 hover:shadow-2xl group inline-flex btn-lg transition-all"
            >
              <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse-soft" />
              Start Your Order
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}