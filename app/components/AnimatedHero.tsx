'use client'
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface AnimatedHeroProps {
  texts: {
    title: string;
    description: string;
  }[];
  className?: string;
}

export default function AnimatedHero({ texts, className }: AnimatedHeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);


 

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // 4 seconds interval

    return () => clearInterval(interval);
  }, [texts]);

  
    
  return (
    <div className= {cn("flex items-center flex-col justify-center shadow-zinc-400  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 h-[350px] rounded-lg mb-10",className)}>
      <div className="relative text-center animate-bounce ease-in-out duration-3000 p-10">
        <h1 className="md:text-4xl sm:text-xl text-2xl transition-all border-x-pink-50  font-bold text-white animate-in fade-in zoom-in">
          {texts[activeIndex].title}
        </h1>
        <p className="md:text-2xl sm:text-xl text-sm transition-all text-white">
          {texts[activeIndex].description}
        </p>
      </div>
    </div>
  );
}