import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { Inter, Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kabayun.com"),
  title: "Kabayun - Psytrance Producer & DJ",
  description:
    "Music projects and collaborations by Kabayun (David Mostoller) - Psytrance producer from Philadelphia, USA. Featured at major festivals including Boom, Ozora, MoDem, and Lost Theory.",
  keywords: [
    "Kabayun",
    "David Mostoller",
    "Psytrance",
    "Electronic Music",
    "Sangoma Records",
    "Philadelphia",
    "DJ",
    "Producer",
    "Festival",
    "Boom Festival",
    "Ozora",
    "MoDem Festival",
  ],
  authors: [{ name: "David Mostoller", url: "https://www.kabayun.com" }],
  creator: "David Mostoller",
  publisher: "Kabayun",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.kabayun.com",
    siteName: "Kabayun",
    title: "Kabayun - Psychedelic Trance Music",
    description:
      "Psytrance producer David Mostoller (Kabayun) creates intensely psychedelic experiences through music, performing at major festivals worldwide including Boom, Ozora, and MoDem.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kabayun - Psytrance Producer & DJ",
    description:
      "Psytrance producer from Philadelphia, signed to Sangoma Records and FM Booking.",
    creator: "@kabayun",
  },
  alternates: {
    canonical: "https://www.kabayun.com",
  },
  category: "Music",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>
        <ThemeProvider defaultTheme="system">{children}</ThemeProvider>
        <Analytics />
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=G-35W0RMRB1M`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-35W0RMRB1M');
            `}
          </Script>
        </>
      </body>
    </html>
  );
}
