"use client"

import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
const CHAR_DELAY = 0.025;
const FADE_DURATION = 0.18;
const SWAP_DELAY = 5 * 1000;

interface HeroSectionProps {
    texts: {
        title: string;
        description: string;
      }[],

}

export default function HeroSection({texts}: HeroSectionProps) {

    const [titleIndex, setTitleIndex] = useState(0);

    const titles = useMemo(() => texts, [texts]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, SWAP_DELAY);

    return () => clearInterval(interval);
  }, [texts]);


    return (

        <div className="w-full md:h-[300px] h-[200px] flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 text-center">
                <TextAnimation index={titleIndex}  text={titles[titleIndex].title} />
            </h1>

            <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 1, exitBeforeEnter: true, ease: "easeInOut" }}
            className="text-sm md:text-lg font-semibold text-zinc-500 text-center"
            key={titleIndex}>
                {texts[titleIndex].description}
            </motion.p>

        </div>
    )

}


const TextAnimation = ({ text, index }: { text: string, index: number }) => {


    const parts = text.split("");
return (
    <p className="font-inherit">
        <span className="ml-3">
            {parts.map((part, idx) => (
                <motion.span
                className="relative"
                key={`${index}-${idx}-outer`}
                >
                   <motion.span
                     className="font-bold relative z-10 bg-blend-overlay"
                     key={`${index}-${idx}`}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1  }}
                     transition={{ duration: 0, ease: "easeInOut", delay: idx * CHAR_DELAY }}
                   >{part}</motion.span>
                   <motion.span
                   key={`${index}-${idx}-box`}
                   initial={{ opacity: 0 }}
                   animate={{ opacity: [0, 1,0] }}
                   transition={{ 
                    delay: idx * CHAR_DELAY,
                    duration: FADE_DURATION,
                    ease: "easeInOut",
                    times: [0, 0.08, 1]
                    }}
                   className="z-0 blur-lg absolute inset-0 left-[1px] top-[9px] bottom-[9px] bg-gradient-to-r from-amber-500 to-amber-600"/>
                </motion.span>
            ))}
        </span>
    </p>
);

}