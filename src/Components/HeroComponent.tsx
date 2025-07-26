

const HeroComponent = () => {
  return (
     <div className=" lg:h-[80%] lg:w-[80%] w-full h-full flex flex-col p-5 items-center justify-center">

                <div className="h-[70%] w-[80%]  flex flex-col  space-y-6 items-center justify-center  font-lexend text-white">
                    <h1 className="lg:text-5xl text-3xl  ">Agentic AI For Decision Makers</h1>
                    <div className="  lg:h-[40%] w-[60%] flex flex-col justify-start text-center text-sm lg:text-xl text-zinc-200">
                        <p>AI-Driven Agents, Rich Analytics, Instant Knowledge Search, and Powerful Visuals—Empowering Makers to Turn Data Into Action.</p>
                        <p></p>
                    </div>


                </div>
               



                <div className="h-[30%] w-full   flex items-start justify-center">
                    
                    
                        <button className=" w-[60%] lg:w-[30%] h-[30%] bg-gradient-to-br from-blue-200 hover:scale-95 to-blue-300 shadow-[0_0_60px_#93c5fd] text-zinc-800 hover:bg-white hover:text-black transition-all ease duration-200 backdrop-blur-2xl   rounded">join the waitlist</button>
                
                    
                </div>


            </div>
  )
}

export default HeroComponent
