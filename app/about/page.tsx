import CommonLayout from "@/components/layout/CommonLayout";
import Line from "@/components/widgets/Line";

const AboutPage = () => {
    const aboutGridContent = [
        {
          title: "Our Expertise",
          description: "Over three years of experience in the UAE's dynamic market, refining our services to meet evolving staffing needs with precision."
        },
        {
          title: "Skilled Professionals",
          description: "Providing top-notch talent to drive your business success. Tailored solutions for single professionals or teams to match your requirements."
        },
        {
          title: "Comprehensive Services",
          description: "Supplying both skilled and unskilled labor to diverse clients, ensuring timely and efficient support for various industry needs."
        },
        {
          title: "Dedicated Team",
          description: "Our specialists are committed to understanding your unique needs and delivering personalized services to enhance your operations."
        },
        {
          title: "Reliable Support",
          description: "Trusted labor provider known for reliable, efficient, and dedicated staffing solutions that align with your business objectives."
        },
        {
          title: "Industry Insights",
          description: "Utilizing extensive experience and insights to offer strategic staffing solutions that adapt to the changing demands of the market."
        }
      ];

      
    return (
        <CommonLayout>
            
           <div className="bg-primary bg-opacity-10 ">
           <section className="commonwidth grid lg:grid-cols-2 relative overflow-hidden">
                <div>
                    <img src="/images/bdng.png" className="absolute opacity-20" alt="" />
                    <img src="/images/man2.png" data-aos="fade-up" alt="" />
                </div>


                <div className="flex flex-col justify-center relative z-10 py-6" data-aos="fade-right"
                data-aos-delay="200"
                >
                <div className="flex items-center gap-x-2 text-lg"><Line/> About</div>
                    <h1 className="text-4xl font-bold ">
                       
                    <span className="text-primary">
                    Fajar Al Faya 
                    </span> Concrete Carpenter Cont.

                    </h1>
                    <div className="opacity-80 text-justify">
<p>Welcome to Fajar Manpower, your premier partner for comprehensive manpower solutions in the UAE. With over three years of expertise in the region's dynamic market, we've refined our services to meet your evolving staffing needs.</p>
<p>Our dedicated team of specialists is committed to delivering top-notch talent to drive your business success. Whether you require a single skilled professional or a team of workers for a project, we offer tailored solutions to match your requirements.</p>
<p>As a trusted labor provider, we supply both skilled and unskilled labor to a diverse client base, ensuring timely and efficient support. Our extensive experience and industry insights enable us to understand your unique needs and provide personalized services.</p>
                    </div>
                </div>
            </section>
           </div>

            <section className="">
                <div className="commonwidth py-20 grid lg:grid-cols-3 gap-8">
                    {
                        aboutGridContent.map((item, index) => {
                            return <div key={index} 
                            className=" p-6 border bg-primary/10 cursor-pointer hover:scale-105 duration-500">
                                <h1 className="font-bold text-xl text-primary">{item.title}</h1>
                                <p className="text-sm">
                                    {item.description}
                                </p>
                            </div>
                        })
                    }
                </div>
            </section>
        </CommonLayout>
    );
}

export default AboutPage;