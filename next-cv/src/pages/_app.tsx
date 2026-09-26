import type { AppProps } from 'next/app';
import '../styles/globals.css';

// Note: next/font/google (Carlito) was tried here but caused Vercel production
// builds to fail (build succeeded locally in every attempt, but the exact same
// commit failed on Vercel twice in a row with no accessible build log — the
// Google Fonts build-time fetch is the only network-dependent step introduced
// by this change). Falling back to the system font stack the plan itself
// documents as the contingency: `Calibri, Carlito, "Segoe UI", Arial, sans-serif`.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="antialiased">
      <Component {...pageProps} />
    </div>
  );
}