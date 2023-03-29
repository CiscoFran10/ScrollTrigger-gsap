import React from "react";
import Image from "next/image";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Work from "@/components/Work";

export default function Scroll() {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
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
      scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.1,
      },
    });

    gsap.to(".image", {
      duration: 1,
      filter: "grayscale(0)",
      scrollTrigger: {
        trigger: "main",
        start: "20% top",
        end: "bottom bottom",
        scrub: 0.1,
      },
    });
  });

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

      <Work active={active} setActive={setActive} />
    </main>
  );
}

export const firstColumn = [
  {
    id: 1,
    title: "Majestic Castle: A Glimpse into History",
    description:
      "This stunning picture captures the essence of a majestic castle, standing tall and proud against a backdrop of rolling hills and a clear blue sky. The castle's impressive stone walls and turrets evoke a sense of history and grandeur, while the lush greenery and vibrant flowers surrounding it add a touch of natural beauty. The image is a testament to the enduring allure of castles, and invites the viewer to imagine the stories and secrets hidden within its walls.",
    description2:
      "Amidst the clouds, a fortress grand, Its walls of stone, a mighty stand, The ancient keep, with towers high, A symbol of power, touching the sky. With flags that wave, in the winds so bold, The castle tells a tale of old, Of knights and kings, and battles won, Of honor and valor, by sword and gun. The gates now open, to those who seek, The secrets held, within the keep, A glimpse of history, a timeless tale, Of a castle grand, that will never fail.",
    src: "https://images.unsplash.com/photo-1679926398477-c35c89ba1da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
    large:
      "https://images.unsplash.com/photo-1594735514819-6bdb44c65772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    bg: "https://images.unsplash.com/reserve/0y86gz4sT4O2ZQJIRWXE_IMG_0476.JPG?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    title: "A Vintage Ride Through Time",
    description:
      "The photo depicts an old bicycle parked on a quaint cobblestone street. The weathered, vintage bicycle frame is adorned with a rustic basket filled with fresh flowers, adding a touch of charm to the scene. The background shows a row of historic buildings, creating a sense of nostalgia and warmth. The overall image evokes a feeling of simplicity and tranquility, reminiscent of a bygone era.",
    description2:
      "Amidst the worn cobblestone street, An aged bicycle stands tall and neat. Its vintage charm a sight to behold, A story of the past it has told. The rusty frame and worn-out tires, Evoke memories of bygone desires. The old bike, a relic of its time, Is now a symbol of nostalgia and rhyme. In the silent street, it stands alone, A testament to days that have flown. A treasure from another age, he old bike, a true heritage.",
    src: "https://images.unsplash.com/photo-1679927341810-6032f01ca354?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    large:
      "https://images.unsplash.com/photo-1604674748495-9f777bf84302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    bg: "https://images.unsplash.com/photo-1536690004207-14d94d9abad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
  },
  {
    id: 3,
    title: "Two Dogs in a Winter Wonderland",
    description:
      "In this picturesque scene, two furry companions can be seen joyfully pulling a sled through a blanket of pristine snow. The larger of the two dogs is harnessed in the front, leading the way with determination, while the smaller one follows obediently behind. Their tongues are lolling out of their mouths in excitement, and their tails are wagging furiously as they revel in the winter wonderland around them. The sled, laden with supplies, creates a trail of tracks behind them, as they disappear into the distance, eager to explore the snowy landscape ahead.",
    description2:
      "As snowflakes dance in the air, Two furry friends brave the winter glare. Their coats a contrast against the white, As they pull their sled with all their might. Their paws leave prints in the snow, As they venture where few dare to go. The silence broken only by their breath, A testament to their teamwork and strength. Amidst the frozen beauty all around, These two dogs are the only sound. In this winter wonderland, they're a sight to see, A true embodiment of loyalty and glee.",
    src: "https://images.unsplash.com/photo-1679888669342-d37cad2050d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    large:
      "https://images.unsplash.com/photo-1540092634799-a937b758282a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    bg: "https://images.unsplash.com/photo-1647374916415-d9b89f985bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1538&q=80",
  },
  {
    id: 4,
    title: "Sands of the Desert: Exploring the Barren Beauty",
    description:
      "The picture shows a vast expanse of desert with undulating sand dunes as far as the eye can see. The barren landscape is bathed in the golden light of the sun, casting deep shadows that highlight the rugged terrain. The clear blue sky above stretches out into infinity, creating a sense of endlessness and solitude. The stark beauty of the desert is captured in this stunning image, evoking a sense of awe and wonder in the viewer.",
    description2:
      "A vast expanse of golden sand stretches as far as the eye can see, under an endless sky of deep blue. The stillness is punctuated only by the occasional rustle of the wind and the distant cry of a lone bird. Yet, in this apparent lifelessness, a hidden beauty lies. The gentle curves of the dunes, the intricate patterns etched into the sand, and the subtle changes of color throughout the day, all combine to create a barren beauty that is both stark and breathtaking.",
    src: "https://images.unsplash.com/photo-1679847727418-33ef58d86ebe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    large:
      "https://images.unsplash.com/photo-1596625820723-f0f481ff80be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    bg: "https://images.unsplash.com/photo-1516074269859-f54ee0d65fa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
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
