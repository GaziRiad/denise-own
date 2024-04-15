import Script from "next/script";
import { Figtree } from "next/font/google";
import "./globals.css";
import GoogleTagManager from "@/components/custom/GoogleTagManager";

export const metadata = {
  title: "Home",
  description:
    "Denise Anna Venghaus is een toonaangevende fitness- en welzijnsinfluencer die bekend staat om haar inspirerende transformatie. Drie jaar geleden veranderde ze haar levensstijl volledig, waarbij ze regelmatige lichaamsbeweging, gezonde voeding en mentaal gezondheidswerk introduceerde in haar routine. Met een sterke en betrokken volgersbasis van 122k op Instagram en meer dan 120k op TikTok, waar ze regelmatig inzichten in haar leven en tips voor een gezonde levenswijze deelt. Ze heeft haar invloed omgezet in een carrière die haar in staat stelt haar levensstijl te onderhouden vanuit haar werk als influencer.",
  icons: {
    icon: ["/favicon/favicon.ico?v=4"],
    apple: ["/favicon/apple-touch-icon.png?v=4"],
    shortcut: ["/favicon/apple-touch-icon.png"],
  },
};

//👇 Configure our font object
const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
});

const googleTag = "GTM-TSXVZ2TP";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={figtree.className}>
      <head>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="4792d913-6990-4842-af3b-fa27e7ef54cd"
          data-blockingmode="auto"
          type="text/javascript"
        ></Script>

        <GoogleTagManager containerId={googleTag} />
      </head>
      <body className="text-brown">
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${googleTag}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
