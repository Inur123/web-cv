import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://www.zainur.my.id";

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

// WebSite schema — membantu Google menampilkan sitelinks di hasil pencarian
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Muhammad Zainur Roziqin – Portofolio",
  url: siteUrl,
  description:
    "Portofolio profesional Muhammad Zainur Roziqin, Laravel Fullstack Developer dari Jawa Timur, Indonesia.",
  inLanguage: "id-ID",
  author: {
    "@type": "Person",
    name: "Muhammad Zainur Roziqin",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// SiteNavigationElement — bagian-bagian halaman yang bisa muncul sebagai sitelinks
const navJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Navigasi Portofolio Zainur",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Tentang Saya",
      description: "Profil, latar belakang pendidikan, dan informasi personal Muhammad Zainur Roziqin sebagai Laravel Fullstack Developer.",
      url: `${siteUrl}/#about`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Pengalaman Kerja",
      description: "Riwayat pengalaman profesional dan pekerjaan di bidang web development, termasuk di PT Tiga Serangkai Inti Corpora.",
      url: `${siteUrl}/#experience`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Proyek",
      description: "Koleksi proyek web yang telah dibangun, meliputi sistem absensi QR, website desa, portal organisasi, dan REST API.",
      url: `${siteUrl}/#projects`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Keahlian",
      description: "Tech stack dan keahlian teknis: Laravel, PHP, Livewire, MySQL, Apache Kafka, Next.js, dan Linux VPS.",
      url: `${siteUrl}/#skills`,
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(navJsonLd) }}
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
