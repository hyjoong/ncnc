import "./globals.css";
import styles from "./layout.module.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <div className={styles.main}>
          <div className={styles.content}>{children}</div>
        </div>
      </body>
    </html>
  );
}
