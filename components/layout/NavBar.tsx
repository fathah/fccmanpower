"use client";

const NavBar = () => {

    const ITEMS = [
        {name:"Home", to:"/"},
        {name:"About Us", to:"/about"},
        {name:"Services", to:"/services"},
        {name:"Contact Us", to:"/contact"},
    ];
    return (
        <nav className="bg-gbg py-5 w-full ">
            <div className="commonwidth flex justify-between items-center">
            <img src="/images/icon-w.png" className="h-12" alt="" />
            <div>
            {
                    ITEMS.map((item, index) => {
                        return (
                            <a href={item.to} key={index} className="text-white mx-3 hover:text-primary">{item.name}</a>
                        );
                    })
                }
            </div>
            </div>
           
        </nav>
    );
}

export default NavBar;