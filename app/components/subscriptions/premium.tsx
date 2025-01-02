"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Boxes } from "lucide-react";
import GradientButton from "../GradientButton";
import { motion } from "motion/react";

export default function Premium() {
    return (
        <motion.div
           className="flex-1"
        initial={{ opacity: 0, y: 160 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        >
        <Card className="shadow-lg flex-1">
          <CardHeader>
            <CardTitle>
              <div className="flex flex-row gap-2 items-center w-full justify-between">
                <h6 className="font-semibold text-2xl text-zinc-700 text-center dark:text-zinc-200">
                  Premium
                </h6>
                <Boxes size={40} className="text-zinc-500 dark:text-zinc-200" />
              </div>
              <CardDescription>
                <p className="text-lg text-zinc-500 dark:text-zinc-200">
                  300 pages per month
                </p>
              </CardDescription>
            </CardTitle>
          </CardHeader>
            <CardContent className="border-b">
              <div className="flex flex-row gap-2 text-5xl font-bold items-end w-full h-[100px] justify-items-end">
                $25{" "}
                <span className="text-lg text-zinc-700 text-center dark:text-zinc-200">
                  per month
                </span>
              </div>
            </CardContent>
          <CardFooter className="p-5">
          <div className="flex items-center w-full justify-center">
              <GradientButton  className="p-6 px-20">
                Get Premium
              </GradientButton>
            </div>
          </CardFooter>
        </Card>
        </motion.div>
    )
}