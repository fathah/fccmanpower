"use client";

import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import React from "react";

export function ContactForm() {
  return (
    <BackgroundGradientAnimation containerClassName="h-[70vh]">
      <div className="commonwidth fullcenter py-20 px-5 relative z-50 " >
      <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-4xl font-black">
        Get in Touch
        </p>
        <form className="py-5 w-full lg:w-5/12">
<div><input type="text" className="homeinput " placeholder="Your Name" /></div>
<div><input type="text" className="homeinput" placeholder="Contact" /></div>
<div><input type="text" className="homeinput " placeholder="Message" /></div>
<div className="fullcenter">
  <button className="text-white bg-primaryDark w-full py-4">Submit</button>
</div>
        </form>
      </div>
    </BackgroundGradientAnimation>
  );
}
