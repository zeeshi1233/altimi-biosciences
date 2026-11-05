import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

let isRegistered = false;

export function registerGSAP() {
  if (typeof window !== "undefined" && !isRegistered) {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    isRegistered = true;
  }
  return { gsap, ScrollTrigger, ScrollToPlugin };
}

export { gsap, ScrollTrigger, ScrollToPlugin };

