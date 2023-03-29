import "@/styles/globals.css";
import React from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function App({ Component, pageProps }) {
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
  }, []);

  return <Component {...pageProps} />;
}
