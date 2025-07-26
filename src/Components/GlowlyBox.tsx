import {motion} from 'motion/react'
const GlowlyBox = ({children}:{children : React.ReactNode}) => {
  return (
     <motion.div 
     whileHover={{x:5}}
     transition={{type:'tween' , duration:0.3}}
     className="w-full h-full rounded-2xl flex gap-5 bg-gradient-to-bl from-blue-100 via-blue-200 to-blue-400  p-3 pb-5">
          <div className="w-full h-full rounded-2xl p-4 flex gap-5 bg-white/40 backdrop-blur-2xl shadow-[0_0_60px_#93c5fd]" >
           {children}
          </div>
          </motion.div>
  )
}

export default GlowlyBox
