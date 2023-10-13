import { InfosNav } from "@/components/infos/Infosnav";
import { Cards } from "@/components/list/interfaces";
import { api } from "@/service/api";
import Image from "next/image";
import style from "./cardPage.module.css";
interface CardPageProps {
  params: { name: string };
}

export default async function CardPage({ params }: CardPageProps) {
  const res = await api.get(`?name=${params.name}`);
  const card: Cards = res.data.data[0];
  // console.log(card);
  return (
    <main
      className={style.mainContainer}
      style={{
        backgroundImage: `url(${card.card_images[0].image_url_cropped})`,
      }}
    >
      <figure>
        <Image
          className={style.cardImage}
          alt={card.name}
          src={card.card_images[0].image_url}
          width={500}
          height={700}
        />
        <div className={style.texture}></div>
      </figure>

      <InfosNav />
    </main>
  );
}
