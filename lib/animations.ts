import { Variants } from "framer-motion";

export const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
};

export const STAGGER: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};