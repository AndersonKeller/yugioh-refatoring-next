import { GrCircleInformation } from "react-icons/gr";
import { ImPriceTags } from "react-icons/im";
import { Cards } from "../list/interfaces";
import { BackButton } from "./back/backButton";
import styles from "./styles.module.css";
interface InfosNavProps {
  card: Cards;
}
export function InfosNav({ card }: InfosNavProps) {
  return (
    <section className={styles.section}>
      <div>
        <h3>{`"${card.name.slice(0, 30).replaceAll('"', "")}"`}</h3>
        <GrCircleInformation className={styles.path} />
        <ImPriceTags />
      </div>
      <BackButton />
    </section>
  );
}
