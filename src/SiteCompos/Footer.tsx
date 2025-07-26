const Footer = () => {
  return (
    <div className="h-[5%] fixed bottom-0 w-full z-30 flex justify-center text-zinc-500 font-dotgothic ">
        <div className="h-full w-[95%] flex justify-center"> 
           <div className=" flex-1 h-full text-sm hover:text-zinc-200  ">Kenome a Brand of Qarbona Solutions</div>         {/* do typing effect here */}
           <div className=" flex-1 flex justify-end  gap-4   ">
              <a href="" className="hover:text-zinc-200 " >docs</a><a href="">socials</a><a href=""></a>

           </div>
        </div>
      
     
    </div>
  )
}

export default Footer
