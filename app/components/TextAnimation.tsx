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
                        key={index}
                        initial={{ opacity: 0, y: 120 }}
                        animate={{ opacity: 1, y: 0,  }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1, ease: "easeInOut", repeat: 2, repeatDelay: 2, delay: index * 0.1 }}
                    >
                        {part}{" "}
                    </motion.span>
                ))}
           
        </div>
    );
}