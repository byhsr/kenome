import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import SmoothScroll from "./SmoothScroll"



const Sekeleton = () => {




  return (
    <SmoothScroll >
    <div className="w-full h-screen bg-black">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
    </SmoothScroll>
    
  )
}

export default Sekeleton
