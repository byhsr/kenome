import Benefits from "../Components/Benefits"
import BlueBall from "../Components/BlueBall"
import HeroComponent from "../Components/HeroComponent"
import HowItWorks from "../Components/HowItWorks"
import Integration from "../Components/Integration"
import JoinUs from "../Components/JoinUs"
import WhyKenome from "../Components/WhyKenome"
import ComponentFooter from "../SiteCompos/ComponentFooter"



const Home = () => {



    return (
        <div className="   scroll-smooth w-full">


            <div className="bg-black
        w-full h-full realtive flex justify-center items-center fixed top-0 z-10 ">
            <BlueBall/>
        </div>

            <div className="relative z-20 w-full flex flex-col h-full">
                <div className="h-[100vh] w-full flex justify-center items-center"><HeroComponent /></div>

                {/* <div className="h-[10vh] w-[50%] self-center rounded-t-full bg-blue-800/10 backdrop-blur-2xl"></div> */}
                <div className="h-[200vh]   w-full flex justify-center items-center">
                    <WhyKenome/>
                </div>
                {/* <div className="h-[10vh] w-[50%] self-center rounded-b-full bg-blue-800/10 backdrop-blur-2xl"></div> */}
                <div className="h-[7vh]"></div>
                <div className="h-[130vh] bg-black/30     w-full flex justify-center items-center">
                   <Benefits/>
                </div>
                <div className="h-[70vh]  bg-black/30  w-full flex justify-center items-center">
                   <Integration/>
                </div>
                <div className="h-[100vh] bg-black/30  w-full flex flex-col justify-center items-center relative">
                    <HowItWorks/>
                </div>  
                <div className="h-[100vh]  w-full flex flex-col justify-between items-center relative">
                    <div className="h-[50vh] w-[80%]">
                        <JoinUs/>
                    </div>
                    <div className="h-[40vh] w-full">

                        <ComponentFooter/>
                    </div>
                   <div className="text-white/30 relative bottom-20  right-5 text-lg font-lexend">
                   <div className="text-center flex justify-center items-center gap-2 text-white/70"> <img src="/imgs/logo-purple.png" className="h-5 " alt="" /> <h2>Kenome</h2></div>
                    KenomeAI - Agentic AI for Decision Makers.
                   </div>
                </div>
            </div>


        </div>




    )
}

export default Home
