import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EmrahEdu - Məntiq və İnformatika",
  description: "Məntiq və İnformatika imtahanlarına hazırlıq platforması.",
};

import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

// ... imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="az">
      <body className={cn(inter.className, "antialiased min-h-screen bg-background font-sans flex flex-col")}>
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
