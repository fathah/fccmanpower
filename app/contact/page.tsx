import CommonLayout from "@/components/layout/CommonLayout";
import { FaSquarePhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const ContactUs = () => {
    return (
        <CommonLayout>
            <main className="commonwidth py-10 text-white">
                <h1 className="text-3xl font-bold text-primary">Keep in Touch</h1>
                <section className="grid lg:grid-cols-2 gap-8">

                    {/* --------------- CONTACT DETAILS ---------------- */}
                    <div className="text-lg">
                        <img src="/images/logo-w.png" className="h-12 mt-10 mb-3" alt="" />
                        <p>Al Nahda, Sharja, UAE</p>
                        <p>Po Box. 97378</p>

                        <section className="mt-4">
                            <h6 className="flex items-center gap-x-3 mb-2"><FaSquarePhone className="text-3xl" />
                                <div className="text-lg font-bold font-sans">+971 509 769 862</div>
                            </h6>

                            <h6 className="flex items-center gap-x-3"><IoMdMail className="text-3xl" />
                                <div className="text-lg font-bold">info@fccmanpower.com</div>
                            </h6>
                        </section>


                    </div>

                    {/* ------------------------ LOCATION MAP AREA -------------------------- */}
                    

                    <div>

                    </div>

                    <div>

                    </div>
                </section>
            </main>
        </CommonLayout>
    );
}

export default ContactUs;