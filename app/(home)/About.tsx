import { CardSpotlight } from "@/components/ui/card-spotlight";
import Line from "@/components/widgets/Line";
import Link from "next/link";
import { IoArrowForwardSharp } from "react-icons/io5";

const AboutSection = () => {
    return (
        <CardSpotlight radius={350} className="h-[70vh] overflow-hidden">
            <section className="commonwidth py-20 grid lg:grid-cols-2 text-white relative   z-50 ">
                <div>

                    <img src="/images/man2.png" alt="" />
                </div>

                <div>
                    <h1 className=" flex items-center gap-x-2 text-2xl font-bold"><Line /> About FCC</h1>
                    <div className="opacity-80">
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