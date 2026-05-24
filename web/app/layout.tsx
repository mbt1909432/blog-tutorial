import type { Metadata } from "next";
import { Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif_SC({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vercel + Git 个人博客搭建指南",
  description: "从零开始用 Git 管理内容、Vercel 自动部署，打造属于你的个人博客",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={`${notoSerif.variable} antialiased`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-['DM_Sans',system-ui,sans-serif]">{children}</body>
    </html>
  );
}
