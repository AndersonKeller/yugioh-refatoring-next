/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Loading from "@/app/loading";
import { api } from "@/service/api";
import { cardListStore, filterStore, pageStore } from "@/store/store";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { Card } from "../card/Card";
import styles from "./list.module.css";
export function List() {
  const params = useParams();
  const { setPage } = pageStore();
  const { setCards, cards } = cardListStore();
  const { filter } = filterStore();

  async function getList() {
    setPage(+params.number);
    const res =
      filter == ""
        ? await api.get(`?num=30&offset=${+params.number * 30 - 30}`)
        : await api.get(
            `?num=30&type=${filter}&offset=${+params.number * 30 - 30}`
          );

    setCards(await res.data.data);
  }
  useEffect(() => {
    setCards([]);
    getList();
  }, [params.number, filter]);

  return (
    <ul className={styles.listCard}>
      {cards.length == 0 && <Loading />}
      {cards && cards.map((card, index) => <Card card={card} key={index} />)}
    </ul>
  );
}
