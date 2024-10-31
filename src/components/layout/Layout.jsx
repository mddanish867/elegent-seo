import { Outlet } from "react-router-dom"; 
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
     <Navbar/>
      <div className="md:container">
        <Outlet />  
      </div>
     <Footer/>
    </div>
  )
}

export default Layout