import * as Dialog from "@radix-ui/react-dialog";
import { X, CloudSnow, Wind, Thermometer } from "lucide-react";
import { useState, useEffect } from "react";
import styles from "./CamerasPage.module.scss";

interface Camera {
  id: string;
  name: string;
  url: string;
  location?: string;
  lat: number;
  lon: number;
}

const cameras: Camera[] = [
  { id: "skilift", name: "Основной склон", url: "https://www.rider74.ru/camera/skilift", location: "Райдер, Челябинская обл.", lat: 55.144, lon: 60.163 },
  { id: "panorama", name: "Панорама", url: "https://rider74.ru/ptz/", location: "Райдер, Челябинская обл.", lat: 55.144, lon: 60.163 },
  { id: "gorny", name: "Учебный, камера 1", url: "https://www.rider74.ru/camera/tubing", location: "Райдер, Челябинская обл.", lat: 55.144, lon: 60.163 },
  { id: "extrem", name: "Учебный, камера 2", url: "https://www.rider74.ru/camera/skipark", location: "Райдер, Челябинская обл.", lat: 55.144, lon: 60.163 }
];

interface Weather {
  temperature: number;
  windSpeed: number;
  snowDepth: number;
  loading: boolean;
}

function WeatherWidget({ lat, lon }: { lat: number; lon: number }) {
  const [weather, setWeather] = useState<Weather>({ temperature: 0, windSpeed: 0, snowDepth: 0, loading: true });

  useEffect(() => {
    async function fetchWeather() {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,wind_speed_10m,snow_depth&wind_speed_unit=ms`
        );
        const data = await res.json();
        setWeather({
          temperature: Math.round(data.current.temperature_2m),
          windSpeed: Math.round(data.current.wind_speed_10m * 10) / 10,
          snowDepth: Math.round(data.current.snow_depth * 100),
          loading: false
        });
      } catch {
        setWeather(prev => ({ ...prev, loading: false }));
      }
    }
    fetchWeather();
  }, [lat, lon]);

  if (weather.loading) {
    return (
      <div className={styles.weatherWidget}>
        <span className={styles.weatherLoading}>Загрузка погоды...</span>
      </div>
    );
  }

  return (
    <div className={styles.weatherWidget}>
      <div className={styles.weatherWidgetTitle}>Райдер</div>
      <div className={styles.weatherWidgetInfo}>
        <div className={styles.weatherWidgetItem}>
          <Thermometer size={24} />
          <span>{weather.temperature}°C</span>
        </div>
        <div className={styles.weatherWidgetItem}>
          <Wind size={24} />
          <span>{weather.windSpeed} м/с</span>
        </div>
        {weather.snowDepth > 0 && (
          <div className={styles.weatherWidgetItem}>
            <CloudSnow size={24} />
            <span>{weather.snowDepth} см</span>
          </div>
        )}
      </div>
    </div>
  );
}

export function CamerasPage() {
  return (
    <div>
      <h1 className={styles.title}>Камеры онлайн</h1>
      <WeatherWidget lat={55.144} lon={60.163} />
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
          <img className={styles.thumbnail} src={camera.url} alt={camera.name} />
          <div className={styles.cardOverlay}>
            <span className={styles.cardName}>{camera.name}</span>
            {camera.location && <span className={styles.cardLocation}>{camera.location}</span>}
          </div>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.modal}>
          <Dialog.Title className={styles.modalTitle}>{camera.name}</Dialog.Title>
          <img className={styles.modalVideo} src={camera.url} alt={camera.name} />
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