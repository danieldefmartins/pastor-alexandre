import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pastor Alexandre Mendes",
    template: "%s | Pastor Alexandre Mendes",
  },
  description:
    "Pastor, pregador internacional, cantor e especialista em Israel há quase 30 anos. Fundador do Templo dos Milagres em Malden, MA. Conheça a Terra Santa.",
  keywords: [
    "Pastor Alexandre Mendes",
    "viagem Israel",
    "pregador internacional",
    "Terra Santa",
    "TDM Church",
    "Templo dos Milagres",
  ],
  openGraph: {
    title: "Pastor Alexandre Mendes",
    description:
      "Pastor, pregador internacional e especialista em Israel há quase 30 anos. Fundador do Templo dos Milagres.",
    url: "https://pastoralexandre.com",
    siteName: "Pastor Alexandre Mendes",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/pastor-alexandre-portrait.jpg",
        width: 800,
        height: 800,
        alt: "Pastor Alexandre Mendes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pastor Alexandre Mendes",
    description:
      "Pastor, pregador internacional e especialista em Israel há quase 30 anos.",
    images: ["/images/pastor-alexandre-portrait.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
