import { List } from "@/components/list/List";

import { Aside } from "@/components/aside/Aside";
import { Header } from "@/components/header/Header";
import "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <Aside />
      <main>
        <List />
      </main>
    </>
  );
}
