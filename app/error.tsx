"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error for visibility during development and monitoring integrations
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div className="container-gutter py-16">
      <div className="card p-8 text-center">
        <h2 className="text-2xl font-bold text-chocolate">Something went wrong</h2>
        <p className="mt-2 text-chocolate/70">An unexpected error occurred. You can try again or reload the page.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button className="btn btn-primary" onClick={() => reset()}>Try again</button>
          <button className="btn btn-outline" onClick={() => window.location.reload()}>Reload</button>
        </div>
      </div>
    </div>
  );
}