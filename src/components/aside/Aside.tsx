import { BsSearch } from "react-icons/bs";
import { FaEllipsisH } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { GrHomeRounded, GrSort } from "react-icons/gr";
import styles from "./aside.module.css";
export function Aside() {
  return (
    <aside className={styles.layoutAside}>
      <GrHomeRounded />
      <BsSearch />
      <FiFilter />
      <GrSort />
      <FaEllipsisH />
    </aside>
  );
}
