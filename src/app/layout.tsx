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
  metadataBase: new URL('https://irion.finance'),
  title: { default: 'Irion — Buy Now, Pay Never · Private credit on Stellar', template: '%s | Irion' },
  description: 'Private-credit consumer finance on Stellar. Buy now and let your collateral’s Blend yield pay it off, supply USDC for yield, and prove your creditworthiness in zero knowledge to borrow unsecured — your income and debts never leave your browser.',
  keywords: ['Irion', 'BNPL', 'Buy Now Pay Never', 'Stellar', 'Soroban', 'DeFi', 'Zero Knowledge', 'ZK', 'Groth16', 'BN254', 'Circom', 'snarkjs', 'Private Credit', 'Blend'],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: 'website',
    siteName: 'Irion',
    title: 'Irion — Buy Now, Pay Never · Private credit on Stellar',
    description: 'Buy now and let your collateral’s yield repay it. Prove your credit in zero knowledge to borrow unsecured — your financials never touch the chain. Built on Stellar with Circom + snarkjs ZK and Blend yield.',
    url: 'https://irion.finance',
    images: [
      {
        url: '/title-logo.png',
        width: 1200,
        height: 630,
        alt: 'Irion — private-credit consumer finance on Stellar, with browser-side zero-knowledge credit proofs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Irion — Buy Now, Pay Never · Private credit on Stellar',
    description: 'Prove your creditworthiness in zero knowledge and borrow unsecured on Stellar. Your collateral’s Blend yield pays your purchases off.',
    images: ['/title-logo.png'],
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
