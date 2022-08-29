import Link from "next/link"
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        See the car list <Link href="/cars"> here </Link>
      </h1>
    </div>
  );
}
