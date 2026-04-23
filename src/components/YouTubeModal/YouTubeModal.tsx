import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import styles from "./YouTubeModal.module.scss";

interface YouTubeModalProps {
  videoUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

export function YouTubeModal({ videoUrl, isOpen, onClose }: YouTubeModalProps) {
  const videoId = videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s?]+)/)?.[1];
  
  if (!videoId) return null;

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&showinfo=0&autohide=1&rel=0`;

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.modal}>
          <button className={styles.closeButton} onClick={onClose} aria-label="Закрыть">
            <X size={28} />
          </button>
          <iframe
            src={embedUrl}
            className={styles.iframe}
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            allowTransparency
            title="YouTube video"
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}