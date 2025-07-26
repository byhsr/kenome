

const JoinUs = () => {
    return (
        <div className="w-full h-full  flex justify-center items-center">
            <div className="w-[60%] h-full relative   flex flex-col justify-start items-center rounded-2xl">

                <div className="absolute top-3 left-3 bg-amber-50 rounded-3xl  px-7 py-2  ">
                    <span className="text-[35px] absolute bottom-3 left-3 animate-pulse text-green-500">.</span>
                    <span className="font-dotgothic ml-5 text-zinc-700 relative z-10 ">Coming Soon

                    </span>
                    {/* <video src="/imgs/joinus.webm" autoPlay loop muted className="rounded-3xl absolute top-0 object-cover z-0 h-full w-full">
               </video> */}
                </div>
                {/* border-blue-900 border bg-white/10 backdrop-blur-2xl */}
                <div className=" h-50 w-[90%] rounded-4xl flex flex-col justify-center items-center space-y-2 relative">
                    <div className="h-[50%]"></div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        className="w-full  px-5 py-3 rounded-xl
             bg-transparent
            
             text-white placeholder:text-amber-50  palceholder:decoration-dotted underline decoration-dotted
             font-lexend font-light
             focus:outline-none 
             transition-all duration-300"
                    />
                    <div className="bg-white/10 backdrop-blur-2xl relative flex flex-col justify-center h-30  z-10  w-[96%]  bg-clip-content rounded-3xl">

                        <button className="bg-amber-50 px-12 w-[70%] group hover:w-[80%] transition-all ease-in-out duration-350 relative z-10 font-mono self-end py-5 mr-3 rounded-3xl ">
                            <span className="absolute text-black left-0 ml-3 rotate-32 group-hover:rotate-0 group-hover:-translate-y-5  translate-y-5 group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-400"><svg
                                className="w-6 h-6 text-lime-400"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                            </svg></span>
                            Join Waitlist</button>
                        <video src="/imgs/joinus.webm" autoPlay loop muted className="rounded-3xl absolute top-0 object-cover z-0 h-full w-full">
                        </video>
                    </div>


                </div>
                <p className="text-amber-50 text-[10px] font-lexend">* Special Offers for People in Waitlist * </p>
            </div>
        </div>
    )
}

export default JoinUs
