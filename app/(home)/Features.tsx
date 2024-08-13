import { CardSpotlight } from "@/components/ui/card-spotlight";

const Features = () => {
    const ITEMS = [
        {name:"Example Service", body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, tempore!"},
        {name:"Example Service", body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, tempore!"},
        {name:"Example Service", body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, tempore!"},
        {name:"Example Service", body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, tempore!"},
        {name:"Example Service", body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, tempore!"},
        {name:"Example Service", body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, tempore!"},
    ];
    return (
        <div className="commonwidth grid lg:grid-cols-3 gap-8 py-20">
            {
                ITEMS.map((item, index) => {
                    return (
                        <CardSpotlight key={index} className="cursor-pointer">
                            <div className="text-white relative z-50">
                            <h1 className="text-2xl font-bold">{item.name}</h1>
                            <p>{item.body}</p>
                            </div>
                        </CardSpotlight>
                    );
                })
            }
               
        </div>
    );
}

export default Features;