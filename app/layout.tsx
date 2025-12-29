import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import LanguageProviderWrapper from '@/components/language-provider-wrapper'
import PreloadImages from './preload-images'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'Crossworlds Connection - Music & English with Spiritual Growth',
    template: '%s | Crossworlds Connection'
  },
  description: 'When worlds cross language connects. Join our Christian academy where music and English education go hand in hand with spiritual growth. Non-profit organization dedicated to transforming lives through education and faith.',
  keywords: ['Christian academy', 'English education', 'music education', 'spiritual growth', 'non-profit', 'Ecuador ministries', 'faith-based learning', 'crossworlds connection'],
  authors: [{ name: 'Crossworlds Connection' }],
  creator: 'Crossworlds Connection',
  publisher: 'Crossworlds Connection',
  generator: 'Next.js',
  applicationName: 'Crossworlds Connection',
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL('https://crossworlds-connection.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://crossworlds-connection.com',
    title: 'Crossworlds Connection - Music & English Education',
    description: 'Education united with spiritual growth. Non-profit Christian organization transforming lives through music, English education, and faith.',
    siteName: 'Crossworlds Connection',
    images: [
      {
        url: '/images/logos/logo_cross-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'Crossworlds Connection Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crossworlds Connection - Music & English Education',
    description: 'Education united with spiritual growth',
    images: ['/images/logos/logo_cross-removebg-preview.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Puedes agregar aquí los códigos de verificación cuando los tengas
    // google: 'tu-código-de-verificación-de-google',
    // yandex: 'tu-código-de-verificación-de-yandex',
    // yahoo: 'tu-código-de-verificación-de-yahoo',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#2d5a3d" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </head>
      <body className={`font-sans antialiased`}>
        <PreloadImages />
        <LanguageProviderWrapper>
          {children}
        </LanguageProviderWrapper>
        <Analytics />
      </body>
    </html>
  );
}
