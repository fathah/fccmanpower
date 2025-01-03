import CommonLayout from "@/components/layout/CommonLayout";
import { FaSquarePhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const ContactUs = () => {
    return (
        <CommonLayout>
            <main className="">
            <section className="commonwidth py-10 ">
                <h1 className="text-3xl font-bold text-primary">Keep in Touch</h1>
                <section className="grid lg:grid-cols-2 gap-8">

                    {/* --------------- CONTACT DETAILS ---------------- */}
                    <div className="text-lg">
                        <img src="/images/logo.png" className="h-12 mt-10 mb-3" alt="" />
                        <p>Jasim Almidfa Building - 205</p>
                        <p>Kuwait Square, Maysaloon </p>
                        <p>Al Sharq, Sharjah, UAE</p>

                        <section className="mt-4">
                             <h6 className="flex items-center gap-x-3 mb-2"><FaSquarePhone className="text-3xl" />
                                <div className="text-lg font-bold font-sans">065 481 813</div>
                            </h6>
                            <h6 className="flex items-center gap-x-3 mb-2"><FaSquarePhone className="text-3xl" />
                                <div className="text-lg font-bold font-sans">+971 509 769 862</div>
                            </h6>

                            <h6 className="flex items-center gap-x-3"><IoMdMail className="text-3xl" />
                                <div className="text-lg font-bold">info@fccmanpower.com</div>
                            </h6>
                        </section>
                       <section className="text-xl mt-5 border-t pt-4">
                       <h6 className="font-bold">Our Sister Concern</h6>
                        <div className="py-3">
                            <img src="/images/fajar-man.png" className="w-5/12" alt="" />
                            <p>Al Garhoud 102,</p>
                        <p>Dubai, UAE</p>
                        <h6 className="flex items-center gap-x-3 mb-2"><FaSquarePhone className="text-3xl" />
                                <div className="text-lg font-bold font-sans">+971 58 553 7862

</div>
                            </h6>

                        </div>
                       </section>

                    </div>

                    {/* ------------------------ LOCATION MAP AREA -------------------------- */}
                    

                    <div>
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.418035808438!2d55.4040342!3d25.3573025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f591ce61c3d57%3A0x8f1e0b27b82c520d!2sFajar%20Manpower!5e0!3m2!1sen!2sae!4v1735885560788!5m2!1sen!2sae"
                    width="100%" height="100%" 
                    className="rounded-2xl"
                     allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div>

                    </div>
                </section>
            </section>
            </main>
        </CommonLayout>
    );
}

export default ContactUs;
