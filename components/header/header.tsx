import Link from "next/link";
import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`box ${styles.header_inenr}`}>
        <Link href={"/"} className="logo">
          Hazratim
        </Link>
      </div>
    </header>
  );
}
