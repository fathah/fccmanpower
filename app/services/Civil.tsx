const CivilManpower = () => {
    const civilManpowerServices = [
        {
          title: "Civil Engineer",
          description: "Expert civil engineers overseeing project planning, design, and construction to ensure structural integrity and compliance with regulations."
        },
        {
          title: "Civil Supervisor",
          description: "Experienced supervisors managing construction sites, coordinating teams, and ensuring project milestones are achieved efficiently."
        },
        {
          title: "Civil Foreman",
          description: "Skilled foremen leading work crews, ensuring safety standards, and maintaining project timelines and quality."
        },
        {
          title: "Chargehand",
          description: "Proficient chargehands assisting foremen, managing day-to-day tasks, and ensuring smooth workflow on site."
        },
        {
          title: "Certified Scaffolder",
          description: "Qualified scaffolders erecting and dismantling scaffolding structures safely and efficiently, adhering to industry standards."
        },
        {
          title: "Scaffolder Normal",
          description: "Scaffolders providing essential support in constructing scaffolding, ensuring stability and safety for workers."
        },
        {
          title: "Steel Fixer",
          description: "Experienced steel fixers installing and securing steel bars and mesh in concrete structures for enhanced strength and durability."
        },
        {
          title: "Shuttering Carpenter",
          description: "Expert carpenters constructing formwork for concrete structures, ensuring precision and stability in building foundations."
        },
        {
          title: "Gypsum Carpenter",
          description: "Skilled gypsum carpenters installing drywall systems, partitions, and ceiling designs with accuracy and quality finishes."
        },
        {
          title: "Finishing Carpenter",
          description: "Talented finishing carpenters adding the final touches to projects, including trim work, cabinetry, and detailed woodwork."
        },
        {
          title: "Plaster Mason",
          description: "Proficient plaster masons applying plaster coats to walls and ceilings, ensuring smooth and durable finishes."
        },
        {
          title: "Tile Mason",
          description: "Experienced tile masons installing tiles on floors, walls, and surfaces, delivering aesthetically pleasing and long-lasting results."
        },
        {
          title: "Wood Polisher",
          description: "Skilled wood polishers enhancing the appearance of wooden surfaces, providing a polished and refined finish."
        },
        {
          title: "Sand Blaster",
          description: "Professional sand blasters cleaning and preparing surfaces using high-pressure abrasive materials for smooth finishes."
        },
        {
          title: "Wall Painter",
          description: "Expert wall painters applying paint and coatings to interior and exterior surfaces, ensuring high-quality and lasting finishes."
        },
        {
          title: "Wood Painter Rigger",
          description: "Specialized painters focusing on wood surfaces, applying paints, stains, and finishes for protective and aesthetic purposes."
        },
        {
          title: "Civil Helper",
          description: "Reliable civil helpers supporting skilled workers, handling various tasks to ensure project efficiency and progress."
        },
        {
          title: "Safety Officer",
          description: "Dedicated safety officers overseeing site safety protocols, ensuring compliance, and promoting a safe working environment."
        }
      ];


    return (
        <main className="commonwidth">
             <section className="grid lg:grid-cols-2">
             <div className="fullcenter" data-aos="fade-up">
                <img src="/images/civil.webp" className="w-8/12 rounded-2xl" alt="" />
            </div>
            <div  className="flex flex-col justify-center" data-aos="fade-left">
                <h2 className="text-3xl font-bold text-primary">Civil Manpower</h2>
                <p>
                At Fajar Al Fayha Manpower, we provide comprehensive civil manpower services tailored to meet the diverse needs of our clients.
                 Our team consists of highly skilled professionals including civil engineers, supervisors, foremen, scaffolders, 
                 carpenters, masons, painters, and safety officers. We are committed to delivering exceptional quality and reliability 
                 in every project, ensuring your construction goals are met with precision and efficiency.

                </p>
            </div>
           </section>
           <section className="grid lg:grid-cols-4 gap-8 my-10">
            {
                civilManpowerServices.map((item, index) => {
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

export default CivilManpower;