import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: { default: 'XORR — Buy Now, Pay Never · Private credit on Sui', template: '%s | XORR' },
  description: 'Private consumer credit on Sui. Deposit collateral, let DeepBook yield pay your purchases off, keep your principal — finances shielded inside a TEE.',
  keywords: ['XORR', 'BNPL', 'Buy Now Pay Never', 'Sui', 'DeFi', 'Private Payments', 'TEE', 'DeepBook'],
  icons: {
    icon: "/xorr-logo.png",
    apple: "/xorr-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-[#ebebeb] overflow-x-hidden">{children}</body>
    </html>
  );
}
