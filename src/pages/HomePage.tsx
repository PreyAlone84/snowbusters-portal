import skiResortImg from "../assets/ski_resort.png";
import styles from "./HomePage.module.scss";

export function HomePage() {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${skiResortImg})` }}
    ></div>
  );
}