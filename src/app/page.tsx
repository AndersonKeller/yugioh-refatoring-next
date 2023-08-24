import { Header } from "@/components/header/Header";
import { List } from "@/components/list/List";
import { api } from "@/service/api";
import "./page.module.css";

export default async function Home() {
  const res = await api.get("?num=5&offset=0");
  console.log(res.data);
  const cards: any[] = await res.data.data;
  return (
    <>
      <Header />
      <main>
        {cards.map((card) => (
          <p key={card.id}>{card.id}</p>
        ))}
        <List />
      </main>
    </>
  );
}
