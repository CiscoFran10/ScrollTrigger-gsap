import Lenis from "@studio-freight/lenis";
import Image from "next/image";
import React from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

export default function Scroll() {
  React.useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".section-columns", {
      scale: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
      },
    });

    gsap.to(".column-up", {
      y: 200,
      duration: 1,
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.1,
      },
    });

    gsap.to(".column-down", {
      y: -200,
      duration: 1,
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.1,
      },
    });

    gsap.to(".image", {
      scale: 2.5,
      duration: 1,
      filter: "grayscale(0)",
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.1,
      },
    });

    gsap.to(".work li", {
      opacity: 1,
      stagger: 0.3,
      duration: 2,
      scrollTrigger: {
        trigger: ".work li",
      },
    });
  }, []);

  return (
    <main className="flex flex-col items-center justify-center">
      <section className="hero h-screen flex flex-col space-y-9 pt-32 pb-12 items-center text-center bg-[#17181c] w-full mb-[250vh]">
        <h1 className="font-bellefair text-[180px] leading-none">
          Charlotte
          <br />
          LaRue
        </h1>
        <p className="text-xl leading-normal max-w-[300px] flex-1">
          WE THINK HAVING CAPACITY TO CHOOSE GIVES US FREEDOM. CHOICE IS THE
          VERY DENIAL OF FREEDOM.
        </p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12 animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
          />
        </svg>
      </section>

      <section className="section-columns fixed inset-0 h-screen w-full -z-10 flex justify-center p-10 scale-[0.8]">
        <div className="flex items-center justify-center space-x-8 columns will-change-transform">
          <ul className="flex flex-col gap-8 pt-[5vh] pb-[15vh] column-up">
            {firstColumn.map(({ src }) => (
              <li key={src} className="w-[400px] rounded-xl overflow-hidden ">
                <Image
                  className="object-cover w-full h-full image grayscale"
                  src={src}
                  alt=""
                  width={400}
                  height={400}
                />
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-8 pt-[5vh] pb-[15vh] column-down">
            {secondColumn.map(({ src }) => (
              <li key={src} className="w-[400px] rounded-xl overflow-hidden ">
                <Image
                  className="object-cover w-full h-full image grayscale "
                  src={src}
                  alt=""
                  width={400}
                  height={400}
                />
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-8 pt-[5vh] pb-[15vh] column-up">
            {thirdColumn.map(({ src }) => (
              <li key={src} className="w-[400px] rounded-xl overflow-hidden ">
                <Image
                  className="object-cover w-full h-full image grayscale"
                  src={src}
                  alt=""
                  width={400}
                  height={400}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full h-screen bg-[#17181c] flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bellefair">Our work</h1>
        <ul id="work" className="flex gap-8 mt-16 work w-[1300px]">
          {firstColumn.map(({ src, id }, index) => (
            <li
              key={src}
              className={`overflow-hidden rounded-xl group opacity-0 `}
            >
              <Link href={`/work/${id}`}>
                <Image
                  src={src}
                  width={300}
                  height={320}
                  alt=""
                  className="object-cover grayscale group-hover:grayscale-0 transition duration-300 ease-in-out w-[300px] h-[450px] "
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export const firstColumn = [
  {
    id: 1,
    description:
      "This stunning picture captures the essence of a majestic castle, standing tall and proud against a backdrop of rolling hills and a clear blue sky. The castle's impressive stone walls and turrets evoke a sense of history and grandeur, while the lush greenery and vibrant flowers surrounding it add a touch of natural beauty. The image is a testament to the enduring allure of castles, and invites the viewer to imagine the stories and secrets hidden within its walls.",
    src: "https://images.unsplash.com/photo-1679926398477-c35c89ba1da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
  },
  {
    id: 2,
    description:
      "The photo depicts an old bicycle parked on a quaint cobblestone street. The weathered, vintage bicycle frame is adorned with a rustic basket filled with fresh flowers, adding a touch of charm to the scene. The background shows a row of historic buildings, creating a sense of nostalgia and warmth. The overall image evokes a feeling of simplicity and tranquility, reminiscent of a bygone era.",
    src: "https://images.unsplash.com/photo-1679927341810-6032f01ca354?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,
    description:
      "In this picturesque scene, two furry companions can be seen joyfully pulling a sled through a blanket of pristine snow. The larger of the two dogs is harnessed in the front, leading the way with determination, while the smaller one follows obediently behind. Their tongues are lolling out of their mouths in excitement, and their tails are wagging furiously as they revel in the winter wonderland around them. The sled, laden with supplies, creates a trail of tracks behind them, as they disappear into the distance, eager to explore the snowy landscape ahead.",
    src: "https://images.unsplash.com/photo-1679888669342-d37cad2050d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,
    description:
      "The picture shows a vast expanse of desert with undulating sand dunes as far as the eye can see. The barren landscape is bathed in the golden light of the sun, casting deep shadows that highlight the rugged terrain. The clear blue sky above stretches out into infinity, creating a sense of endlessness and solitude. The stark beauty of the desert is captured in this stunning image, evoking a sense of awe and wonder in the viewer.",
    src: "https://images.unsplash.com/photo-1679847727418-33ef58d86ebe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];
const secondColumn = [
  {
    src: "https://images.unsplash.com/photo-1679859229899-b89913461269?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },

  {
    src: "https://images.unsplash.com/photo-1679860283368-a856a65fce27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1679841350010-64f5b144944f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1679872995990-a9811773f3d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1679834780326-f3e8b5a5a01e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];
const thirdColumn = [
  {
    src: "https://images.unsplash.com/photo-1679854493493-0ae0d2cb2800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1679864877136-40bc8752d2bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1679888669622-fc8cd435a5a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    src: "https://images.unsplash.com/photo-1679834818964-e6f5c9391e8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];
