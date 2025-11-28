import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import LanguageProviderWrapper from '@/components/language-provider-wrapper'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const faviconUrl = process.env.NEXT_PUBLIC_SUPABASE_URL 
  ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/Imagenes/Favicon/logo_cross-removebg-preview.png`
  : '/logo_cross-removebg-preview.png';

export const metadata: Metadata = {
  title: 'Crossworlds Connection - Music & English with Spiritual Growth',
  description: 'When worlds cross language connects. Join our Christian academy where music and English education go hand in hand with spiritual growth.',
  generator: 'v0.app',
  icons: {
    icon: faviconUrl,
    apple: faviconUrl,
  },
  openGraph: {
    title: 'Crossworlds Connection - Music & English Education',
    description: 'Education united with spiritual growth',
    url: 'https://crossworlds-connection.com',
    type: 'website',
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
        <LanguageProviderWrapper>
          {children}
        </LanguageProviderWrapper>
        <Analytics />
      </body>
    </html>
  );
}
