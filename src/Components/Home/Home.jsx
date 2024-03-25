import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer";



function Home() {
    return (
        <div>
            <div className="h-16 bg-gray-200"> 
            <Navbar></Navbar></div>
            <div className="flex justify-center items-center min-h-[calc(100vw-135px)] bg-neutral-300">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Home
