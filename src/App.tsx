import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import styles from "./App.module.scss";

interface Camera {
  id: string;
  name: string;
  url: string;
}

const cameras: Camera[] = [
  {
    id: "skilift",
    name: "Основной склон",
    url: "https://www.rider74.ru/camera/skilift"
  },
  { id: "panorama", name: "Панорама", url: "https://rider74.ru/ptz/" },

  {
    id: "gorny",
    name: "Учебный 1",
    url: "https://www.rider74.ru/camera/tubing"
  },
  {
    id: "extrem",
    name: "Учебный 2",
    url: "https://www.rider74.ru/camera/skipark"
  }
];

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Камеры онлайн</h1>
      <div className={styles.grid}>
        {cameras.map((camera) => (
          <CameraCard key={camera.id} camera={camera} />
        ))}
      </div>
    </div>
  );
}

function CameraCard({ camera }: { camera: Camera }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className={styles.card}>
          <img
            className={styles.thumbnail}
            src={camera.url}
            alt={camera.name}
          />
          <div className={styles.cardOverlay}>
            <span className={styles.cardName}>{camera.name}</span>
          </div>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.modal}>
          <Dialog.Title className={styles.modalTitle}>
            {camera.name}
          </Dialog.Title>
          <img
            className={styles.modalVideo}
            src={camera.url}
            alt={camera.name}
          />
          <Dialog.Close asChild>
            <button className={styles.closeButton} aria-label="Закрыть">
              <X size={24} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default App;

