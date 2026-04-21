import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getUniqueTricks, getVideosByTrick, extractVideoId } from "../data/tricks";
import { YouTubeModal } from "../components/YouTubeModal/YouTubeModal";
import styles from "./TrickDetailPage.module.scss";

export function TrickDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  
  const trickNames = getUniqueTricks();
  const trickName = trickNames.find(name => name.toLowerCase().replace(/\s+/g, "-") === id);
  
  if (!trickName) {
    return (
      <div className={styles.notFound}>
        <p>Трюк не найден</p>
        <Link to="/tricks">Назад к списку</Link>
      </div>
    );
  }

  const videos = getVideosByTrick(trickName);

  return (
    <div>
      <Link to="/tricks" className={styles.back}>
        <ArrowLeft size={20} />
        К списку трюков
      </Link>
      <h1 className={styles.title}>{trickName}</h1>
      
      <div className={styles.videos}>
        {videos.length > 0 ? (
          videos.map((videoUrl, index) => {
            const videoId = extractVideoId(videoUrl);
            const thumbnailUrl = videoId 
              ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` 
              : null;
            
            return (
              <div 
                key={index} 
                className={styles.videoCard}
                onClick={() => setSelectedVideo(videoUrl)}
              >
                {thumbnailUrl && (
                  <img src={thumbnailUrl} alt="" className={styles.thumbnail} />
                )}
                <div className={styles.playButton}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            );
          })
        ) : (
          <p className={styles.empty}>Видео пока не добавлены</p>
        )}
      </div>

      {selectedVideo && (
        <YouTubeModal 
          videoUrl={selectedVideo} 
          isOpen={true} 
          onClose={() => setSelectedVideo(null)} 
        />
      )}
    </div>
  );
}