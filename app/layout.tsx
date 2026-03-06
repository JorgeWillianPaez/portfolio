import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ThemeProvider from "./context/ThemeContext";
import LanguageProvider from "./context/LanguageContext";
import CustomCursor from "./components/CustomCursor/CustomCursor";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jorge Nagakura | Desenvolvedor Full Stack",
  description:
    "Portfolio de Jorge Willian Paez Nagakura — Desenvolvedor Full Stack apaixonado por criar experiências digitais modernas com React, Next.js, Node.js e muito mais.",
  keywords: [
    "desenvolvedor",
    "full stack",
    "react",
    "nextjs",
    "typescript",
    "portfolio",
  ],
  authors: [{ name: "Jorge Willian Paez Nagakura" }],
  openGraph: {
    title: "Jorge Nagakura | Desenvolvedor Full Stack",
    description:
      "Portfolio de Jorge Willian Paez Nagakura — Desenvolvedor Full Stack",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${poppins.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "vpmaws9gkh");`,
          }}
        />
      </head>
      <body>
        <CustomCursor />
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
