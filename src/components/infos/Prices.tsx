"use client";
import { useState } from "react";
import { ImPriceTags } from "react-icons/im";
import { Prices } from "../list/interfaces";
import styles from "./styles.module.css";
interface PricesProps {
  price: Prices[];
}
export function Prices({ price }: PricesProps) {
  const [openPrices, setOpenPrices] = useState(false);
  function getPrices() {
    setOpenPrices(!openPrices);
  }
  return (
    <>
      {openPrices &&
        price.map((item, index) => {
          return (
            <section key={index} className={styles.price}>
              <h4>Preços</h4>
              <p>
                Amazon: <span>{item.amazon_price}</span>
              </p>
              <p>
                Card Market: <span>{item.cardmarket_price}</span>
              </p>
              <p>
                Cool Stuff Inc: <span>{item.coolstuffinc_price}</span>
              </p>
              <p>
                Ebay: <span>{item.ebay_price}</span>
              </p>
              <p>
                TCG player: <span>{item.tcgplayer_price}</span>
              </p>
            </section>
          );
        })}
      <ImPriceTags className={styles.priceSvg} onClick={getPrices} />
    </>
  );
}
