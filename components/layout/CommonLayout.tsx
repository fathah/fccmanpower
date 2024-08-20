import Footer from "./Footer";
import NavBar from "./NavBar";

const CommonLayout = (props:any) => {
    return (
        <div className="">
            <NavBar/>
            
            <main className="min-h-screen overflow-x-hidden">
                {props.children}
            </main>
            <Footer/>
        </div>
    );
}

export default CommonLayout;