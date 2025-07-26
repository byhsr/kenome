import {motion, useScroll, useTransform , useSpring , useMotionTemplate, useMotionValueEvent} from "motion/react"
import { useState } from "react"


const BlueBall = () => {
 const {scrollYProgress} = useScroll()
 const [animate , setAnimate] = useState(false)

 useMotionValueEvent( scrollYProgress , "change"  , latest =>  latest>0.9? setAnimate(true) : setAnimate(false))


 const opacity = useTransform(scrollYProgress, [0,0.1] , [1,0.9])
const rawY = useTransform(scrollYProgress, [0, 0.1], [0, 200])
const y = useSpring(rawY, { stiffness: 100, damping: 5 })
 const x = useTransform(scrollYProgress, [0,0.1] , [0,-30])

const rawScale = useTransform(scrollYProgress, [0,1] , [1,0.5])
 const scale =  useSpring(rawScale,{stiffness:100})

 console.log(animate)
  return (

   <motion.div 
   style={{
    opacity, 
    y, scale, x
  // , transform: rotateStyle 
  }}
 
   className={`h-[80%] w-[80%] rounded-full backdrop-blur-2xl ${ animate? "animate-pulse" : ""} relative blur-3xl 
   bg-[radial-gradient(circle_at_center,_#1e3a8a,_#111827,_#000000)] `}>
   {/* <p className="text-white text-3xl absolute top-0">Kenome Ai</p> */}
   </motion.div>
  )
}

export default BlueBall
