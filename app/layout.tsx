import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "RELiC THE TOWER",
  description: "RELiC初のWeb3の祭典が東京タワーで開幕！国内の注目プロジェクトが集結し、誰でも参加できる新時代を感じる特別な体験があなたを待っています。",
  openGraph: {
    title: "RELiC THE TOWER",
    description: "RELiC初のWeb3の祭典が東京タワーで開幕！国内の注目プロジェクトが集結し、誰でも参加できる新時代を感じる特別な体験があなたを待っています。",
    images: ["/img/top.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RELiC THE TOWER",
    description: "RELiC初のWeb3の祭典が東京タワーで開幕！国内の注目プロジェクトが集結し、誰でも参加できる新時代を感じる特別な体験があなたを待っています。",
    images: ["/img/top.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
