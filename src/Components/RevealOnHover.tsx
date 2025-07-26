import {motion} from 'motion/react'
import { useState } from 'react'

const RevealOnHover = ({style, children} : {style:String,  children : React.ReactNode}) => {
    const [visible , setVisible] = useState(false)
  return (
    <motion.div 
    onHoverStart={()=>setVisible(true)}
    onHoverEnd={()=>setVisible(false)}
    className={`${style}`}
    >
      {children}
    </motion.div>
  )
}

export default RevealOnHover
