"use client";

import Hamburger from "hamburger-react";
import { useState } from "react";
import { IoChevronForward } from "react-icons/io5";

const NavBar = () => {

    const [isOpen, setOpen] = useState(false);

    const ITEMS = [
        {name:"Home", to:"/"},
        {name:"About Us", to:"/about"},
        {name:"Services", to:"/services"},
        {name:"Contact Us", to:"/contact"},
    ];
    return (
        <main>
<div className="absolute top-5 right-5 lg:hidden text-white">
<Hamburger  toggled={isOpen} toggle={setOpen} />

</div>
            <nav className="bg-gbg py-5 w-full ">
            <div className="commonwidth flex justify-between items-center">
            <img src="/images/icon-w.png" className="h-12" alt="" />
            <div className="hidden lg:flex">
            {
                    ITEMS.map((item, index) => {
                        return (
                            <a href={item.to} key={index} className="text-white mx-3 hover:text-primary">{item.name}</a>
                        );
                    })
                }
            </div>
            </div>
           
        </nav>

        {/* MOBILE MENU */}
        {
            isOpen && <div>
                <div className="fixed bg-black bg-opacity-15 top-0 bottom-0 right-0 left-0 z-[500]"
                onClick={() => setOpen(false)}
                ></div>
                <section className="fixed top-0 bottom-0 p-10 bg-black text-white z-[999]" data-aos="fade-right">
 
 <div className="fullcenter mb-10">
 <img src="/images/logo-w.png" className="h-10" alt="" />

 </div>
 
 {/* MENU AREA */}
    <nav>
    {
 ITEMS.map((item, index) => {
                        return (
                            <a href={item.to} 
                            key={index} 
                            className="relative flex items-center gap-x-2  px-4 py-3 border border-white/20 
                             my-2  duration-300 group overflow-hidden ">
                                <div className="absolute top-0 bottom-0 right-0 left-0 opacity-0  group-hover:opacity-100
                                bg-primary -z-10 -translate-x-60 group-hover:translate-x-0 duration-300"></div>
                                <IoChevronForward />
                                {item.name}
                                </a>
                        );
                    })
                }
    </nav>
    <footer className="absolute bottom-0 py-6">
        <div className="text-sm opacity-50">Contact Us</div>
        <a href="tel:+971509769862" className="text-lg font-bold font-sans">+971 509 769 862</a>
    </footer>

            </section>
            </div>
        }
        </main>
    );
}

export default NavBar;