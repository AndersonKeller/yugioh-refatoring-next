"use client";
import Link from "next/link";
import { Cards } from "../list/interfaces";
import { Stars } from "./Stars";
import styles from "./card.module.css";
interface CardProps {
  card: Cards;
}
export function Card({ card }: CardProps) {
  function showSeeMore(id: number) {
    const seeMore = document.getElementById(`${id.toString()}`);
    seeMore?.removeAttribute("hidden");
  }
  return (
    <li
      style={{
        backgroundImage: `url(${card.card_images[0].image_url_cropped})`,
      }}
      onMouseEnter={() => showSeeMore(card.id)}
      className={styles.card}
    >
      <div className={styles.divAtk}>
        <h3>{card.name}</h3>
        {card.atk || card.atk == 0 ? <p>{card.atk}</p> : <></>}
        {card.def || card.def == 0 ? <p>{card.def}</p> : <></>}
      </div>
      <div>
        <span>{card.frameType}</span>
        {/* {card.attribute && <span>{card.attribute}</span>} */}
        <div className={styles.divStars}>
          {card.level && <Stars levels={card.level} />}
        </div>
      </div>
      <Link
        hidden
        className={styles.seeMore}
        href={"/card/" + card.name.replaceAll("/", "!&")}
        id={card.id.toString()}
      >
        Ver
      </Link>
    </li>
  );
}
