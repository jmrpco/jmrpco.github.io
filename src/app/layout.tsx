import type { Metadata } from 'next';
import '../index.css';
import ThemeProvider from '@/components/ThemeProvider';

export const metadata: Metadata = {
  metadataBase: new URL('https://jamespediongco.com'),
  title: 'James Pediongco | Senior Software Developer',
  description:
    'James Pediongco is a Senior Software Developer with 8+ years of experience building CRM systems, full-stack web applications, API integrations, and scalable business solutions. Specializing in Laravel, PHP, React, TypeScript, MySQL, and modern web technologies.',
  authors: [{ name: 'James Michael R. Pediongco' }],
  creator: 'James Michael R. Pediongco',
  keywords: [
    'James Pediongco',
    'James Michael Pediongco',
    'Senior Software Developer',
    'Full Stack Developer',
    'Laravel Developer',
    'PHP Developer',
    'React Developer',
    'CRM Developer',
    'Philippines',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'James Pediongco',
    title: 'James Pediongco | Senior Software Developer',
    description:
      'James Pediongco is a Senior Software Developer with 8+ years of experience building CRM systems, full-stack web applications, API integrations, and scalable business solutions. Specializing in Laravel, PHP, React, TypeScript, MySQL, and modern web technologies.',
    images: [
      {
        url: '/social-preview.png',
        width: 1200,
        height: 630,
        alt: 'James Pediongco in a black suit and tie',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'James Pediongco | Senior Software Developer',
    description:
      'James Pediongco is a Senior Software Developer with 8+ years of experience building CRM systems, full-stack web applications, API integrations, and scalable business solutions. Specializing in Laravel, PHP, React, TypeScript, MySQL, and modern web technologies.',
    images: [
      {
        url: '/social-preview.png',
        alt: 'James Pediongco in a black suit and tie',
      },
    ],
  },
  icons: { icon: { url: '/favicon.png', type: 'image/png' }, apple: '/favicon.png' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="dark" suppressHydrationWarning><body><ThemeProvider><a href="#main" className="skip-link">Skip to content</a>{children}</ThemeProvider></body></html>;
}
