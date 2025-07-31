import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jill Morgan - Marketing Manager | Professional CV",
  description: "Professional CV of Jill Morgan, experienced Marketing Manager with 8+ years in digital marketing, content strategy, and team leadership. View my experience, skills, and achievements.",
  keywords: "Jill Morgan, Marketing Manager, Digital Marketing, Content Strategy, SEO, Team Leadership, Professional CV, Resume",
  authors: [{ name: "Jill Morgan" }],
  openGraph: {
    title: "Jill Morgan - Marketing Manager",
    description: "Professional CV showcasing 8+ years of marketing experience and proven track record in digital campaigns and team leadership.",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
