import { BsSearch } from "react-icons/bs";
import { FaEllipsisH } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
import styles from "./header.module.css";
export function Header() {
  return (
    <header className={styles.layoutHeader}>
      <GrHomeRounded />
      <BsSearch />
      <FiFilter />
      <FaEllipsisH />
    </header>
  );
}
