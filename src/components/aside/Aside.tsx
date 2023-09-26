import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { FaEllipsisH } from "react-icons/fa";
import { GrHomeRounded, GrSort } from "react-icons/gr";

import styles from "./aside.module.css";
import { Filter } from "./filter/Filter";
export function Aside() {
  return (
    <aside className={styles.layoutAside}>
      <Link href={"/page/1"}>
        <GrHomeRounded />
      </Link>
      <BsSearch />
      <Filter />
      <GrSort />
      <FaEllipsisH />
    </aside>
  );
}
