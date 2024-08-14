"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
export function FloatingMenu() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems}  />
      
    </div>
  );
}
