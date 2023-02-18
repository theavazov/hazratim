import Image from "next/image";
import location_bg from "../../public/media/location_bg.png";
import styles from "./intro.module.css";

export function Intro() {
  return (
    <section className={styles.intro}>
      <div className={styles.intro_inner}></div>
      <Image src={location_bg} alt="background" quality={100} />
    </section>
  );
}
