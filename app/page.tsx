import Image from "next/image";
import menu from "@/data/menu";
import ProductCard from "@/components/ProductCard";
import { Phone, Instagram } from "lucide-react";
import { buildWhatsAppOrderLink, instagramProfileUrl } from "@/utils/site";

export default function HomePage() {
  const ig = instagramProfileUrl();
  return (
    <div className="space-y-24">
      {/* Hero */}
      <section id="home" className="relative overflow-hidden rounded-3xl bg-brand-100 ring-1 ring-brand-200">
        <div className="grid gap-8 md:grid-cols-2 items-center p-8 sm:p-12">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-chocolate tracking-tight font-serif">
              Premium artisan desserts
            </h1>
            <p className="mt-4 text-lg text-chocolate/80 max-w-xl">
              Handcrafted with love in Mumbai, India. Experience our delicious jar desserts and artisanal cookies made with whole grains and raw sugar.
            </p>
            <div className="mt-6 flex gap-3 flex-wrap">
              <a
                href={buildWhatsAppOrderLink()}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <Phone className="mr-2 h-4 w-4" /> Order on WhatsApp
              </a>
              {ig && (
                <a href={ig} target="_blank" rel="noreferrer" className="btn btn-outline">
                  <Instagram className="mr-2 h-4 w-4" /> See Instagram
                </a>
              )}
              <a href="#jars" className="btn btn-outline">Browse Jars</a>
            </div>
          </div>
          <div className="relative h-64 sm:h-80 md:h-full">
            <Image
              src="/images/hero/hero-jars.jpg"
              alt="Assorted jar desserts and cookies"
              fill
              className="object-cover rounded-2xl shadow-soft"
              priority
            />
          </div>
        </div>
      </section>

      {/* Jars Menu */}
      <section id="jars" className="space-y-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold text-chocolate font-serif">Jar Menu</h2>
          <p className="text-chocolate/60 text-sm">Tap add to cart, then checkout via WhatsApp</p>
        </div>
        <p className="text-chocolate/70">Premium desserts in jars - perfect for any occasion</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menu.find((c) => c.id === "jars")!.items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Cookies */}
      <section id="cookies" className="space-y-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold text-chocolate font-serif">Cookies</h2>
          <p className="text-chocolate/60 text-sm">Minimum order 250 grams (10 pieces)</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menu.find((c) => c.id === "cookies")!.items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="grid gap-8 md:grid-cols-2 items-center">
        <div className="relative h-64 sm:h-80 md:h-full order-last md:order-first">
          <Image
            src="/images/about/baking.jpg"
            alt="Handcrafting small-batch desserts in a home bakery"
            fill
            className="object-cover rounded-2xl shadow-soft"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-chocolate font-serif">About</h2>
          <p className="mt-4 text-chocolate/80 leading-relaxed">
            Spoonful Bakery is a boutique home bakery in Mumbai, India. We use premium ingredients—real butter, Belgian chocolate, seasonal fruit, and stone-ground whole wheat—to craft unique, perfected recipes. Small-batch bakes, made with a lot of love, for celebrations big and small.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="card p-8">
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold text-chocolate font-serif">Order Information</h3>
            <ul className="mt-2 text-chocolate/80 list-disc list-inside space-y-1">
              <li>Place orders at least 5 days in advance</li>
              <li>50% payment once order is confirmed</li>
              <li>Remaining 50% after delivery</li>
              <li>Delivery fee varies by distance and order size</li>
              <li>Cancellation: Part payment non-refundable</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-chocolate font-serif">Location</h3>
            <p className="mt-2 text-chocolate/80">Mumbai, India</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-chocolate font-serif">Order</h3>
            <p className="mt-2 text-chocolate/80">WhatsApp us your order and we will confirm quickly.</p>
            <a
              href={buildWhatsAppOrderLink()}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary mt-3 w-fit"
            >
              <Phone className="mr-2 h-4 w-4" /> Chat on WhatsApp
            </a>
            {ig && (
              <a href={ig} target="_blank" rel="noreferrer" className="btn btn-outline mt-2 w-fit">
                <Instagram className="mr-2 h-4 w-4" /> Instagram
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}