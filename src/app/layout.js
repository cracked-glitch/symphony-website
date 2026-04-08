import { Inter, Sora, JetBrains_Mono } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const sora = Sora({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata = {
  title: {
    default: 'Symphony AI - Custom AI Agents & Automation for Elite Teams',
    template: '%s | Symphony AI',
  },
  description: 'Custom AI agents and workflow automation that deliver measurable results. Built fast. No hype.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://symphonylabs.ai',
    siteName: 'Symphony AI',
    title: 'Symphony AI - Custom AI Agents & Automation for Elite Teams',
    description: 'Custom AI agents and workflow automation that deliver measurable results.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Symphony AI',
    description: 'Custom AI agents and workflow automation that deliver measurable results.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col bg-bg-primary text-text-primary antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
