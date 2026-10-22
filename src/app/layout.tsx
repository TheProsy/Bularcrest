import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Bularcrest | Construction · Design · Home Solutions in Nigeria",
  description:
    "A modern, trustworthy Nigerian construction company. We help you build, design, install 24/7 solar power, CCTV security, electrical wiring, and luxury interior finishing across Nigeria.",
  keywords: [
    "Nigerian construction company",
    "building contractor Lagos",
    "house construction Nigeria",
    "solar installation Lagos Abuja",
    "CCTV security Nigeria",
    "architectural design Nigeria",
    "building finishing Nigeria",
    "Bularcrest",
  ],
  openGraph: {
    title: "Bularcrest | Let's Build Something Good",
    description:
      "From building your home to making it beautiful, safe, and comfortable, Bularcrest is here to help.",
    url: "https://bularcrest.com",
    siteName: "Bularcrest",
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-[#0d1017] text-[#f3f4f6] flex flex-col antialiased selection:bg-[#d4af37] selection:text-slate-950 pb-16 md:pb-0">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
