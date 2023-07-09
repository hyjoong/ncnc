import "./globals.css";
import styles from "./layout.module.css";
import { Registry } from "./ui/Registry";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Registry>
          <div className={styles.main}>
            <div className={styles.content}>{children}</div>
          </div>
        </Registry>
      </body>
    </html>
  );
}
