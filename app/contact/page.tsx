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
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27428.31592737886!2d55.335444305850395!3d25.303820729267724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c769ceaebc5%3A0x87ef0a2e9e93dfdc!2sAl%20Nahda%20-%20Sharjah!5e1!3m2!1sen!2sae!4v1723873300221!5m2!1sen!2sae"
                    width="100%" height="100%" 
                    className="rounded-2xl"
                     allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div>

                    </div>
                </section>
            </main>
        </CommonLayout>
    );
}

export default ContactUs;