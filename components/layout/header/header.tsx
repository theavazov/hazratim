import Link from "next/link";
import { useRouter } from "next/router";
import { search } from "../../../public/icons";
import styles from "./header.module.css";

export function Header() {
  const { pathname } = useRouter();

  const navigation = [
    {
      title: "Asosiy",
      path: "/",
      isActive: pathname === "/" ? true : false,
    },
    {
      title: "Hayot yo‘li",
      path: "/hayotyoli",
      isActive: pathname.includes("/hayotyoli") ? true : false,
    },
    {
      title: "Meros",
      path: "/meros",
      isActive: pathname.includes("/meros") ? true : false,
    },
    {
      title: "Yangiliklar",
      path: "/yangiliklar",
      isActive: pathname.includes("/yangiliklar") ? true : false,
    },
    {
      title: "E‘tirof",
      path: "/etirof",
      isActive: pathname.includes("/etirof") ? true : false,
    },
    {
      title: "Tarjimai holi",
      path: "/tarjimaihol",
      isActive: pathname.includes("/tarjimaihol") ? true : false,
    },
  ];

  return (
    <header className={styles.header}>
      <div className={`box ${styles.header_inner}`}>
        <Link href={"/"} className={`logo ${styles.logo}`}>
          Hazratim
        </Link>
        <nav className={styles.header_nav}>
          {navigation.map((nav, i) => {
            return (
              <Link
                key={i}
                href={nav.path}
                className={
                  nav.isActive
                    ? `${styles.nav_link} ${styles.active}`
                    : styles.nav_link
                }
              >
                {nav.title}
              </Link>
            );
          })}
        </nav>
        <button className={styles.search}>{search}</button>
      </div>
    </header>
  );
}
