import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { getUniqueTricks, getVideosByTrick } from "../data/tricks";
import styles from "./TricksPage.module.scss";

export function TricksPage() {
  const trickNames = getUniqueTricks();

  return (
    <div>
      <h1 className={styles.title}>Трюки</h1>
      <div className={styles.list}>
        {trickNames.map((trickName) => {
          const videos = getVideosByTrick(trickName);
          const id = trickName.toLowerCase().replace(/\s+/g, "-");
          
          return (
            <Link key={id} to={`/tricks/${id}`} className={styles.item}>
              <span className={styles.name}>{trickName}</span>
              <div className={styles.meta}>
                <span>{videos.length} видео</span>
                <ChevronRight size={20} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}