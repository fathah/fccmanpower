import Link from "next/link";
import { IoArrowForwardSharp } from "react-icons/io5";

const Hero = () => {
    return (
        <div className="relative  lg:h-[88svh] overflow-hidden"
        style={{
            backgroundImage: "url('/images/hero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
        >
            <div className="bg-primaryDark bg-opacity-80 w-full h-full">
                <section className="grid lg:grid-cols-2 h-full commonwidth">

<div className="text-white flex flex-col justify-center py-10 px-5 lg:px-0">
    <div>
    <img src="/images/logo-w.png" data-aos="fade-down" className="hidden lg:block h-16" alt="" />
    </div>
    <h1 className="text-4xl lg:text-5xl font-bold text-primary my-4"
    data-aos="fade-up"
    data-aos-delay="200"
    >Building Careers, Shaping Futures</h1>
    <div>
        <p
        data-aos="fade-up"
        data-aos-delay="500"
        className="text-sm mb-4"
        >Fajar Al Fayha Manpower connects skilled professionals with exceptional career opportunities. Our commitment to quality service ensures a seamless experience for both job seekers and employers. Join us in building a brighter future, one job at a time</p>
   
   <Link href={'/about'}
   className="link group">
    Know More <IoArrowForwardSharp className="group-hover:translate-x-1 duration-300" />  </Link>
                       
    </div>
</div>
<div  data-aos="fade-up"
        data-aos-delay="800" className="h-[70vh] lg:h-auto overflow-hidden">
    <img src="/images/man.png" className="w-10/12" alt="" />
</div>


                </section>
            </div>
        </div>
    );
}

export default Hero;