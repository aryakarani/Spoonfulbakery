import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/5">
      <div className="container-gutter py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-chocolate/70">© {new Date().getFullYear()} Spoonful Bakery. All rights reserved.</p>
        <div className="flex items-center gap-4 text-chocolate/70">
          <a href="#" aria-label="Instagram" className="hover:text-chocolate"><Instagram size={18} /></a>
          <a href="#" aria-label="Facebook" className="hover:text-chocolate"><Facebook size={18} /></a>
        </div>
      </div>
    </footer>
  );
}