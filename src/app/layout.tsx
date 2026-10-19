import type { Metadata } from 'next';
import '../index.css';
import ThemeProvider from '@/components/ThemeProvider';

export const metadata: Metadata = {
  metadataBase: new URL('https://jmrpco.github.io'),
  title: 'James Pediongco — Senior Software Developer',
  description: 'Portfolio of James Pediongco — Senior Software Developer and Software Engineer in Bacolod City, Philippines.',
  authors: [{ name: 'James Pediongco' }],
  alternates: { canonical: '/' },
  openGraph: { title: 'James Pediongco — Senior Software Developer', description: 'Elegant, efficient, and user-friendly digital experiences.', url: '/', type: 'website', images: ['/wallpaper.png'] },
  twitter: { card: 'summary_large_image', images: ['/wallpaper.png'] },
  icons: { icon: { url: '/favicon.png', type: 'image/png' }, apple: '/favicon.png' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="dark" suppressHydrationWarning><body><ThemeProvider><a href="#main" className="skip-link">Skip to content</a>{children}</ThemeProvider></body></html>;
}
