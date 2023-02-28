import Image from "next/image";
import Link from "next/link";
import primary from "../../../public/media/intro-primary.png";
import secondary from "../../../public/media/intro-secondary.png";
import styles from "./intro.module.css";

type Props = {
  variant: "primary" | "secondary";
  location: string | any;
  description?: string | any;
  parent?: {
    title: string | any;
    path: string;
  };
};

export function Intro({ variant, location, description, parent }: Props) {
  return (
    <section className={styles.intro}>
      <div
        className={`box ${
          variant === "primary"
            ? `${styles.intro_inner} ${styles.primary}`
            : `${styles.intro_inner} ${styles.secondary}`
        }`}
      >
        <div className={styles.intro_texts}>
          <h2 className={styles.intro_title}>{location}</h2>
          {description ? (
            <p className={styles.intro_desc}>{description}</p>
          ) : null}
        </div>
        <nav className={styles.navigation}>
          <Link href={"/"} className={styles.nav_node}>
            Asosiy
          </Link>
          <span className={styles.nav_node}>/</span>
          {parent ? (
            <>
              <Link href={parent.path} className={styles.nav_node}>
                {parent.title}
              </Link>
              <span className={styles.nav_node}>/</span>
            </>
          ) : null}
          <p className={styles.nav_node}>{location}</p>
        </nav>
      </div>
      {variant === "primary" ? (
        <Image src={primary} alt="background" quality={100} priority />
      ) : (
        <Image src={secondary} alt="background" quality={100} priority />
      )}
    </section>
  );
}
