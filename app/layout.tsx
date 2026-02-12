import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimatedCursor } from "@/components/animated-cursor";
import { FlowBackground } from "@/components/flow-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Autoflow - Pouzdana IT rješenja i servis računala",
  description: "Brzina, pouzdanost i transparentne cijene. IT servis, optimizacija, instalacija OS-a, razvoj aplikacija i više.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hr">
      <body className={inter.className}>
        <FlowBackground />
        <AnimatedCursor />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

