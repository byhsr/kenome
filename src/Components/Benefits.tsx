
import './Styles.css'

const Benefits = () => {
  return (
    <div className=" h-full w-full flex justify-center items-center ">

      <div className="w-[90%] h-[90%] flex flex-col items-center justify-between  ">
          <h3 className="text-3xl font-lexend text-white">Benefits</h3>

          <div className="h-[90%] w-[95%] flex flex-col justify-end gap-5   items-center  rounded-2xl ">

            <div className="benefit-grid flex  rounded-xl h-full w-full gap-3 font-lexend p-1">

               <div className="  item-1 rounded text-white/70 flex flex-col shadow-2xl justify-around  bg-zinc-900 hover:ring-1 p-4  
               hover:scale-102 hover:ring-blue-800/50 transition-all ease-in-out duration-200 ">
                 <h5 className="text-[13px] text-white">Save Hours Every Week</h5>
                 <p className=""> Automate and Streamline your Enterprise Workflows</p>
                 
               </div>
               <div className="  item-5 p-2 rounded flex flex-col justify-around shadow-2xl  bg-zinc-900 hover:ring-1 hover:scale-102 hover:ring-blue-800/50 transition-all ease-in-out duration-200">
                <h5 className=" text-white">Drag and Drop Builder</h5>
                <p className="text-white/70 text-[12px]">Launch role-specific agents in minutes zero code, zero IT tickets</p>
               </div>


               <div className="  item-3 rounded bg-zinc-900 p-2 py-5 flex flex-col justify-around  hover:ring-1 hover:scale-102 hover:ring-blue-800/50 transition-all ease-in-out duration-200">
            
                <div className="h-[60%] px-2">
                  <h5 className="text-[14px] text-white   ">Access Your Business Knowledge in Seconds</h5>   
                </div>
                  
                  <div className="h-[30%] flex flex-col items-end ">
                 <p className="text-6xl font-dotgothic text-green-500 text-center px-3">36<span className=" text-sm"> hours</span></p>
                 <p className="text-[10px] self-end text-white/60 px-5 text-center">saved every Week</p>
              
               
               </div>
               
               </div>
               <div className="  item-6 rounded bg-zinc-900 p-2 flex flex-col  justify-around hover:ring-1 hover:scale-102 hover:ring-blue-800/50 transition-all ease-linear duration-300">
                <h6 className="text-white"> Enterprise-grade security baked in—no compromises.</h6>
                <p className="text-white/70 text-[12px] ">Move fast. Stay secure. RBAC, encryption, audit trails, and full visibility—built in.</p>
               </div>

               <div className="  item-4 rounded bg-zinc-900 hover:ring-1 relative flex justify-center items-center
               p-3 hover:scale-102 hover:ring-blue-800/50 transition-all ease-in-out duration-200">
               <img src="/imgs/Vectorwarning.svg" alt="flagging issues image vector" className="h-[12%] animate-bounce absolute top-4 left-3"/>
               <p className="text-white/80 text-center   flex justify-center items-center h-[90%] rounded w-[90%] font-mono">Issues Flagged Before they become problems</p>
               </div>

               <div className="  item-2 rounded p-2 py-5 flex flex-col justify-around bg-zinc-900 hover:ring-1 hover:scale-102 hover:ring-blue-800/50 transition-all ease-in-out duration-200">
               
              <div className="h-[60%] px-2">
                  <h5 className="text-[14px] text-white   ">Live Dashboards Helpful Insights</h5>   
                </div>
                  
                  <div className="h-[30%] flex flex-col items-end ">
                 <p className="text-6xl font-dotgothic text-green-500 text-center px-3">40<span className=" text-lg"> %</span></p>
                 <p className="text-[10px] self-end text-white/60 px-5 text-center">faster decisions</p>
              
               
               </div>
               
               </div>






               <div className="  item-7 rounded p-2  relative flex flex-col justify-around items-center   hover:scale-102 transition-all ease-in-out duration-200">
               
               <div className=" backdrop-blur-[60px]  bg-white/40 rounded-2xl relative z-10 h-[90%] flex flex-col gap-2 p-2 w-full shadow-[0_0_10px_#ccff00] ">
                <h5 className="text-[18px]   bg-white/40 w-full h-[20%]  rounded-3xl  flex items-center justify-center p-2 relative  text-zinc-700">Deploy Solutions Rapidly With Templates</h5>
                <div className="h-[80%] rounded-2xl   w-full flex gap-4 pt-1 p-2">

                  <div className="flex flex-col w-[50%] gap-3 ">

                     <div className="  bg-white/40 rounded-3xl flex flex-col border pt-2 border-zinc-300 h-full text-zinc-700">
                     <div className="text-lg h-[70%]  flex flex-col justify-center gap-2  px-4 ">
                      <img src="/imgs/bl-t.svg" className="max-h-[30%] opacity-25 self-start " alt="" />
                      <h6>Prebuilt <span className="block">Templates</span></h6>
                       </div>
                      <p className="text-[10px] h-[30%]  px-4">Choose from a collection of ready to use templates to jumpstart your workflow</p> 
                     </div>
                     
                    
                  </div>
                      
                      <div className="flex-1 bg-white/40  rounded-3xl justify-between pt-2 flex flex-col border border-zinc-300  h-full text-zinc-700">
                      <div className="text-lg h-[70%]  flex flex-col justify-center gap-2 px-4 ">
                        <img src="/imgs/bl-c.svg" className="h-[30%] self-start " alt="" />
                        <h6>Your Existing Workflows</h6>
                        </div>
                      <p className="text-[10px] h-[30%]  px-4">Choose from a existing flows to edit as a copy</p></div>
                       
                </div>
               </div>
               <video src="/imgs/green.webm" autoPlay loop muted className="rounded-3xl absolute object-cover z-0 h-full w-full">
               </video>
               </div>

               {/* item7 ends here */}
               
            </div>

        2   


          </div>


      </div>
    </div>
  )
}

export default Benefits
