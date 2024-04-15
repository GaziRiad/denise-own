import Script from "next/script";
import { Figtree } from "next/font/google";
import "./globals.css";
import GoogleTagManager from "@/components/custom/GoogleTagManager";

export const metadata = {
  title: "Home",
  description:
    "Denise Anna Venghaus is een toonaangevende fitness- en welzijnsinfluencer die bekend staat om haar inspirerende transformatie. Drie jaar geleden veranderde ze haar levensstijl volledig, waarbij ze regelmatige lichaamsbeweging, gezonde voeding en mentaal gezondheidswerk introduceerde in haar routine. Met een sterke en betrokken volgersbasis van 122k op Instagram en meer dan 120k op TikTok, waar ze regelmatig inzichten in haar leven en tips voor een gezonde levenswijze deelt. Ze heeft haar invloed omgezet in een carrière die haar in staat stelt haar levensstijl te onderhouden vanuit haar werk als influencer.",
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
        <GoogleTagManager containerId={"GTM-TSXVZ2TP"} />
      </head>
      <body className="text-brown">{children}</body>
    </html>
  );
}
