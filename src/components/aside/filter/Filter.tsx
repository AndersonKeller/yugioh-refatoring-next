"use client";
import { filterStore, pageStore } from "@/store/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import style from "./style.module.css";
interface TypesOfCard {
  spellCard: "SpellCard";
  effectMonster: "Effect Monster";
  normalMonster: "Normal Monster";
  flipEffectMonster: "Flip Effect Monster";
  trapCard: "Trap Card";
}
export function Filter() {
  const [openFilter, setOpenFilter] = useState(false);
  const router = useRouter();
  const { setPage } = pageStore();
  const { setFilter } = filterStore();
  function openFilterModal() {
    setOpenFilter(!openFilter);
  }
  async function defineType(type: string) {
    setPage(1);
    setFilter(type);

    router.push("/page/1");
    openFilterModal();
  }
  const types: string[] = [
    "Effect Monster",
    "Flip Effect Monster",
    "Normal Monster",
    "Spell Card",
    "Trap Card",
  ];
  return (
    <>
      <button onClick={openFilterModal}>
        <FiFilter />
      </button>
      {openFilter && (
        <section className={style.section}>
          {types.map((type) => (
            <button key={type} onClick={() => defineType(type)}>
              <p>{type}</p>
            </button>
          ))}
        </section>
      )}
    </>
  );
}
