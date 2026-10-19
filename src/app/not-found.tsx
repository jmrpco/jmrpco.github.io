import Link from 'next/link';
export default function NotFound() {
  return <main className="container-custom min-h-screen flex flex-col items-start justify-center gap-6"><p className="eyebrow">404 / A little off course</p><h1>Page not found.</h1><p className="muted">Let’s get you back to the good stuff.</p><Link href="/" className="button primary">Return home →</Link></main>;
}
