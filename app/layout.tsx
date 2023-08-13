import { Metadata } from "next";
import styles from "./layout.module.css";
import { Registry } from "./ui/Registry";
import "./globals.css";

export const metadata: Metadata = {
  twitter: {
    card: "summary_large_image",
    title: "니콘내콘",
    description: "니콘내콘에서 물건을 사고 파세요",
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
      <body>
        <Registry>
          <div className={styles.main}>
            <div className={styles.content}>
              {children}
              {modal}
            </div>
          </div>
        </Registry>
      </body>
    </html>
  );
}
