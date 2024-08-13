const Hero = () => {
    return (
        <div className="relative h-[88svh] overflow-hidden"
        style={{
            backgroundImage: "url('/images/hero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}
        >
            <div className="bg-primaryDark bg-opacity-80 w-full h-full">
                <section className="grid lg:grid-cols-2 h-full commonwidth">

<div className="text-white flex flex-col justify-center ">
    <div>
    <img src="/images/logo-w.png" data-aos="fade-down" className="h-16" alt="" />
    </div>
    <h1 className="text-5xl font-black text-primary my-4"
    data-aos="fade-up"
    data-aos-delay="200"
    >Building Careers, Shaping Futures</h1>
    <div>
        <p
        data-aos="fade-up"
        data-aos-delay="500"
        >FCC Manpower connects skilled professionals with exceptional career opportunities. Our commitment to quality service ensures a seamless experience for both job seekers and employers. Join us in building a brighter future, one job at a time</p>
    </div>
</div>
<div  data-aos="fade-up"
        data-aos-delay="800">
    <img src="/images/man.png" alt="" />
</div>


                </section>
            </div>
        </div>
    );
}

export default Hero;