import Image from "next/image";
import products from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Phone } from "lucide-react";

export default function HomePage() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "2348012345678";
  return (
    <div className="space-y-24">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-brand-100 ring-1 ring-brand-200">
        <div className="grid gap-8 md:grid-cols-2 items-center p-8 sm:p-12">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-chocolate tracking-tight">
              Baked fresh with a spoonful of love
            </h1>
            <p className="mt-4 text-lg text-chocolate/80 max-w-xl">
              Artisanal cakes, pastries and breads made daily. Order your favorites and pick up in-store or get them delivered.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <Phone className="mr-2 h-4 w-4" /> Order on WhatsApp
              </a>
              <a href="#menu" className="btn btn-outline">Browse Menu</a>
            </div>
          </div>
          <div className="relative h-64 sm:h-80 md:h-full">
            <Image
              src="https://images.unsplash.com/photo-1483695028939-5bca2e19f2d3?q=80&w=1600&auto=format&fit=crop"
              alt="Bakery display"
              fill
              className="object-cover rounded-2xl shadow-soft"
              priority
            />
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="space-y-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-bold text-chocolate">Best sellers</h2>
          <p className="text-chocolate/60 text-sm">Tap add to cart, then checkout via WhatsApp</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="grid gap-8 md:grid-cols-2 items-center">
        <div className="relative h-64 sm:h-80 md:h-full order-last md:order-first">
          <Image
            src="https://images.unsplash.com/photo-1483691278019-cb7253bee49f?q=80&w=1600&auto=format&fit=crop"
            alt="Baking in progress"
            fill
            className="object-cover rounded-2xl shadow-soft"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-chocolate">Our story</h2>
          <p className="mt-4 text-chocolate/80 leading-relaxed">
            Spoonful Bakery is a neighborhood favorite, known for classic recipes and
            seasonal flavors. We use real butter, Belgian chocolate, and sustainably
            sourced flour to create memorable treats for your celebrations.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="card p-8">
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold text-chocolate">Visit us</h3>
            <p className="mt-2 text-chocolate/80">123 Baker Street, Your City</p>
            <a className="text-brand-700 underline mt-1 inline-block" href="https://maps.google.com" target="_blank" rel="noreferrer">Get directions</a>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-chocolate">Hours</h3>
            <p className="mt-2 text-chocolate/80">Mon–Sat: 8am – 7pm</p>
            <p className="text-chocolate/80">Sun: 9am – 5pm</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-chocolate">Order</h3>
            <p className="mt-2 text-chocolate/80">WhatsApp us your order and we will confirm quickly.</p>
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary mt-3 w-fit"
            >
              <Phone className="mr-2 h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}