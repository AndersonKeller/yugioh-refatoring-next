import { Header } from "@/components/header/Header";
import { List } from "@/components/list/List";

import "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <List />
      </main>
    </>
  );
}
