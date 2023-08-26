import styles from "./header.module.css";
import { Nav } from "./nav/Nav";

export function Header() {
  return (
    <header className={styles.layoutHeader}>
      <div>
        <h3>Página</h3>
        <Nav />
      </div>
    </header>
  );
}
