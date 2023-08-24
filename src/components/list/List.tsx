import { api } from "@/service/api";
import Image from "next/image";
import { Cards } from "./interfaces";
import styles from "./list.module.css";
export async function List() {
  const res = await api.get("?num=30&offset=0");
  console.log(res.data);
  const cards: Cards[] = await res.data.data;
  return (
    <ul className={styles.listCard}>
      {cards.map((card) => (
        <Image
          alt={card.name}
          width={200}
          height={240}
          key={card.id}
          src={card.card_images[0].image_url}
        />
      ))}
    </ul>
  );
}
