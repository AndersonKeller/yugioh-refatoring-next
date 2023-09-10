import { api } from "@/service/api";

interface CardPageProps {
  params: { name: string };
}

export default async function CardPage({ params }: CardPageProps) {
  const res = await api.get(`?name=${params.name}`);
  const card = res.data.data[0];
  console.log(card);
  return <h1>{card.name} </h1>;
}
