import { List } from "@/components/list/List";

import { Aside } from "@/components/aside/Aside";
import { Header } from "@/components/header/Header";
import style from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />

      <main className={style.main}>
        <Aside />
        <List />
      </main>
    </>
  );
}
