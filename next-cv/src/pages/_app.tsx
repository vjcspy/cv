import type { AppProps } from 'next/app';
import { Carlito } from "next/font/google";
import '../styles/globals.css';

const carlito = Carlito({
  variable: "--font-carlito",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  fallback: ["Calibri", "Segoe UI", "Arial", "sans-serif"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${carlito.variable} antialiased`}>
      <Component {...pageProps} />
    </div>
  );
}