"use client";
import Link from "next/link";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

import { pageStore } from "@/store/store";

export function Nav() {
  const { page } = pageStore();
  return (
    <nav>
      <Link href={`/page/${page > 1 ? page - 1 : 1}`}>
        <BiSolidLeftArrow />
      </Link>
      <p>
        {page} <span>/</span> {+page + 1}
      </p>
      <Link href={`/page/${page + 1}`}>
        <BiSolidRightArrow />
      </Link>
    </nav>
  );
}
