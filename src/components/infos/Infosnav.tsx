import { GrCircleInformation } from "react-icons/gr";
import { ImPriceTags } from "react-icons/im";
import { BackButton } from "./back/backButton";
import styles from "./styles.module.css";
export function InfosNav() {
  return (
    <section className={styles.section}>
      <div>
        <GrCircleInformation className={styles.path} />
        <ImPriceTags />
      </div>
      <BackButton />
    </section>
  );
}
