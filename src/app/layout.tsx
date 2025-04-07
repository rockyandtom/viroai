import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ViroAI.art - AI图像生成",
  description: "使用先进的AI技术生成高质量图像",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DPSG9BQ5RY" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DPSG9BQ5RY');
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
