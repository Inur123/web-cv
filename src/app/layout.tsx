import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Muhammad Zainur Roziqin | Fullstack Developer",
  description: "Portofolio Profesional Muhammad Zainur Roziqin, Fullstack Developer spesialis Golang, Next.js, dan Flutter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakarta.variable} scroll-smooth`}>
      <body className="bg-slate-950 text-slate-100 font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
