import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileStack, ScrollText, TimerIcon } from "lucide-react";
import TextHero from "@/app/components/textHero";
import  AnimatedHero  from "@/app/components/AnimatedHero";
import { Button } from "@/components/ui/button";
// import GradientButton from "@/app/components/GradientButton";

export const metadata = {
  title: "Home",
};

export default function Home() {
    const texts = [
        {
          title: "Effortless Bank Statement to CSV Conversion",
          description:
            "Simplify your financial data management with our seamless bank statement-to-CSV conversion tool.",
        },
        {
          title: "Fast, Accurate, and Reliable",
          description:
            "Experience the future of financial data conversion with ease and precision.",
        },
        {
          title: "Join Us Today!",
          description:
            "Sign up now and start transforming your financial workflow.",
        },
      ];
  return (
    <>
    {/* <BlobHero /> */}
   <AnimatedHero texts={texts} />
      <div className="flex flex-col md:flex-row sm:flex-col justify-center  sm:w-full gap-10  w-full dark:text-zinc-200">
        <Card className="md:w-1/3">
          <CardHeader>
            <CardTitle>
              <div className="flex flex-row gap-2 items-center">
                <ScrollText size={50} className="text-amber-500" />
                <h6 className="font-semibold text-xl text-zinc-700 dark:text-zinc-200">
                  Effortless Bank Statement to CSV Conversion
                </h6>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-500 dark:text-zinc-400">
              Simplify your financial data management with our seamless bank
              statement-to-CSV conversion tool. Upload your statement in any
              supported format, and we’ll transform it into clean, organized CSV
              files ready for analysis, accounting, or reporting.
            </p>
          </CardContent>
          <CardFooter>
 
          </CardFooter>
        </Card>
        <Card className="md:w-1/3">
          <CardHeader>
            <CardTitle>
              <div className="flex flex-row gap-2 items-center">
                <FileStack size={50} className="text-amber-500" />
                <h6 className="font-semibold text-xl text-zinc-700 dark:text-zinc-200">
                  Accurate, Secure, and Fast Processing
                </h6>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-500 dark:text-zinc-400">
              Trust our platform for precision and data security. Our advanced
              parsing technology ensures accurate extraction of every
              transaction while keeping your sensitive financial information
              fully encrypted and protected.
            </p>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
        <Card className="md:w-1/3">
          <CardHeader>
            <CardTitle>
              <div className="flex flex-row gap-2 items-center">
                <TimerIcon className="text-amber-500" size={42} />
                <h6 className="font-semibold text-xl text-zinc-700 dark:text-zinc-200">
                  Save Time, Boost Productivity
                </h6>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-500 dark:text-zinc-400">
              Eliminate manual data entry and reduce errors. Whether you’re a
              finance professional, accountant, or business owner, our automated
              conversion tool saves hours, letting you focus on what matters
              most—growing your business.
            </p>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
      <div className="w-full flex flex-col justify-center items-center pt-10 dark:text-zinc-200">
      Managing financial data shouldn’t be a hassle. Our AI-powered platform effortlessly converts your bank statements into clean, accurate CSV files in seconds. Whether you’re an accountant, financial analyst, or business owner, simplify your workflow and eliminate tedious manual data entry.
        <TextHero text="Empower Your Financial Insights – Start Converting Today!" />
        <Button className="bg-gradient-to-r from-indigo-500 via-purple-600  to-pink-500">Convert Now</Button>
      </div>
    </>
  );
}
