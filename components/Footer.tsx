import { instagramProfileUrl } from "@/utils/site";

export default function Footer() {
  const ig = instagramProfileUrl();
  return (
    <footer className="mt-20 border-t border-black/5">
      <div className="container-gutter py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-chocolate/70">© {new Date().getFullYear()} Spoonful Bakery. Mumbai, India.</p>
        <div className="flex items-center gap-4 text-chocolate/70">
          {ig && (
            <a href={ig} aria-label="Instagram" className="hover:text-chocolate" target="_blank" rel="noreferrer">Instagram</a>
          )}
        </div>
      </div>
    </footer>
  );
}