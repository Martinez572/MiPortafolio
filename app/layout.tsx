import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import { LangProvider } from "@/lib/i18n";
import "./globals.css";
const head = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-head" });
const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-body" });
export const metadata: Metadata = { title: "Kevin · Portafolio", description: "Portafolio de desarrollo de software." };
const themeScript = `try{var s=localStorage.getItem("theme");if(s==="dark"||(!s&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className={`${head.variable} ${body.variable}`}>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body><LangProvider>{children}</LangProvider></body>
    </html>
  );
}