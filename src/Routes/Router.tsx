import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Sekeleton from "../SiteCompos/Sekeleton";

const Router = createBrowserRouter([
    {path:"/" ,element: <Sekeleton/> , 
        children:[{path:"" , element: <Home/>}]}
])



export default  Router