import Script from "next/script";
import { Figtree } from "next/font/google";
import "./globals.css";
import GoogleTagManager from "@/components/custom/GoogleTagManager";

export const metadata = {
  title: "Home",
  description: "Generated by create next app",
};

//👇 Configure our font object
const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={figtree.className}>
      <head>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="7fc4ac26-78f5-40a6-b0f9-d3d55af8437b"
          // data-blockingmode="auto"
          data-blockingmode="manual"
          type="text/javascript"
        ></Script>
        <GoogleTagManager containerId="GTM-TSXVZ2TP" />
      </head>
      <body className="text-brown">{children}</body>
    </html>
  );
}
