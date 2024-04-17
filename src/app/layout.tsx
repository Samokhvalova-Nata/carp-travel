import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CarpTravel",
  description: "Discover the breathtaking beauty of the Carpathian Mountains with CarpTravel. From thrilling mountain expeditions to peaceful forest walks, we offer unforgettable tours in one of Europe's most stunning mountain ranges. Learn more and join us on the journey of a lifetime with CarpTravel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
