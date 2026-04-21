import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play } from "lucide-react";
import styles from "./TrickDetailPage.module.scss";

interface Trick {
  id: string;
  name: string;
  description?: string;
  videos: { id: string; title: string; url: string; thumbnail?: string }[];
}

const tricks: Trick[] = [
  { 
    id: "ollie", 
    name: "Ollie", 
    description: "Базовый трюк - прыжок с доской",
    videos: [
      { id: "1", title: "Snowboard Jump Training - Taevis Kapalka", url: "https://www.youtube.com/watch?v=f34a0d" },
      { id: "2", title: "How to Ollie - Malcolm Moore", url: "https://www.youtube.com/watch?v=xxx" },
    ] 
  },
  { id: "backside-180", name: "Backside 180", description: "Поворот на 180 градусов спиной", videos: [] },
  { id: "backside-360", name: "Backside 360", description: "Полный оборот на 360 спиной", videos: [] },
  { id: "frontside-360", name: "Frontside 360", description: "Полный оборот на 360 лицом", videos: [] },
  { id: "breakdance", name: "BreakDance on the Snow", description: "Танец на сноуборде", videos: [] },
];

export function TrickDetailPage() {
  const { id } = useParams<{ id: string }>();
  const trick = tricks.find(t => t.id === id);

  if (!trick) {
    return (
      <div className={styles.notFound}>
        <p>Трюк не найден</p>
        <Link to="/tricks">Назад к списку</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/tricks" className={styles.back}>
        <ArrowLeft size={20} />
        К списку трюков
      </Link>
      <h1 className={styles.title}>{trick.name}</h1>
      {trick.description && <p className={styles.description}>{trick.description}</p>}
      
      <div className={styles.videos}>
        {trick.videos.length > 0 ? (
          trick.videos.map((video) => (
            <a key={video.id} href={video.url} target="_blank" rel="noopener noreferrer" className={styles.videoCard}>
              <div className={styles.playButton}><Play size={32} /></div>
              <span className={styles.videoTitle}>{video.title}</span>
            </a>
          ))
        ) : (
          <p className={styles.empty}>Видео пока не добавлены</p>
        )}
      </div>
    </div>
  );
}