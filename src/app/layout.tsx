import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

const amx = localFont({
  src: [
    { path: "../../public/AMX-Light.ttf", weight: "300", style: "normal" },
    { path: "../../public/AMX-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/AMX-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/AMX-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../public/AMX-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-amx",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Claro - Internet Banda Larga com Globoplay Incluso",
  description:
    "Planos de internet fibra ótica da Claro com Globoplay incluso. Wi-Fi grátis, instalação grátis e velocidades de até 1 Giga.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${roboto.variable} ${amx.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
