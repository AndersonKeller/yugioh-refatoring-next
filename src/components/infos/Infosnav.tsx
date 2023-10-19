import { GrCircleInformation } from "react-icons/gr";

import { Cards } from "../list/interfaces";
import { Prices } from "./Prices";
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
        <Prices price={card.card_prices} />
      </div>
      <BackButton />
    </section>
  );
}
