import type { Metadata } from "next";
import {Montserrat} from "next/font/google";
import { Montserrat as MontserratMono } from 'next/font/google';
import "./globals.css";
import { registerLicense } from "@syncfusion/ej2-base";

const montserrat = Montserrat({
    subsets: ['latin'],
    variable: '--font-montserrat',
    weight: ['400', '500', '700'],
});

const montserratMono = MontserratMono({
    subsets: ['latin'],
    variable: '--font-montserrat-mono',
    weight: ['400', '700'],
});


export const metadata: Metadata = {
  title: "Taptravel",
  description: "Your travel sidekick buddy",
};


registerLicense(process.env.NEXT_PUBLIC_SYNCFUSION_LICENSE_KEY as string)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${montserratMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
