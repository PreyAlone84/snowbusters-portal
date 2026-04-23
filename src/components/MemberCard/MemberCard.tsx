import { useState } from "react";
import { Star } from "lucide-react";
import type { CommunityMember } from "../../data/community";
import kalmar from "../../assets/kalmar.png";
import silverImg from "../../assets/avatar_silver.png";
import styles from "./MemberCard.module.scss";

const images: Record<string, string> = {
  "avatar_silver.png": silverImg,
  "kalmar.png": kalmar
};

interface MemberCardProps {
  member: CommunityMember;
}

export function MemberCard({ member }: MemberCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={styles.cardWrapper} onClick={() => setFlipped(!flipped)}>
      <div className={`${styles.card} ${flipped ? styles.flipped : ""}`}>
        <div className={styles.front}>
          <img
            src={images[member.image]}
            alt={member.name}
            className={styles.frontImage}
          />
          <span className={styles.frontName}>{member.name}</span>
        </div>
        <div className={styles.back}>
          {member.disciplines.map((d) => (
            <div key={d.name} className={styles.discipline}>
              <span className={styles.disciplineName}>{d.name}</span>
              <div className={styles.stars}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={10}
                    className={i <= d.level ? styles.star : styles.starEmpty}
                    fill={i <= d.level ? "#fbbf24" : "none"}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
