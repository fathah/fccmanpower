import { FlipWords } from "@/components/ui/flip-words";
import React from "react";

export function FlipWordsSection() {
    const words = ["skilled", "reliable", "efficient", "dedicated"];


  return (
    <div className="bg-gbg py-36 flex justify-center items-center px-4 ">
      <div className="text-6xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
      Providing
        <FlipWords words={words} /> <br />
        manpower with FCC      </div>
    </div>
  );
}
