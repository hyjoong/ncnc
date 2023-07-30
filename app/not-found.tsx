import Header from "components/common/Header";
import Link from "next/link";
import styles from "./layout.module.css";

export default function NotFound() {
  return (
    <div className={styles.main}>
      <Header title="not found" />
      <div className={styles.content}>
        <h2>Not Found</h2>
        <p>The page you requested cannot be found</p>
        <p>
          <Link href="/">Return to the Main page</Link>
        </p>
      </div>
    </div>
  );
}
