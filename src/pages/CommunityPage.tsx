import { communityMembers } from "../data/community";
import { MemberCard } from "../components/MemberCard/MemberCard";
import styles from "./CommunityPage.module.scss";

export const CommunityPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Community</h1>
      <div className={styles.grid}>
        {communityMembers.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
};