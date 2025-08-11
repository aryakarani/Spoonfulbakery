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
        {/* Subtle gradient background */}
        <div className="absolute inset-0 gradient-warm opacity-30"></div>
        {/* Softer accent blobs */}
        <div className="pointer-events-none absolute -top-10 -left-10 w-64 h-64 bg-peach/20 rounded-full blur-3xl animate-pulse-soft" aria-hidden></div>
        <div className="pointer-events-none absolute -bottom-10 -right-10 w-72 h-72 bg-mint/20 rounded-full blur-3xl animate-pulse-soft" aria-hidden style={{animationDelay: '2s'}}></div>
        <div className="pointer-events-none absolute top-1/2 left-1/3 w-96 h-96 bg-coral/10 rounded-full blur-3xl animate-float" aria-hidden></div>
        
        <div className="relative z-10 w-full">
          <div className="rounded-3xl bg-white/95 backdrop-blur-sm ring-1 ring-earth-200/30 overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 gap-12 items-center p-12 sm:p-16">
              <div className="space-y-8 relative">
                {/* Badge with subtle gradient */}
                <div className="inline-flex items-center gap-2 px-4 py-2 gradient-subtle-warm text-white backdrop-blur rounded-full text-sm font-medium animate-slide-up shadow-lg">
                  <Sparkles className="h-4 w-4 text-white animate-pulse" />
                  Artisan Bakery • Mumbai
                </div>
                
                <div className="relative">
                  <h1 className="text-5xl sm:text-7xl font-bold text-neutral-900 tracking-tight leading-[1.1] animate-slide-up animation-delay-100">
                    Where Every Bite
                    <span className="block text-neutral-900 mt-3">
                      Tells a Story
                    </span>
                  </h1>
                  
                  {/* Kawaii floating cupcake with sparkles */}
                  <div className="pointer-events-none absolute -top-6 right-0 sm:-top-8 sm:-right-4 select-none" aria-hidden>
                    <div className="relative">
                      <span className="text-6xl sm:text-7xl animate-float drop-shadow-xl">🧁</span>
                      <span className="absolute -top-2 -right-3 text-2xl animate-pulse text-gold">✨</span>
                      <span className="absolute -bottom-2 -left-3 text-xl animate-pulse text-coral" style={{animationDelay: '150ms'}}>✨</span>
                      <span className="absolute top-1/2 -right-6 text-lg animate-pulse text-mint" style={{animationDelay: '300ms'}}>💫</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg sm:text-xl text-neutral-700 max-w-2xl leading-relaxed animate-slide-up animation-delay-200">
                  Handcrafted desserts made with premium ingredients, whole grains, and pure love. Experience the perfect blend of tradition and innovation.
                </p>
                <div className="text-base sm:text-lg text-earth-700 font-semibold max-w-2xl leading-relaxed animate-slide-up animation-delay-250 bg-gradient-to-r from-peach/10 to-coral/10 p-4 rounded-xl border-l-4 border-coral">
                  Since we are a small bakery, please place your orders <span className="text-coral font-bold text-xl">5</span> days in advance.
                </div>
                
                {/* CTA Buttons with subtle colors */}
                <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-300">
                  <a
                    href={buildWhatsAppOrderLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="btn gradient-subtle-warm text-white btn-lg group shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                  >
                    <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse-soft" /> 
                    Order on WhatsApp
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a href="#jars" className="btn bg-mint text-white hover:bg-mint/90 btn-lg group shadow-lg hover:shadow-xl transition-all">
                    Explore Menu
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Announcement */}
      <AnnouncementMarquee />

      {/* Features Section with subtle colors */}
      <section className={`px-4 ${visibleSections.has('features') ? 'scroll-emerge' : 'opacity-0'}`} id="features">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6 text-center group hover:shadow-xl transition-all hover:-translate-y-1 border border-transparent hover:border-coral/20">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full gradient-subtle-warm flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <ChefHat className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-semibold text-neutral-800 mb-2">Handcrafted Daily</h3>
              <p className="text-sm text-neutral-600">Fresh from our ovens to your table</p>
            </div>
            <div className="card p-6 text-center group hover:shadow-xl transition-all hover:-translate-y-1 border border-transparent hover:border-mint/20">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-mint flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Heart className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-semibold text-neutral-800 mb-2">Made with Love</h3>
              <p className="text-sm text-neutral-600">Every recipe crafted with passion</p>
            </div>
            <div className="card p-6 text-center group hover:shadow-xl transition-all hover:-translate-y-1 border border-transparent hover:border-rose/20">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full gradient-subtle-rose flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Award className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-semibold text-neutral-800 mb-2">Premium Quality</h3>
              <p className="text-sm text-neutral-600">Only the finest ingredients</p>
            </div>
            <div className="card p-6 text-center group hover:shadow-xl transition-all hover:-translate-y-1 border border-transparent hover:border-gold/20">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full gradient-subtle-earth flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <Clock className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-semibold text-neutral-800 mb-2">Order Ahead</h3>
              <p className="text-sm text-neutral-600">5 days advance for freshness</p>
            </div>
          </div>
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

      {/* Simple Contact CTA with cohesive gradient */}
      <section id="contact" className={`px-4 ${visibleSections.has('contact') ? 'scroll-emerge' : 'opacity-0'}`}>
        <div className="rounded-3xl gradient-subtle-sage p-12 sm:p-16 text-center text-white max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
          
          <div className="space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-5xl font-bold">Ready to Indulge?</h2>
            <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto">
              Order your favorite treats now and get them delivered fresh to your doorstep
            </p>
            <div className="space-y-3">
              <a
                href={buildWhatsAppOrderLink()}
                target="_blank"
                rel="noreferrer"
                className="btn bg-white text-earth-700 hover:bg-white/90 hover:shadow-2xl group inline-flex btn-lg transition-all"
              >
                <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse-soft" />
                Start Your Order
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="text-white/80 text-base font-medium mt-4">
                We also cater for <span className="text-white font-bold">Dinner Parties</span> and <span className="text-white font-bold">Corporate Orders</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}