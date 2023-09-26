import { Cards } from "@/components/list/interfaces";
import { create } from "zustand";
interface PageState {
  page: number;
  setPage: (page: number) => void;
}
interface CardStore {
  cards: Cards[];
  setCards: (cards: Cards[]) => void;
}
interface FilterStore {
  filter: string;
  setFilter: (filter: string) => void;
}
export const pageStore = create<PageState>()((set) => ({
  page: 1,
  setPage: (newPage: number) => set(() => ({ page: newPage })),
}));
export const cardListStore = create<CardStore>()((set) => ({
  cards: [] as Cards[],
  setCards: (newCards: Cards[]) => set(() => ({ cards: newCards })),
}));
export const filterStore = create<FilterStore>()((set) => ({
  filter: "",
  setFilter: (newFilter: string) => set(() => ({ filter: newFilter })),
}));
