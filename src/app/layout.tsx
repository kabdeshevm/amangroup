import type { Metadata } from "next";
import "@/styles/globals.css";
import { Manrope, Cinzel } from "next/font/google";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { brand } from "@/lib/constants";

const manrope = Manrope({ subsets: ["latin", "cyrillic"], variable: "--font-body" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: `${brand.name} — AI workforce`,
  description:
    "Цифровые сотрудники на базе ИИ для бизнеса: чатботы, ИИ-аналитики документов и автоматизированные workflow.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${manrope.variable} ${cinzel.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}