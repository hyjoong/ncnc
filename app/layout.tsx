import { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import styles from "./layout.module.css";
import { Registry } from "./ui/Registry";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "니콘내콘",
  description:
    "기프티콘 판매 및 구매 1위 플랫폼, 스타벅스 기프티콘부터 모바일상품권까지 일상에서의 할인을 받아보세요.",
  manifest: "/manifest.json",
  verification: {
    google: "Ldsw3HdA79_kyMAjRpsoY-3gkz9EEn5jWEjWA-02sww",
  },
  icons: [
    { rel: "icon", url: "/assets/logo-192x192.png", sizes: "192x192" },
    {
      rel: "apple-touch-icon",
      url: "/assets/logo-180x180.png",
      sizes: "180x180",
    },
    { rel: "icon", url: "/assets/logo-152x152.png", sizes: "152x152" },
    { rel: "icon", url: "/assets/logo-144x144.png", sizes: "144x144" },
    { rel: "icon", url: "/assets/logo-120x120.png", sizes: "120x120" },
    { rel: "icon", url: "/assets/logo-114x114.png", sizes: "114x114" },
    {
      url: "/splashscreens/iphoneplus_splash.png",
      media:
        "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
      rel: "apple-touch-startup-image",
    },
  ],
  twitter: {
    card: "summary_large_image",
    title: "니콘내콘",
    description:
      "기프티콘 판매 및 구매 1위 플랫폼, 스타벅스 기프티콘부터 모바일상품권까지 일상에서의 할인을 받아보세요.",
    creator: "@hyjoong",
    images: [
      {
        url: "https://ncnc.vercel.app/assets/logo.webp",
        width: 1200,
        height: 630,
        alt: "logo",
      },
    ],
  },
};
export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`,
        }}
      />
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Registry>
          <div className={styles.main}>
            <div className={styles.content}>
              {children}
              {modal}
              <Analytics />
            </div>
          </div>
        </Registry>
      </body>
    </html>
  );
}
