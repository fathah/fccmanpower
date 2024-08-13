import { FaSquarePhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
    
    return (
        <div className="bg-primaryDark py-6 text-white">
            <section className="commonwidth grid lg:grid-cols-3 pt-8 pb-4">
                <div>
                    <img src="/images/logo-w.png" className="h-10" alt="" />
                    <div>

                    </div>
                </div>
                <div>
                    <h6 className="flex items-center gap-x-3 mb-2"><FaSquarePhone className="text-3xl" />
                    <div className="text-xl font-bold font-sans">+971 895 265 895</div>
                    </h6>

                    <h6 className="flex items-center gap-x-3"><IoMdMail className="text-3xl" />
                    <div className="text-xl font-bold">info@fccmanpower.com</div>
                    </h6>


                </div>
                <div>
                    <h6 className="font-bold">FCC Manpower LLC</h6>
                    <p>Ithihad Building, Al Nahda,</p>
                    <p>Dubai, United Arab Emirates</p>
                </div>
            </section>
            
            <div className="fullcenter py-2 text-sm">
                <a href="https://ziqx.cc">⚡ziqx.cc</a>
            </div>
        </div>
    );
}

export default Footer;