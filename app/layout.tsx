import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import styles from "./layout.module.css";
import { Registry } from "./ui/Registry";
import "./globals.css";

export const metadata: Metadata = {
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
