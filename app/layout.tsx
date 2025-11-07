import type { Metadata } from "next";
import { Inter, Noto_Serif_Devanagari } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import MusicPlayer from "./components/MusicPlayer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoAssamese = Noto_Serif_Devanagari({
  variable: "--font-assamese",
  subsets: ["devanagari"],
});

export const metadata: Metadata = {
  title: "Zubeen Garg - The Musical Legend | Tribute Website",
  description: "A tribute to Zubeen Garg, the legendary Assamese singer, composer, and musician. Explore his songs, biography, photos, and leave your tributes.",
  keywords: "Zubeen Garg, Assamese music, singer, composer, musician, tribute",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${notoAssamese.variable} antialiased bg-black text-white overflow-x-hidden`}
      >
        <Navigation />
        <main className="min-h-screen pb-24">
          {children}
        </main>
        {/* <MusicPlayer /> */}
      </body>
    </html>
  );
}
