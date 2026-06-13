import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://zainur.my.id";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muhammad Zainur Roziqin | Laravel Fullstack Developer",
    template: "%s | Muhammad Zainur Roziqin",
  },
  description:
    "Portofolio profesional Muhammad Zainur Roziqin – Laravel Fullstack Developer dari Jawa Timur, Indonesia. Berpengalaman membangun aplikasi web dengan Laravel, Livewire, PHP, MySQL, dan integrasi Apache Kafka.",
  keywords: [
    "Muhammad Zainur Roziqin",
    "Zainur Roziqin",
    "Laravel Developer",
    "Fullstack Developer Indonesia",
    "PHP Developer",
    "Livewire Developer",
    "Web Developer Ponorogo",
    "Web Developer Jawa Timur",
    "Portofolio Developer",
    "Laravel Fullstack",
    "Backend Developer PHP",
    "Next.js Developer",
    "MySQL Developer",
    "zainur.my.id",
  ],
  authors: [{ name: "Muhammad Zainur Roziqin", url: siteUrl }],
  creator: "Muhammad Zainur Roziqin",
  publisher: "Muhammad Zainur Roziqin",
  category: "Technology",
  alternates: {
    canonical: siteUrl,
    languages: {
      "id-ID": siteUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: siteUrl,
    siteName: "Muhammad Zainur Roziqin",
    title: "Muhammad Zainur Roziqin | Laravel Fullstack Developer",
    description:
      "Portofolio profesional Muhammad Zainur Roziqin – Laravel Fullstack Developer berpengalaman dalam membangun aplikasi web yang cepat, efisien, dan terintegrasi.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Muhammad Zainur Roziqin – Laravel Fullstack Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Zainur Roziqin | Laravel Fullstack Developer",
    description:
      "Portofolio profesional Muhammad Zainur Roziqin – Laravel Fullstack Developer berpengalaman dalam membangun aplikasi web yang cepat, efisien, dan terintegrasi.",
    images: [`${siteUrl}/og-image.png`],
    creator: "@inurzainur87",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.json",
  other: {
    "google-site-verification": "REPLACE_WITH_YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Zainur Roziqin",
  url: siteUrl,
  image: `${siteUrl}/og-image.png`,
  jobTitle: "Laravel Fullstack Developer",
  description:
    "Fullstack Developer spesialis Laravel, Livewire, dan PHP. Berpengalaman membangun sistem web administrasi desa, portal organisasi, absensi QR Code, serta integrasi Apache Kafka.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Jawa Timur",
    addressCountry: "ID",
  },
  sameAs: [
    "https://github.com/Inur123",
    "https://www.linkedin.com/in/muhammad-zainur-roziqin-8453b130a/",
    "https://www.instagram.com/inurzainur87/",
  ],
  knowsAbout: [
    "Laravel",
    "PHP",
    "Livewire",
    "MySQL",
    "Apache Kafka",
    "Linux VPS",
    "Nginx",
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "Bootstrap",
  ],
  alumniOf: {
    "@type": "Organization",
    name: "Universitas Muhammadiyah Ponorogo",
  },
  worksFor: {
    "@type": "Organization",
    name: "PT Tiga Serangkai Inti Corpora",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${plusJakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#090d16] text-white font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
