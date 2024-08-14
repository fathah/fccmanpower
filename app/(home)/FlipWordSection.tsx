import { FlipWords } from "@/components/ui/flip-words";
import React from "react";

export function FlipWordsSection() {
    const words = ["skilled", "reliable", "efficient", "dedicated"];


  return (
    <div className="relative bg-gbg py-36 flex justify-center items-center px-4 overflow-hidden">
      <div data-aos="zoom-in" className="absolute ">
      <img src="/images/bdng2.png" className="opacity-10"  alt="" />

      </div>
      <div className="text-3xl lg:text-6xl mx-auto font-normal text-neutral-600 dark:text-neutral-400" 
      data-aos="fade-up">
    Premier partner <div className="block lg:hidden"></div>for<FlipWords words={words} /> <br />
        manpower solutions <div className="block lg:hidden"></div>in the UAE</div>
    </div>
  );
}
