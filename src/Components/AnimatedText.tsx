import type {  Variants} from "motion/react";
import { motion } from "motion/react";

type AnimatedTextProps = {
  text: string;
};

const container : Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03, // delay between each word
    },
  },
};

const word : Variants = {
  hidden: { y: -2, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const AnimatedTextWords = ({ text }: AnimatedTextProps) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      style={{ display: "flex", flexWrap: "wrap", gap: "0.4ch" }}
    >
      {text.split(" ").map((wordStr, index) => (
        <motion.span
          key={index}
          variants={word}
         
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {wordStr}
        </motion.span>
      ))}
    </motion.div>
  );
};











export const AnimatedText = ({ text }: { text: string }) => {

    return (
      <span>
  {[...text].map((letter, index) => (
    <motion.span
      key={index}
      style={{ display: "inline-block" }}
    
      initial={{y:-3 , opacity:0}}
      animate={{y:0, opacity:1 , transition:{ ease: "easeIn",  duration: 0.2, delay: index * 0.01 }}}
     
      exit={{y: -4, opacity: 0}}
    //   transition={}
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  ))}
</span>

    )

}
