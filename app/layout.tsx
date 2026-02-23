import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Titanium Gym - The land of fitness',
  description: 'Salle de sport à Sousse - Musculation, cardio, cours collectifs, sauna, vaporium',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        {/* Google Analytics - Script principal */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EHYJE8RTNC"
          strategy="afterInteractive"
        />
        {/* Google Analytics - Configuration */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EHYJE8RTNC');
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-black-deep text-text-offwhite antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}