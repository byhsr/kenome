import { motion } from "motion/react"

const ComeUp = ({style , children} : {style:string , children : React.ReactNode}) => {
  return (
        <motion.div
    initial={{y:-30 }}
    whileHover={{ y:-5 , transition:{type: "tween" , duration:0.3, ease :"easeInOut"}}}
    whileInView={{y:0 ,  rotate:0 , opacity:1, scale:1.1}}
    transition={{   type: "spring" , stiffness:100, damping:15 , delay:0.3 }}
    className={` ${style}`}
    >
      {children}
    </motion.div>
  )
}

export default ComeUp


