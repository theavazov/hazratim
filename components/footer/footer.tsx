import Link from "next/link";
import styles from "./footer.module.css";

export function Footer() {
  const socialmedia = [
    {
      title: "twitter",
      url: "",
      icon: "",
    },
    {
      title: "telegram",
      url: "",
      icon: "",
    },
    {
      title: "youtube",
      url: "",
      icon: "",
    },
    {
      title: "instagram",
      url: "",
      icon: "",
    },
    {
      title: "m",
      url: "",
      icon: "",
    },
    {
      title: "facebook",
      url: "",
      icon: "",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={`box ${styles.footer_inner}`}>
        <Link href={"/"} className="logo">
          Hazratim
        </Link>
        <div className={styles.footer_info}>
          <p>&copy; Shayx Muhammad Sodiq Muhammad Yusuf</p>
          <p>&copy; islom.uz 2003-{new Date().getFullYear()}.</p>
          <p>
            {" "}
            Barcha huquqlar himoyalangan. Saytdan ma`lumot olinganda manba
            koʻrsatilishi shart.
          </p>
        </div>
        <nav className={styles.socialmedia_nav}>
          {socialmedia.map((sm, i) => {
            return (
              <a
                key={i}
                href={sm.url}
                target={"_blank"}
                rel={"noreferrer"}
                className={styles.sm}
              >
                {sm.icon}
              </a>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
