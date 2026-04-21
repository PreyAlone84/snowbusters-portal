import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import styles from "./TricksPage.module.scss";

interface Trick {
  id: string;
  name: string;
  videos: { title: string; url: string }[];
}

const tricks: Trick[] = [
  { id: "ollie", name: "Ollie", videos: [{ title: "Snowboard Jump Training - Taevis Kapalka", url: "https://www.youtube.com/watch?v=f34a0d" }] },
  { id: "backside-180", name: "Backside 180", videos: [] },
  { id: "backside-360", name: "Backside 360", videos: [] },
  { id: "frontside-360", name: "Frontside 360", videos: [] },
  { id: "breakdance", name: "BreakDance on the Snow", videos: [] },
];

export function TricksPage() {
  return (
    <div>
      <h1 className={styles.title}>Трюки</h1>
      <div className={styles.list}>
        {tricks.map((trick) => (
          <Link key={trick.id} to={`/tricks/${trick.id}`} className={styles.item}>
            <span className={styles.name}>{trick.name}</span>
            <div className={styles.meta}>
              <span>{trick.videos.length} видео</span>
              <ChevronRight size={20} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}