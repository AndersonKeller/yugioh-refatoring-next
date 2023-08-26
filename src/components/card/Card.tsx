import { Cards } from "../list/interfaces";
import { Stars } from "./Stars";
import styles from "./card.module.css";
interface CardProps {
  card: Cards;
}
export function Card({ card }: CardProps) {
  return (
    <li
      style={{
        backgroundImage: `url(${card.card_images[0].image_url_cropped})`,
      }}
      className={styles.card}
    >
      <div className={styles.divAtk}>
        <h3>{card.name}</h3>
        {card.atk && <p>{card.atk}</p>}
        {card.def && <p>{card.def}</p>}
      </div>
      <div>
        <span>{card.frameType}</span>
        {card.attribute && <span>{card.attribute}</span>}
        <div className={styles.divStars}>
          {card.level && <Stars levels={card.level} />}
        </div>
      </div>
    </li>
  );
}
