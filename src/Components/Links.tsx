import { Link } from "react-router-dom"
import {motion} from "motion/react"

const Links = ({to, children} :{to:string , children: string}) => {



  return (
    <motion.div
    
    initial={{y:5, opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{ ease: "easeInOut" , duration:0.3, delay:0.3}}
    
    >
  <Link 
  
  to={to} className="text-sm text-amber-50/70 hover:text-amber-50 hover:p-2 transition-all ease-in-out duration-200 font-lexend">{children}</Link >
  </motion.div>
  )
}

export default Links
