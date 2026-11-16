import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
const head = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-head" });
const body = Instrument_Sans({ subsets: ["latin"], variable: "--font-body" });
export const metadata: Metadata = { title: "Tu Nombre · Portafolio", description: "Portafolio de desarrollo frontend." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es" className={`${head.variable} ${body.variable}`}><body>{children}</body></html>;
}
