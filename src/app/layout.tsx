import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
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
  // openGraph: {
  //   type: 'website',
  //   url: 'http://localhost:3000/',
  //   title: 'CarpTravel',
  //   description:
  //     'Discover the breathtaking beauty of the Carpathian Mountains with CarpTravel. Learn more and join us on the journey of a lifetime with CarpTravel.',
  //   siteName: 'CarpTravel',
  //   images: [{ url: '/public/ogp/ogp.jpg' }],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
