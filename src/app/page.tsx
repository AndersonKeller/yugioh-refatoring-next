"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "./loading";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/page/1");
  }, []);
  return <Loading />;
}
