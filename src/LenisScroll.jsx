import { useEffect } from "react";
import Lenis from "lenis";

export default function LenisScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,          // smoothness (0–1)
      smoothWheel: true,  // enables mousewheel smoothing
      smoothTouch: false, // optional for mobile
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return null; // no UI, just activates smooth scroll
}
