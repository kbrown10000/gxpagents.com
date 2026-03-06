import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GxP Agents - AI Agents for Life Sciences | USDM Partnership",
  description: "Discover how AI agents transform life sciences workflows across Quality, Regulatory, Clinical, Manufacturing, Safety, Medical Affairs, Cybersecurity, and Corporate functions. A USDM Life Sciences partnership.",
  keywords: ["AI agents", "life sciences", "GxP", "USDM", "quality", "regulatory affairs", "clinical development", "pharmacovigilance", "manufacturing"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
