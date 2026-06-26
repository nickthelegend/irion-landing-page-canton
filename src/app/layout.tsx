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
  title: { default: 'Irion — Buy Now, Pay Never · Private credit on Canton', template: '%s | Irion' },
  description: 'Private-credit consumer finance on the Canton Network. Buy now and let your collateral’s Blend yield pay it off, supply USDC for yield, and prove your creditworthiness through private Daml contracts to borrow unsecured — your income and debts stay in a contract only you and the operator can see.',
  keywords: ['Irion', 'BNPL', 'Buy Now Pay Never', 'Canton', 'Canton Network', 'Daml', 'DeFi', 'Privacy by Construction', 'Sub-transaction Privacy', 'Private Credit', 'Blend'],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: 'website',
    siteName: 'Irion',
    title: 'Irion — Buy Now, Pay Never · Private credit on Canton',
    description: 'Buy now and let your collateral’s yield repay it. Prove your credit through private Daml contracts to borrow unsecured — your financials stay in a contract only you and the operator can see. Built on the Canton Network with Daml smart contracts and Blend yield.',
    url: 'https://irion.finance',
    images: [
      {
        url: '/title-logo.png',
        width: 1200,
        height: 630,
        alt: 'Irion — private-credit consumer finance on Canton, with privacy by construction from private Daml contracts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Irion — Buy Now, Pay Never · Private credit on Canton',
    description: 'Prove your creditworthiness through private Daml contracts and borrow unsecured on the Canton Network. Your collateral’s Blend yield pays your purchases off.',
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
