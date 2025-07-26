import {motion, useMotionValueEvent, useScroll} from "motion/react"
import BenefitLists from "./Data/BenefitLists"
import { useRef, useState } from "react"
import{ AnimatedTextWords, AnimatedText } from "./AnimatedText"


const WhyKenome = () => {
  

    const ref = useRef<HTMLDivElement | null>(null)
    const {scrollYProgress}  = useScroll({target:ref})
    const [feature, setFeautre] =  useState(0)

    useMotionValueEvent(scrollYProgress , "change" , latest => {
         if(latest > 0.35 && latest <0.9){setFeautre(1)}
         else if(latest > 0.9){setFeautre(2)}
         else{setFeautre(0)}
        console.log(feature)
    
    })
      
   const getTitle : {[key:number]: string} = {
    0: "Do Less. Achieve More.",
    1: "One Search. Total Clarity.",
    2: "Think It. Drag It. Launch It."
   }

   const getBenefit :{[key:number]:string} = {
     0: "Automate daily ops tasks and approvals—save 8–10 hours a week.",
    1: "Search across every tool and doc—get answers in seconds.",
    2:  "Build and launch workflows without touching code."
   }

   const colors :{[key:number]:string} = {0:"blue" , 1:"green" , 2:"amber"}
    const color = colors[feature]
   const title = getTitle[feature] 
   const benefit = getBenefit[feature]
   const topic = BenefitLists[feature]
   const fltrTopic = topic.filter((_ , idx, arr)=>(idx !== arr.length-1 ))

  return (
    <div className="  w-full bg-transparent h-full flex justify-center items-center">

      <motion.div 
      ref={ref}
      className="w-[80%] h-[200vh]  rounded-2xl flex flex-col gap-15 relative ">

       <div className="w-full h-auto flex flex-col gap-2 sticky top-25">

        <div className="w-full h-100  flex gap-2 relative">

            <div className="flex-2 flex  flex-col justify-around p-6 m-2 relative z-10  ring-1 ring-blue-300/40 rounded-2xl bg-white/10 backdrop-blur-2xl font-lexend text-zinc-100/80">
                <h2 className={` text-3xl   rounded-2xl hover:p-1 transition-all ease duration-150 `}>
               
                 <p className={`bg-${color}-500/20  hover:scale-102 rounded-2xl py-2 pl-3 transition-all ease duration-150`}> { <AnimatedTextWords key={topic[topic.length - 1]} text={topic[topic.length - 1]}/>}</p>
                
                </h2> 
             
                <ul className=  "text-zinc-100/70 text-[16px] space-y-2 pl-5" >
                         
                         {
                         
                         fltrTopic.map((el , idx)=>(
                          
                          <li className="hover:bg-black/40 rounded-2xl text-mono hover:p-2 transition-all ease duration-150" key={idx}><AnimatedTextWords key={el} text={el}/></li>
                         )

                         )}
        
                </ul>
                
            </div> 
            
           <div className="flex-1  relative flex p-2">
            <div className={` bg-white/20 w-full h-full relative flex ${feature === 0? "px-2" : "px-11"} text-center justify-center items-center text-5xl text-white  transition-all ease duration-150  rounded-2xl z-10`}>
             <AnimatedText key={title} text={title} />
             </div>
           
             <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-2xl">
                <source src="/imgs/yello1.webm" type="video/webm" /></video>
           </div>

         </div>

          <div className="relative z-10 h-15 w-full hover:scale-102 transition-all ease-in duration-200 rounded-2xl flex justify-center 
          hover:bg-blue-400/10 hover:shadow-[0_0_60px_#93c5fd]/5 items-center bg-white/10 backdrop-blur-2xl">
          {/* <span className="font-dotgothic text-green-400/30 text-[25px] blur-[1px] top-2 left-3 animate-bounce absolute  ">+</span> */}
          <span className={`font-dotgothic text-green-400 text-[20px] blur-[1px] top-2 left-3 animate-bounce absolute `}>+</span>
          <span className="font-dotgothic text-green-400 text-[15px] blur-[1px] bottom-2 right-3 animate-bounce absolute ">+</span>
              <h5 className="text-lg font-mono text-white/70 "><AnimatedText key={benefit} text={benefit}  /></h5>
          </div>

       </div>
      


         


      
        
        </motion.div>
    </div>
  )
}

export default WhyKenome
