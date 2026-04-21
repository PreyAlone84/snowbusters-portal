import styles from "./ChannelsPage.module.scss";

interface Channel {
  id: string;
  name: string;
  url: string;
  description?: string;
}

const channels: Channel[] = [
  {
    id: "taevis",
    name: "Taevis Kapalka",
    url: "https://www.youtube.com/@SnowboardingExplained/videos",
    description: "Сноуборд контент"
  },
  {
    id: "kostyasan",
    name: "Kostya San",
    url: "https://www.youtube.com/@KostyaSanSnowboarding/videos",
    description: "Обзоры снаряжения, фрирайд, школа SnowFace"
  },
  {
    id: "sobolev",
    name: "Алексей Соболев",
    url: "https://www.youtube.com/@SobolevAlexey/videos",
    description: "7-кратный чемпион РФ, онлайн-школа сноуборда"
  },
  {
    id: "tommie",
    name: "Tommie Bennett",
    url: "https://www.youtube.com/@tommiebennett/videos",
    description: "Обучения, туториалы, vlogs"
  },
  {
    id: "timur",
    name: "Тимур Зимин",
    url: "https://www.youtube.com/@Timur_Zimin/videos",
    description: "Обзоры, снаряжение"
  },
  {
    id: "malcolm",
    name: "Malcolm Moore",
    url: "https://www.youtube.com/@malcolmmoore/videos",
    description: "Обучение катанию, техника, туториалы"
  },
  {
    id: "kraspol",
    name: "KraspolTV",
    url: "https://www.youtube.com/@KraspolTV/videos",
    description: "Сноуборд контент"
  },
  {
    id: "miratori",
    name: "Miratori",
    url: "https://www.youtube.com/@miratori_tsuyoshi/videos",
    description: "Японский карвинг"
  },
  {
    id: "vlad",
    name: "Влад Ключников",
    url: "https://www.youtube.com/@VLAD_KLYCH/videos",
    description: "Обзоры снаряжения"
  },
  {
    id: "kant",
    name: "Кант",
    url: "https://www.youtube.com/@TVKANT/videos",
    description: "Магазин Кант - сноуборд оборудование"
  }
];

export function ChannelsPage() {
  return (
    <div>
      <h1 className={styles.title}>YouTube Каналы</h1>
      <div className={styles.grid}>
        {channels.map((channel) => (
          <a
            key={channel.id}
            href={channel.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.avatar}>{channel.name[0]}</div>
            <div className={styles.info}>
              <h3 className={styles.name}>{channel.name}</h3>
              {channel.description && (
                <p className={styles.description}>{channel.description}</p>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

