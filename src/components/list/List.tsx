import { api } from "@/service/api";
import { Card } from "../card/Card";
import { Cards } from "./interfaces";
import styles from "./list.module.css";
export async function List() {
  const res = await api.get("?num=30&offset=0");
  // console.log(res.data);
  const cards: Cards[] = await res.data.data;
  return (
    <ul className={styles.listCard}>
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </ul>
  );
}
