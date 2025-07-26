import MoveAble from "./MoveAble"


const Integration = () => {
  return (
    <div className='flex justify-center items-center relative w-full h-full'>

            {/* <img src="imgs/notion.png" className="absolute top-4 left-70 rotate-5 h-10 animate-bounce" alt="" /> */}
            <MoveAble src="imgs/notion.png" style="absolute top-4 left-70 rotate-5 h-10 animate-bounce" />
            <img src="imgs/asana.svg" className="absolute top-54 left-30 rotate-5 h-8 animate-bounce" alt="" />
            <img src="imgs/github.png" className="absolute bottom-24 right-40 rotate-5 h-10 animate-bounce" alt="" />
            <img src="imgs/slack.png" className="absolute top-10 right-80 rotate-5 h-10 animate-bounce" alt="" />
            <img src="imgs/confu.avif" className="absolute top-1 right-150 rotate-5 h-7 animate-bounce" alt="" />


        <div className="font-lexend w-[60%] h-[40%] flex flex-col items-center gap-5">
           <h4 className="text-white text-3xl text-center">Connect Your Enterprise Systems Seamlessly</h4>
           <p className="text-white/70 w-[80%] text-center">Eliminate data silos and costly delays—our bi-directional connectors align your tools, teams, and decisions in real time.</p>
        </div>
      
    </div>
  )
}

export default Integration
