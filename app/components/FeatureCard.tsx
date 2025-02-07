"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileHeart } from "lucide-react";
import { motion } from "motion/react";

interface FeatureCardProps {
    title: string;
    children : React.ReactNode;
}

export default function FeatureCard({ title, children }: FeatureCardProps) {
    return (
        <motion.div initial={{ opacity: 0, y: 20, scale: 0.85 }} whileInView={{ opacity: 1, y: 0, scale: 1 }}  transition={{ duration: 0.5 }} className="max-w-xl min-h-[300px] relative">
    
    <div className="border-animate-light dark:border-animate w-full h-full">
        <Card className="shadow-none motion-safe:hover:scale-105 transition-all duration-1000 w-full h-full">
            <CardHeader>
            <CardTitle>
                <div className="flex flex-row gap-2 items-center text-2xl w-full justify-between">
                
                {title} 
                <motion.span  initial={{ rotate: 40 }} animate={{ rotate: 0 }}  whileHover={{ rotate: 45 }} transition={{ duration: 0.5 }} >
                    <FileHeart className="text-amber-500 dark:text-teal-200 w-10 h-10" />
                </motion.span>
                
                </div>
            </CardTitle>
            </CardHeader>
            <CardContent>
            <div className="flex flex-row gap-2 items-center text-lg w-full">
                {children}
    
            </div>
            </CardContent>
        </Card>
        </div>
      </motion.div>
    );
}