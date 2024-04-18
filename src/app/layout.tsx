import type { Metadata } from 'next';
import { Inter, Karantina } from 'next/font/google';
import './globals.css';

const baseUrl = process.env.VERCEL_URL as string;

export const metadata: Metadata = {
  metadataBase: new URL(`https://${baseUrl}`),
  title: 'CarpTravel',
  description:
    "Discover the breathtaking beauty of the Carpathian Mountains with CarpTravel. From thrilling mountain expeditions to peaceful forest walks, we offer unforgettable tours in one of Europe's most stunning mountain ranges. Learn more and join us on the journey of a lifetime with CarpTravel.",
  icons: [
    {
      url: '/icons/favicon-dark.svg',
      media: '(prefers-color-scheme: light)',
      rel: 'icon',
      type: 'image/svg',
    },
    {
      url: '/icons/favicon-light.svg',
      media: '(prefers-color-scheme: dark)',
      rel: 'icon',
      type: 'image/svg',
    },
  ],
  openGraph: {
    title: 'CarpTravel',
    description:
      'Discover the breathtaking beauty of the Carpathian Mountains with CarpTravel. Learn more and join us on the journey of a lifetime with CarpTravel.',
    url: `${baseUrl}`,
    siteName: 'CarpTravel',
    images: [
      {
        url: '/ogp/ogp.jpg',
        width: 1200,
        height: 600,
        alt: 'Carpatian mountain view',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const karantina = Karantina({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-karantina',
  weight: '400',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${karantina.variable}`}>
      <body>{children}</body>
    </html>
  );
}
