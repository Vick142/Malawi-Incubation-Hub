import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Smart Business Incubation Hub | Daeyang University",
  description: "Empowering Student Entrepreneurs in Malawi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.className} bg-white text-slate-900`}>
        <Header />
        <div className="min-h-screen">
          {children}
        </div>
        <footer className="bg-[#1E3A8A] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-slate-300 font-medium tracking-tight">© 2026 Daeyang University Smart Business Incubation Hub. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

