import { FaSquarePhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
    
    return (
        <div className="bg-black py-2 text-white">
            <section className="commonwidth grid lg:grid-cols-3 pt-20  gap-8 lg:gap-20">
                <div>
                    <img src="/images/logo-w.png" className="h-10" alt="" />
                    <div className="py-2 text-sm opacity-80">
                    Fajar Al Fayha Manpower provides comprehensive staffing solutions in the UAE. Offering skilled and unskilled labor with over three years of experience
                    </div>
                </div>
                <div>
                    <h6 className="flex items-center gap-x-3 mb-2"><FaSquarePhone className="text-3xl" />
                    <div className="text-lg font-bold font-sans">+971 509 769 862</div>
                    </h6>

                    <h6 className="flex items-center gap-x-3"><IoMdMail className="text-3xl" />
                    <div className="text-lg font-bold">info@fccmanpower.com</div>
                    </h6>


                </div>
                <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                    <h6 className="font-bold">Fajar Al Fayha</h6>
                    <p>Al Nahda, Sharja, UAE</p>
                    <p>Po Box. 97378</p>
                    </div>
                    <div>
                    <h6 className="font-bold">Fajar Manpower</h6>
                    <p>Al Garhoud 102, Dubai, UAE</p>
                    <p>+971 58 553 7862 </p>
                    


                    </div>
                    
                </div>
            </section>
            
            <div className="fullcenter py-5 mt-6 text-sm border-t border-white/20">
                <a href="https://ziqx.cc">⚡ziqx.cc</a>
            </div>
        </div>
    );
}

export default Footer;