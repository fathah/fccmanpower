const Mechanical = () => {
    const mechanicalManpowerServices = [
        {
          title: "Pipe Fabricator",
          description: "Skilled pipe fabricators specializing in cutting, assembling, and installing pipes for various industrial applications with precision."
        },
        {
          title: "Steel Fabricator",
          description: "Experienced steel fabricators creating and assembling steel structures, ensuring strength and durability in construction projects."
        },
        {
          title: "Aluminium Fabricator",
          description: "Expert aluminium fabricators handling the fabrication and assembly of aluminium components for a wide range of applications."
        },
        {
          title: "Aluminium Fitter",
          description: "Proficient aluminium fitters installing and fitting aluminium structures and components with accuracy and attention to detail."
        },
        {
          title: "3G Welder",
          description: "Certified 3G welders performing vertical, horizontal, and flat welding positions, ensuring strong and reliable welds."
        },
        {
          title: "6G Welder",
          description: "Highly skilled 6G welders executing complex welding tasks in all positions, delivering high-quality and precise welds."
        },
        {
          title: "MIG Welder",
          description: "Specialized MIG welders using Metal Inert Gas welding techniques to join metals, ensuring strong and efficient welds."
        },
        {
          title: "ARC Welder",
          description: "Experienced ARC welders using electric arc welding processes to join materials, providing reliable and durable welds."
        },
        {
          title: "TIG Welder",
          description: "Expert TIG welders utilizing Tungsten Inert Gas welding for high-quality, precise welds on various metals and alloys."
        },
        {
          title: "Insulator",
          description: "Skilled insulators applying insulation materials to pipes, ducts, and other structures, ensuring energy efficiency and safety."
        },
        {
          title: "Pipe Fitter",
          description: "Experienced pipe fitters installing, assembling, and maintaining piping systems in various industrial and commercial settings."
        },
        {
          title: "Mechanical Helper",
          description: "Reliable mechanical helpers supporting skilled workers, handling various tasks to ensure project efficiency and progress."
        }
      ];
      


    return (
        <main className="commonwidth py-14">
             <section className=" grid lg:grid-cols-2 gap-10">
            <div className="fullcenter" data-aos="fade-up">
                <img src="/images/mechanical.jpeg" className="w-8/12 rounded-2xl" alt="" />
            </div>
            <div className="flex flex-col justify-center" data-aos="fade-left">
                <h2 className="text-3xl font-bold text-primary">Mechanical Manpower</h2>
                <p>
                At Fajar Al Fayha Manpower, our mechanical manpower services are designed to ensure the timely and successful 
                completion of your projects. We provide a team of skilled professionals including fabricators, welders, 
                fitters, and helpers. 
                Our commitment to quality and efficiency guarantees that your mechanical needs are met with precision and expertise
                </p>
            </div>
           </section>
           <section className="grid lg:grid-cols-4 gap-8 my-10">
            {
                mechanicalManpowerServices.map((item, index) => {
                    return <div key={index} className="grid-item bg-black">
                        <div className="font-bold text-primary">{item.title}</div>
                        <p className="text-xs ">{item.description}</p>
                    </div>
                })
            }
           </section>
        </main>
    );
}

export default Mechanical;