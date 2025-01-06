"use client"
import { motion } from "motion/react";

interface TextAnimationProps {
    text: string;
}
export default function TextAnimation({ text }: TextAnimationProps) {
    const parts = text.split(" ");
    return (
     
    <div>
                {parts.map((part, index) => (
                    <motion.span
                        className="text-4xl font-bold"
                        key={`${index}-${part}`} 
                        data-index={index}
                        initial={{ opacity: 0, y: 120 }}
                        animate={{ opacity: 1, y: 0,  }}
                        transition={{ duration: 1, ease: "easeInOut", repeat: 0, repeatDelay: 0, delay: index * 0.09 }}
                    >
                        {part}{" "}
                    </motion.span>
                ))}
           
        </div>
    );
}