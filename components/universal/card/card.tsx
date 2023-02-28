import Link from "next/link";
import styles from "./card.module.css";

type Props = {
  content: any;
};

export function ParentCard({ content }: Props) {
  return (
    <Link
      href={`/${content.parentSlug}/${content.slug}`}
      className={styles.card}
    >
      <div className={styles.card_content}>
        <div className={styles.card_icon}>{content.icon}</div>
        <p className={styles.card_title}>{content.title}</p>
      </div>
      <p className={styles.card_desc}>{content.desc}</p>
    </Link>
  );
}
