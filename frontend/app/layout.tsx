import type { Metadata } from 'next';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { DocsProviders } from '@/processes/docs-providers';
import { ThemeBlockingScript } from '@/shared/ui/theme-blocking-script';

const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  title: 'Golden Template UI docs',
  description: '@default/ui component catalog',
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeBlockingScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-svh antialiased`}
      >
        <DocsProviders>{children}</DocsProviders>
      </body>
    </html>
  );
}
