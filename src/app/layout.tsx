import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "GxP Agents - AI Agents for Life Sciences | USDM Partnership",
  description: "Discover how AI agents transform life sciences workflows across Quality, Regulatory, Clinical, Manufacturing, Safety, Medical Affairs, Cybersecurity, and Corporate functions. A USDM Life Sciences partnership.",
  keywords: ["AI agents", "life sciences", "GxP", "USDM", "quality", "regulatory affairs", "clinical development", "pharmacovigilance", "manufacturing", "ai governance", "SaMD", "21 CFR Part 11"],
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'GxP Agents - AI Agents for Life Sciences',
    description: 'Purpose-built intelligent automation across 8 regulated domains. A USDM Life Sciences partnership.',
    url: 'https://gxpagents.com',
    siteName: 'GxP Agents',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GxP Agents - AI Agents for Life Sciences',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GxP Agents - AI Agents for Life Sciences',
    description: 'Purpose-built intelligent automation across 8 regulated domains.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GxP Agents",
              url: "https://gxpagents.com",
              logo: "https://gxpagents.com/images/logo-mark.png",
              description:
                "AI agents purpose-built for regulated life sciences workflows across Quality, Regulatory, Clinical, Manufacturing, and beyond.",
              foundingDate: "2026",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Santa Barbara",
                addressRegion: "CA",
                addressCountry: "US",
              },
              parentOrganization: {
                "@type": "Organization",
                name: "USDM Life Sciences",
                url: "https://usdm.com",
              },
              sameAs: [
                "https://usdm.com",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />

        {/* ElevenLabs Conversational AI Agent */}
        <elevenlabs-convai agent-id="agent_0601kk0gv6rkfxktjkexjkyykssk"></elevenlabs-convai>
        <script
          src="https://elevenlabs.io/convai-widget/index.js"
          async
          type="text/javascript"
        ></script>
      </body>
    </html>
  );
}
