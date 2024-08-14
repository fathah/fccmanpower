import { CardSpotlight } from "@/components/ui/card-spotlight";
import Line from "@/components/widgets/Line";
import Link from "next/link";
import { IoArrowForwardSharp } from "react-icons/io5";

const AboutSection = () => {
    return (
        <CardSpotlight radius={350} className=" overflow-hidden">
            <section className="commonwidth py-10 lg:py-20 grid lg:grid-cols-2 text-white relative   z-50 ">
                <div data-aos="fade-right">
                    <img src="/images/bdng.png" className="w-10/12" alt="" />
                </div>

                <div className="flex flex-col justify-center pt-10">
                    <h1 className=" flex items-center gap-x-2 text-2xl font-bold"
                    data-aos="fade-up"
                    ><Line /> About FCC</h1>
                    <div className="opacity-80"
                     data-aos="fade-up"
                      data-aos-delay="300"
                    >
                        At Fajar Al Faya Concrete Carpenter Cont. (FCC Manpower), we pride ourselves on delivering exceptional construction and carpentry services. With years of experience and a team of skilled professionals, we have established a reputation for excellence and reliability in the industry. Our commitment to quality, safety, and customer satisfaction sets us apart as a trusted partner for all your construction needs.
                        <div className="mt-4">
                            <Link href={'/about'}
                                className="link group"
                            >Know More <IoArrowForwardSharp className="group-hover:translate-x-1 duration-300" />  </Link>
                        </div>

                    </div>
                </div>
            </section>




        </CardSpotlight>
    );
}

export default AboutSection;