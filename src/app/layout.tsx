import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LenisScrollLayout from "./lenis-scroll";

const esBuildTrial = localFont({
  src: "./fonts/EsBuildTrial.otf",
  variable: "--font-es-build-trial",
});

export const metadata: Metadata = {
  title: "Bed Prakash Panthi",
  description: "Frontend developer",
  openGraph: {
    title: "Bed Prakash Panthi ",
    description: "Frontend developer",
    url: "https://bedprakashpanthi.com.np",
  },
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={esBuildTrial.variable}>
        <LenisScrollLayout>{children}</LenisScrollLayout>
      </body>
    </html>
  );
}
