import type { Metadata } from 'next';
import { Outfit, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Navin Shankar | Software Engineer',
  description: 'Full-stack software engineer specializing in scalable systems, API design, and modern web technologies.',
  keywords: ['Software Engineer', 'Full Stack Developer', 'TypeScript', 'React', 'Node.js', 'Python'],
  authors: [{ name: 'Navin Shankar' }],
  openGraph: {
    title: 'Navin Shankar | Software Engineer',
    description: 'Full-stack software engineer specializing in scalable systems, API design, and modern web technologies.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen overflow-x-hidden font-sans">
        {/* Animated background blobs */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
        </div>
        
        {children}
      </body>
    </html>
  );
}

