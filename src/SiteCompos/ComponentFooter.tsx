import Links from "../Components/Links"


const ComponentFooter = () => {
  return (
    <div className="w-full h-full  flex justify-between p-2 ">
      <div className="w-[30%]  h-full p-3 ">
        <Links to="/" >Blogs</Links>
        <Links to="/" >Security</Links>
        <Links to="/" >Changelog</Links>
        <Links to="/" >Privay Policy</Links>
        <Links to="/" >Terms of Service</Links>
      </div>
      <div className="w-[30%] h-full  flex flex-col items-end text-white p-3">
       <p className="font-lexend text-xl ">Connect With Us</p>

       <div className="font-mono text-[12px]">
             <p >Gurugram, Haryana, India</p>
             <p >connect@kenome.ai</p>
             <p >+91-9220711290</p>
       </div>
       
      
      </div>
    </div>
  )
}

export default ComponentFooter
