import CommonLayout from "@/components/layout/CommonLayout";
import CivilManpower from "./Civil";
import "./style.css";
import Electrical from "./Electrical";
import Mechanical from "./Mechanical";
const Services = () => {

   

    return (
        <CommonLayout>
           <main className=" py-10 text-white">
           <h1 className="text-2xl font-bold uppercase text-center mb-5">Services we offer</h1>
          
           <CivilManpower/>
           <Electrical/>
           <Mechanical/>
           </main>
        </CommonLayout>
    );
}

export default Services;