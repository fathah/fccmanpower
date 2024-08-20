const Electrical = () => {
    const electricalManpowerServices = [
        {
          title: "Electrical Engineer",
          description: "Experienced electrical engineers responsible for designing, developing, and maintaining electrical systems to ensure optimal performance and safety."
        },
        {
          title: "Electrical Supervisor",
          description: "Skilled supervisors managing electrical projects, coordinating teams, and ensuring compliance with safety standards and project specifications."
        },
        {
          title: "Electrical Foreman",
          description: "Proficient foremen overseeing electrical installations and maintenance, ensuring timely completion and adherence to quality standards."
        },
        {
          title: "Electrician",
          description: "Qualified electricians handling installation, maintenance, and repair of electrical systems, ensuring safe and efficient operations."
        },
        {
          title: "Industrial Electrician",
          description: "Specialized electricians with expertise in industrial settings, managing complex electrical systems and machinery for seamless operation."
        },
        {
          title: "Chargehand",
          description: "Competent chargehands assisting supervisors and foremen, managing day-to-day electrical tasks, and ensuring project efficiency."
        },
        {
          title: "Electrical Helper",
          description: "Reliable helpers supporting electricians, performing various tasks to facilitate smooth and efficient electrical work."
        }
      ];
      


    return (
        <main className="py-16 bg-white">
            <div className="commonwidth">

          
             <section className=" grid lg:grid-cols-2 gap-10">
            <div className="fullcenter" data-aos="fade-up">
                <img src="/images/electric.jpeg" className="w-8/12 rounded-2xl" alt="" />
            </div>
            <div className="flex flex-col justify-center" data-aos="fade-left">
                <h2 className="text-3xl font-bold text-primary">Electrical Manpower</h2>
                <p className="text-black">
                At Fajar Al Fayha Manpower, we understand the critical importance of a secure and efficient electrical setup in today's 
                fast-paced technological world. Our electrical manpower services are designed to meet your needs with a 
                team of highly skilled professionals including electrical engineers, supervisors, foremen, and electricians. 
                We ensure that your projects are completed with the highest standards of safety, reliability, and efficiency

                </p>
            </div>
           </section>
           <section className="grid lg:grid-cols-4 gap-8 my-10">
            {
                electricalManpowerServices.map((item, index) => {
                    return <div key={index} className="grid-item bg-primary/15 shadow-lg">
                        <div className="font-bold text-primary">{item.title}</div>
                        <p className="text-xs ">{item.description}</p>
                    </div>
                })
            }
           </section>
           </div>
        </main>
    );
}

export default Electrical;