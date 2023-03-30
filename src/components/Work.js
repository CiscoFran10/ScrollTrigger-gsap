import Lenis from "@studio-freight/lenis";
import gsap from "gsap/dist/gsap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { firstColumn } from "../pages";

function Work() {
  return (
    <section className="flex items-center justify-center  h-screen flex-col w-full bg-[#17181c]">
      <h1 id="work" className="text-6xl font-bellefair">
        Our work
      </h1>
      <ul className="flex gap-8 mt-16 work w-[1300px] ">
        {firstColumn.map(({ src, id }) => (
          <li
            key={src}
            className={`flex items-center gap-36 relative transition duration-300 ease-in-out grayscale hover:grayscale-0 cursor-pointer`}
          >
            <Link href={`/work/${id}`}>
              <Image
                src={src}
                width={300}
                height={320}
                alt=""
                className="object-cover rounded-xl w-[300px] h-[450px]  "
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Work;
