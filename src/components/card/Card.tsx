import Image from "next/image";
import Link from "next/link";
import { Cards } from "../list/interfaces";
import styles from "./card.module.css";
interface CardProps {
  card: Cards;
}
export function Card({ card }: CardProps) {
  return (
    <Link href={""} className={styles.card}>
      <Image
        alt={card.name}
        width={400}
        height={600}
        key={card.id}
        src={card.card_images[0].image_url}
      />
    </Link>
  );
}
