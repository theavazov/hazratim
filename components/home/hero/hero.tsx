import Image from "next/image";
import styles from "./hero.module.css";
import heroImg from "../../../public/media/hero.jpg";
import Link from "next/link";

export function MainHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.main_content}>
        <div className={`box ${styles.main_content_inner}`}>
          <div className={styles.hero_titles}>
            <h1 className={styles.main_title}>
              SHAYX MUHAMMAD SODIQ MUHAMMAD YUSUF
            </h1>
            <p>
              Ahli sunna val-jamoa mazhabi asosida pok aqiyda va musaffo Islomga
              intilish, Qur&apos;on va sunnatni o&apos;rganib, amal qilish,
              islomiy ma&apos;rifat taratish, salafi solih – ulug&apos;
              mujtahidlarga ergashish, kengbag&apos;irlik va birodarlik ruhini
              tarqatish.
            </p>
          </div>
          <div className={styles.hero_buttons}>
            <Link href={"#"} className={styles.primary}>
              Primary button
            </Link>
            <Link href={"#"} className={styles.secondary}>
              Secondary button
            </Link>
          </div>
        </div>
        <Image src={heroImg} alt="background" />
      </div>
    </section>
  );
}
