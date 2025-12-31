import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

// Viewport settings untuk kontrol zoom pada mobile
export const viewport: Viewport = {
  themeColor: '#7C3AED', // Warna brand-violet Anda
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'VibeStudio — Website Sat-Set, Hasil Estetik.',
  description:
    'Solusi pembuatan website premium untuk UMKM & Personal Brand. Menggabungkan kreativitas manusia dengan efisiensi AI untuk hasil berkualitas tinggi.',
  keywords: [
    'Jasa Pembuatan Website',
    'Web Design Jakarta',
    'VibeStudio',
    'Website UMKM',
    'AI Website Builder',
  ],
  authors: [{ name: 'Felix', url: 'https://vibestudio.com' }],

  // Open Graph (Untuk tampilan di WhatsApp/Facebook)
  openGraph: {
    title: 'VibeStudio — Website Sat-Set, Hasil Estetik.',
    description: 'Upgrade digital brandmu sekarang. Website kencang, aman, dan standar industri.',
    url: 'https://vibestudio.com',
    siteName: 'VibeStudio',
    images: [
      {
        url: '/og-image.jpg', // Pastikan file ini ada di folder public
        width: 1200,
        height: 630,
        alt: 'VibeStudio Preview',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'VibeStudio — Digital Branding Agency',
    description: 'Website premium selesai dalam hitungan hari.',
    images: ['/og-image.jpg'],
  },

  // Icon / Favicon
  icons: {
    icon: [
      {
        url: "/logo.svg?v=1", // Menambahkan ?v=1 memaksa browser mengunduh ulang
        href: "/logo.svg?v=1",
      },
    ],
    apple: [
      {
        url: "/logo.svg?v=1",
        sizes: "180x180",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A0A0B] text-white selection:bg-brand-violet/30`}
      >
        {children}
      </body>
    </html>
  );
}