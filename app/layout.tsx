import type { Metadata } from "next";
import "./globals.css";
import { Merriweather, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";

const serif = Merriweather({ subsets: ["latin"], weight: ["300", "400", "700"] });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Spoonful Bakery",
  description: "Fresh, handcrafted bakes. Order on WhatsApp.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable}>
      <body className={`${serif.className} bg-cream`}>        
        <CartProvider>
          <Header />
          <main className="container-gutter pt-6 pb-16">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}