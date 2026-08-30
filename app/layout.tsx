import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Newsreader } from 'next/font/google'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fcfcfa' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0b0d' },
  ],
}

const site = {
  name: 'Shrivatsa Kashyap',
  title: 'Shrivatsa Kashyap - Frontend engineer building SDKs and real-time browser systems',
  url: 'https://shrivatsa.dev',
  description:
    'Shrivatsa Kashyap is a frontend engineer building SDKs, real-time browser systems, offline-first tooling, and reliable product infrastructure. Software Engineer II, Frontend at Suki.',
}

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  alternates: {
    canonical: '/',
  },
  title: {
    default: site.title,
    template: '%s - Shrivatsa Kashyap',
  },
  description: site.description,
  authors: [{ name: site.name }],
  openGraph: {
    title: site.title,
    description: site.description,
    type: 'website',
    url: site.url,
    siteName: site.name,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: site.title,
    description: site.description,
  },
}

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
  style: ['normal', 'italic'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} ${newsreader.variable} bg-paper font-sans text-foreground antialiased`}
      >
        <Analytics />
        <SpeedInsights />
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col">
            <Header />
            <main className="mx-auto w-full max-w-3xl flex-1 px-6 pt-20 sm:px-8">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}