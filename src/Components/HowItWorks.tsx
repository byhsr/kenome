
import ComeUp from "./ComeUp"

import { motion } from "motion/react"

const HowItWorks = () => {

  //  bg-[linear-gradient(to-right,_#1e3a8a,_#000000)]
  return (
    <div className="h-full w-full   px-40 p-8 flex  items-start">


 


      <div className="flex w-full h-[70%] flex-col items-center gap-15  rounded-2xl p-3">
        <motion.p 
        initial={{y:25}}
        whileInView={{y:0, color: "white"}}
        transition={{ duration:0.5}}
        className="text-4xl font-lexend  text-zinc-400">Super Easy To Get Started.</motion.p>

         <div className="flex w-full h-full ">
       

           <div className=" w-[50%] h-full r0ounded-2xl p-5 flex  flex-col items-center ">

          <ComeUp style="h-70 w-80 shadow-xl p-[1px] z-5  relative  pb-3  bg-zinc-800 backdrop-blur-2xl rounded-2xl ">
            <div className="flex justify-center items-center w-full h-[60%]  rounded-2xl shadow shadow-amber-50/10  backdrop-blur-2xl">
              <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-2xl">
                <source src="/imgs/blue.webm" type="video/webm" /> </video>
            </div>
            <div className="h-[30%] w-full px-3 flex items-center gap-2">
              <img src="/imgs/peeps.svg" className="h-5 w-5" alt="" />
              <p className="text-lg font-mono text-zinc-300">Set Up Your Team Workspace</p></div>
          </ComeUp>

          <ComeUp style="h-70 w-80 shadow-xl p-[1px] z-5 shadow relative  pb-3  bg-zinc-800
       backdrop-blur-2xl rounded-2xl ">
            <div className="flex justify-center  bg-cover items-center w-full h-[50%]   rounded-2xl shadow shadow-amber-50/10  backdrop-blur-2xl">
              <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0 rounded-2xl">
                <source src="/imgs/yello1.webm" type="video/webm" /></video>
            </div>
            <div className="h-[50%] w-full px-3 flex  p-1  items-center gap-2"><img src="/imgs/data.svg" className="h-5 w-5" alt="" />
              <p className="text-xl font-mono text-zinc-300">Connect Data Sources</p></div>
          </ComeUp>




        </div>

            <div className="w-[40%] h-[95%] flex justify-center items-center rounded ">
              {/* <GlowlyBox> */}
                <ComeUp style="h-70 w-80 shadow-xl p-2 z-35 shadow relative    bg-zinc-200
       backdrop-blur-2xl rounded-2xl ">

          <div className="h-full w-full px-3 rounded-2xl flex flex-col items-center justify-center">
            <p className="font-mono text-2xl h-[60%] flex border border-dashed rounded  items-center text-center justify-center">Build Your First Agent</p>
            <div className="h-[30%]  flex items-end justify-center gap-2">
              <button className="bg-zinc-900 rounded px-5 py-2 text-white font-mono text-[10px]">Browse Templates</button>
              <button className="bg-zinc-900 rounded px-3 py-2 text-white font-mono text-[10px]">Create New Agent</button>
              
              </div>
          </div>
        </ComeUp> 
        
              {/* </GlowlyBox> */}
           </div>
         </div>
        

        


      </div>

    </div>
  )
}

export default HowItWorks
