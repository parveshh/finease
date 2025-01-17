"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Package } from "lucide-react";
import { motion } from "motion/react";

export default function Standard() {
    return (
        <motion.div

        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", ease: "easeInOut" }}
        >
        <Card className="shadow-lg motion-safe:hover:scale-105 transition-all duration-1000">
          <CardHeader>
            <CardTitle>
              <div className="flex flex-row gap-2 items-center w-full justify-between">
                <h6 className="font-semibold text-2xl text-zinc-700 text-center dark:text-zinc-200">
                  Standard
                </h6>
                <Package size={40} className="text-zinc-500 dark:text-zinc-200" />
              </div>
              <CardDescription>
                <p className="text-lg text-zinc-500 dark:text-zinc-200">
                  100 pages per month
                </p>
              </CardDescription>
            </CardTitle>
            </CardHeader>
            <CardContent className="border-b">
              <div className="flex flex-row gap-2 text-5xl font-bold items-end w-full h-[100px] justify-items-end">
                $15{" "}
                <span className="text-lg text-zinc-700 text-center dark:text-zinc-200">
                  per month
                </span>
              </div>
            </CardContent>
            <CardFooter className="p-5">
            <div className="flex items-center w-full justify-center">
              <Button size="lg" variant="default" className="p-6 px-20">
                Get Standard
              </Button>
            </div>
            </CardFooter>
        </Card>
        </motion.div>
    )
}