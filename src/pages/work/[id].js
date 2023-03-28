import gsap from "gsap/dist/gsap";
import Flip from "gsap/dist/Flip";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { firstColumn } from "..";

function Work() {
  const workID = useRouter().query?.id;
  const work = firstColumn.find((item) => item.id === +workID);

  React.useEffect(() => {
    gsap.to("h1", { opacity: 0, duration: 0.4, delay: 0.5 });

    gsap.fromTo(
      ".description",
      { zIndex: 0, opacity: 0, x: 500, duration: 1 },
      { zIndex: 1, opacity: 1, x: 0, delay: 1.5, duration: 1 }
    );

    const card = document.querySelector(".show");

    gsap.to(".show", {
      scale: 0.92,
      ease: "elastic.out(1, 0.3)",
      duration: 0.6,
    });
    gsap.to(".show", {
      scale: 1.3,
      delay: 0.8,
      duration: 1,
      x: -card.getBoundingClientRect().left + 600,
    });

    gsap.to(".hide", { opacity: 0, duration: 0.3 });
  }, []);

  if (work)
    return (
      <main className="w-full h-screen bg-[#17181c] flex items-center justify-center">
        <section className="flex items-center justify-center flex-col left-0 top-0 w-full pr-4 pb-[1px] h-screen fixed bg-[#17181c]">
          <h1 className="text-6xl font-bellefair">Our work</h1>
          <ul className="flex gap-8 mt-16 work w-[1300px] relative">
            {firstColumn.map(({ src, id }) => (
              <li
                key={src}
                className={`flex relative grayscale hover:grayscale-0 ${
                  id === +workID ? "show grayscale-0 z-50" : "hide"
                }`}
              >
                <Image
                  src={src}
                  width={300}
                  height={320}
                  alt=""
                  className="object-cover rounded-xl w-[300px] h-[450px]  "
                />

                <div className="flex flex-col absolute left-[400px] w-[600px] space-y-16 description opacity-0">
                  <p className="max-w-2xl leading-[40px] text-2xl font-bellefair">
                    {work.description}
                  </p>
                  <Link
                    href={"/#work"}
                    className="px-4 py-2 text-center text-black transition duration-300 ease-in-out bg-white border border-transparent rounded-xl max-w-fit hover:border-white hover:bg-transparent hover:text-white"
                  >
                    GO BACK
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    );
}

export default Work;
