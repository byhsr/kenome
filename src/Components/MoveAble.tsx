import { useEffect, useRef, useState } from "react";


const MoveAble = ({ src, style }: { src: string; style: string }) => {

    const ref= useRef<HTMLImageElement | null >(null)
  const [move, setMove] = useState({ x: 0, y: 0 });
 

  useEffect(() => {
    if(!ref.current) return
    // const rect =  ref.current.getBoundingClientRect()
    const handleMouseMove = (e: MouseEvent) => {
      setMove({x:e.clientX , y:e.clientY})
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (

    <img ref={ref} style={{transform: `translateX(${move.x}px)`}} src={src} className={style} />
   
  );
};

export default MoveAble;
