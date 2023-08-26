"use client";
import Link from "next/link";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

import { useParams } from "next/navigation";
export function Nav() {
  const params = useParams();
  const prevPage = +params.number >= 2 ? +params.number - 1 : 1;
  const nextPage: number = +params.number + 1;
  return (
    <nav>
      <Link href={`/page/${prevPage}`}>
        <BiSolidLeftArrow />
      </Link>
      <p>
        {params.number} <span>/</span> {nextPage}
      </p>
      <Link href={`/page/${nextPage}`}>
        <BiSolidRightArrow />
      </Link>
    </nav>
  );
}
