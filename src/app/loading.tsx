import styles from "./loading.module.css";
export default function Loading() {
  return (
    <main className={styles.main}>
      <div className={styles.loading}>
        <div></div>
        <div></div>
      </div>
    </main>
  );
}
