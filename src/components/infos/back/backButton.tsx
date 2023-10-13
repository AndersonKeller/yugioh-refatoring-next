"use client";
import { useRouter } from "next/navigation";
import styles from "../styles.module.css";
export function BackButton() {
  const router = useRouter();
  function backTo() {
    router.back();
  }
  return (
    <button onClick={backTo} className={styles.button}>
      X
    </button>
  );
}
