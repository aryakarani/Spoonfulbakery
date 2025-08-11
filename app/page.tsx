"use client";
import { useEffect, useState, useRef } from "react";
import menu from "@/data/menu";
import ProductCard from "@/components/ProductCard";
import { Phone, Instagram, ChefHat, Heart, Award, Clock, Sparkles, ArrowRight, Cookie as CookieIcon, Cake } from "lucide-react";
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
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 text-6xl animate-float-slow opacity-20">🍪</div>
          <div className="absolute top-40 right-20 text-5xl animate-float-delayed opacity-20">🧁</div>
          <div className="absolute bottom-20 left-1/4 text-7xl animate-parallax opacity-15">🎂</div>
          <div className="absolute bottom-40 right-1/3 text-5xl animate-float-slow opacity-20">🍰</div>
          <div className="absolute top-1/2 left-1/2 text-8xl animate-parallax opacity-10">🥐</div>
          <div className="absolute top-60 left-1/3 text-6xl animate-float-delayed opacity-15">🍩</div>
        </div>

        <div className="relative z-10 w-full">
          <div className="rounded-3xl bg-gradient-to-br from-sand via-white to-earth-50/30 ring-1 ring-earth-200/30 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 items-center p-12 sm:p-16">
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full text-sm font-medium text-earth-600 animate-slide-up shadow-sm">
                  <Sparkles className="h-4 w-4" />
                  Artisan Bakery • Mumbai
                </div>
                
                <h1 className="text-5xl sm:text-7xl font-bold text-chocolate tracking-tight leading-[1.1] animate-slide-up animation-delay-100">
                  Where Every Bite
                  <span className="block text-earth-600 mt-3">Tells a Story</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-chocolate/70 max-w-2xl leading-relaxed animate-slide-up animation-delay-200">
                  Handcrafted desserts made with premium ingredients, whole grains, and pure love. Experience the perfect blend of tradition and innovation.
                </p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-300">
                  <a
                    href={buildWhatsAppOrderLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-lg group shadow-lg"
                  >
                    <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse-soft" /> 
                    Order on WhatsApp
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a href="#jars" className="btn btn-outline btn-lg group">
                    Explore Menu
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Hero Image Area with Animated Elements */}
              <div className="relative h-96 lg:h-full flex items-center justify-center">
                <div className="relative">
                  {/* Central decorative element */}
                  <div className="w-64 h-64 bg-gradient-to-br from-earth-200 to-warm-200 rounded-full opacity-30 animate-pulse-soft"></div>
                  
                  {/* Floating dessert icons */}
                  <div className="absolute -top-10 -left-10 bg-white rounded-2xl p-4 shadow-lg animate-float">
                    <CookieIcon className="h-8 w-8 text-brand-500" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 bg-white rounded-2xl p-4 shadow-lg animate-float-delayed">
                    <Cake className="h-8 w-8 text-earth-500" />
                  </div>
                  
                  {/* Text overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <p className="brand-name text-5xl text-brand-600 opacity-60">Fresh Daily</p>
                    </div>
                  </div>
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
            { icon: Heart, title: "Made with Love", desc: "Family recipes", color: "brand" },
            { icon: Award, title: "Premium Quality", desc: "Finest ingredients", color: "warm" },
            { icon: Clock, title: "Fresh Daily", desc: "Never frozen", color: "earth" }
          ].map((feature, i) => (
            <div 
              key={feature.title}
              className={`card p-6 sm:p-8 text-center space-y-3 tile-interactive bg-white hover:shadow-lg ${visibleSections.has('features') ? 'animate-emerge' : 'opacity-0'}`}
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              <div className={`inline-flex p-3 rounded-full bg-${feature.color}-50`}>
                <feature.icon className={`h-8 w-8 text-${feature.color}-500`} />
              </div>
              <h3 className="font-semibold text-chocolate text-base sm:text-lg">{feature.title}</h3>
              <p className="text-sm text-chocolate/60">{feature.desc}</p>
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
              <h2 className="text-4xl sm:text-5xl font-bold text-chocolate">Jar Desserts</h2>
              <span className="text-3xl animate-float-delayed">🍰</span>
            </div>
            <p className="text-chocolate/60 text-base">Perfect for gifting or treating yourself</p>
            <p className="text-chocolate/70 text-lg max-w-2xl mx-auto">Premium desserts layered with love in convenient jars</p>
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
              <h2 className="text-4xl sm:text-5xl font-bold text-chocolate">Cookie Collection</h2>
              <span className="text-3xl animate-float-delayed">🍪</span>
            </div>
            <p className="text-chocolate/60 text-base">Baked fresh with whole grains</p>
            <p className="text-chocolate/70 text-lg max-w-2xl mx-auto">Artisanal cookies made with raw sugar and premium ingredients</p>
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

      {/* Simple Contact CTA without duplicate social links */}
      <section id="contact" className={`px-4 ${visibleSections.has('contact') ? 'scroll-emerge' : 'opacity-0'}`}>
        <div className="rounded-3xl bg-gradient-to-br from-earth-600 to-earth-700 p-12 sm:p-16 text-center text-white grain-texture max-w-4xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-5xl font-bold">Ready to Indulge?</h2>
            <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto">
              Order your favorite treats now and get them delivered fresh to your doorstep
            </p>
            <a
              href={buildWhatsAppOrderLink()}
              target="_blank"
              rel="noreferrer"
              className="btn bg-white text-earth-700 hover:bg-sand hover:shadow-2xl group inline-flex btn-lg"
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