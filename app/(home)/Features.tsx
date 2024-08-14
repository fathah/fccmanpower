    import { CardSpotlight } from "@/components/ui/card-spotlight";
import { BsPersonFillGear } from "react-icons/bs";
import { GrUserWorker } from "react-icons/gr";
    import { MdOutlineEngineering } from "react-icons/md";

const Features = () => {
    const ITEMS = [
        {name:"Civil Manpower",
        icon: <GrUserWorker/>,
        body:"We provide all-inclusive civil manpower services for our clients"},
        {name:"Electircal Manpower",
        icon: <BsPersonFillGear/>,
        body:"Our service includes all-electrician services for our clients"},
        {name:"Mechanic Manpower",
        icon: <MdOutlineEngineering/>,
        body:"We provide all-inclusive mechanical services for our clients"},
       
    ];
    return (
        <section className="pt-10 pb-20">
            <h1 className="text-3xl font-bold text-center text-primary mb-8">Services We Offer</h1>
            <div className="commonwidth grid lg:grid-cols-3 gap-8 ">
            {
                ITEMS.map((item, index) => {
                    return (
                        <CardSpotlight key={index} className="cursor-pointer text-white"
                        data-aos="fade-up"
                        data-aos-delay={150*index}
                        >
                            <section className="relative z-50">
                            <div className="text-5xl mb-1 text-primary">
                                {item.icon}
                            </div>
                            <h1 className="text-2xl font-bold">{item.name}</h1>
                            <p className="opacity-70">{item.body}</p>
                            </section>
                        </CardSpotlight>
                    );
                })
            }
               
        </div>
        </section>
    );
}

export default Features;