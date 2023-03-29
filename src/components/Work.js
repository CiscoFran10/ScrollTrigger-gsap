import gsap from "gsap/dist/gsap";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { firstColumn } from "../pages";

function Work({ active, setActive }) {
  const work = firstColumn.find((item) => item.id === active);
  const tl = gsap.timeline();

  React.useEffect(() => {
    gsap.fromTo(
      ".description",
      { zIndex: 0, opacity: 0, x: 500, duration: 1 },
      { zIndex: 1, opacity: 1, x: 0, delay: 2, duration: 1 }
    );

    const card = document.querySelector(".show");

    if (card && active > 0) {
      gsap.to(".main-content", { overflowY: "initial" });
      tl.to("h1", { opacity: 0, duration: 0.4, delay: 0.5 })
        .to(".hide", { opacity: 0, duration: 0.3 })
        .to(
          ".show",
          {
            scale: 1.3,
            duration: 1.2,
            x: -card.getBoundingClientRect().left + 700,
          },
          "-=0.4"
        );
    }
  }, [tl, active]);

  const handleReverse = () => {
    setActive(0);
    tl.reverse();
  };

  return (
    <section className="w-full bg-[#17181c] flex flex-col items-center relative main-content">
      <div className="flex items-center absolute left-0 top-0 justify-center flex-col h-screen w-full   bg-[#17181c]">
        <h1 className="text-6xl font-bellefair">Our work</h1>
        <ul className="flex gap-8 mt-16 work w-[1300px] relative">
          {firstColumn.map(({ src, id }) => (
            <li
              onClick={() => setActive(id)}
              key={src}
              className={`flex relative grayscale hover:grayscale-0 cursor-pointer ${
                id === active ? "show grayscale-0 z-50" : "hide"
              }`}
            >
              <Image
                src={src}
                width={300}
                height={320}
                alt=""
                className="object-cover rounded-xl w-[300px] h-[450px]  "
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="content h-screen w-full">
        <div className="flex flex-col mt-[300px] ml-[300px] w-[600px] space-y-16 description opacity-0">
          <p className="max-w-2xl leading-[40px] text-2xl font-bellefair">
            {work?.description}
          </p>
          <button
            onClick={handleReverse}
            href={"/#work"}
            className="px-4 py-2 text-center text-black transition duration-300 ease-in-out bg-white border border-transparent rounded-xl max-w-fit hover:border-white hover:bg-transparent hover:text-white"
          >
            GO BACK
          </button>
        </div>

        <section className="w-full h-screen flex justify-center bg-[#17181c]">
          <p>{work?.description2}</p>
          <Image
            src={work?.large}
            alt={work?.description2}
            width={800}
            height={1000}
          />
        </section>
      </div>
    </section>
  );
}

export default Work;
