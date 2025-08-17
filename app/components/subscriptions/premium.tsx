"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Boxes } from "lucide-react";
import GradientButton from "../GradientButton";
import { motion } from "motion/react";

export default function Premium() {
  const navigate = () => {
    // Users now sign up for free and upgrade inside the app after login
    window.location.href = "https://app.quickextract.ai/login";
    };
    return (
        <motion.div

        initial={{ opacity: 0, y: 160 , scale: 0.85}}
        whileInView={{ opacity: 1, y: 0 , scale: 1}}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        >
        <Card className="shadow-lg motion-safe:hover:scale-105 transition-all duration-1000 ring-1 ring-amber-500/50">
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
                  250 pages per month
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
          <CardFooter className="p-5 flex flex-col items-center gap-2">
          <div className="flex items-center w-full justify-center">
              <GradientButton  className="p-6 px-20" onClick={navigate}>
                Log in to Upgrade
              </GradientButton>
            </div>
            <p className="mt-3 w-full text-center text-sm text-zinc-600 dark:text-zinc-300">
              Start on the free plan. Upgrade anytime from your dashboard.
            </p>
          </CardFooter>
        </Card>
        </motion.div>
    )
}