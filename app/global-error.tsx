"use client";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  // eslint-disable-next-line no-console
  console.error(error);
  return (
    <html>
      <body className="bg-cream">
        <div className="container-gutter py-16">
          <div className="card p-8 text-center">
            <h2 className="text-2xl font-bold text-chocolate">Something went wrong</h2>
            <p className="mt-2 text-chocolate/70">Please try again or reload the page.</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <button className="btn btn-primary" onClick={() => reset()}>Try again</button>
              <button className="btn btn-outline" onClick={() => window.location.reload()}>Reload</button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}