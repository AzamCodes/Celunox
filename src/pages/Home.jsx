"use client";
import styles from "./page.module.scss";
import { testimonials } from "../constants"; // Ensure you import testimonials
import Card from "../components/Card";
import { useScroll } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={container} className="relative">
      {testimonials.map((testimonial, i) => {
        const targetScale = 1 - (testimonials.length - i) * 0.05;
        return (
          <Card
            key={`t_${i}`}
            i={i}
            {...testimonial}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}
