import Link from "next/link";
import styles from "./sectioninfo.module.css";

type Props = {
  title: string | any;
  path: string;
  description?: string | any;
};

export function SectionInfo({ title, path, description }: Props) {
  return (
    <div className={styles.info}>
      <div className={styles.info_content}>
        <h3 className="section_title">{title}</h3>
        {description ? (
          <p className={styles.section_desc}>{description}</p>
        ) : null}
      </div>
      <Link href={path} className={styles.info_link}>
        Batafsil sahifaga o‘tish
      </Link>
    </div>
  );
}
