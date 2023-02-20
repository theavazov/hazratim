import Image from "next/image";
import Link from "next/link";
import location_bg_primary from "../../public/media/location_bg_primary.png";
import location_bg_secondary from "../../public/media/location_bg_secondary.png";
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
          <p className={styles.intro_title}>{location}</p>
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
        <Image
          src={location_bg_primary}
          alt="background"
          quality={100}
          priority
        />
      ) : (
        <Image
          src={location_bg_secondary}
          alt="background"
          quality={100}
          priority
        />
      )}
    </section>
  );
}
