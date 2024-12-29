import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dock, FileStack, ScrollText, TimerIcon } from "lucide-react";
import TextHero from "../components/textHero";
import  AnimatedHero  from "../components/AnimatedHero";

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
   <AnimatedHero/>
      <div className="flex md:flex-row sm:flex-col sm:items-center sm:w-full gap-10 justify-start w-full">
        <Card className="md:w-1/3">
          <CardHeader>
            <CardTitle>
              <div className="flex flex-row gap-2 items-center">
                <ScrollText size={50} className="text-amber-500" />
                <h6 className="font-semibold text-xl text-zinc-700">
                  Effortless Bank Statement to CSV Conversion
                </h6>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-500">
              Simplify your financial data management with our seamless bank
              statement-to-CSV conversion tool. Upload your statement in any
              supported format, and we’ll transform it into clean, organized CSV
              files ready for analysis, accounting, or reporting.
            </p>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
        <Card className="md:w-1/3">
          <CardHeader>
            <CardTitle>
              <div className="flex flex-row gap-2 items-center">
                <FileStack size={50} className="text-amber-500" />
                <h6 className="font-semibold text-xl text-zinc-700">
                  Accurate, Secure, and Fast Processing
                </h6>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-500">
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
                <h6 className="font-semibold text-xl text-zinc-700">
                  Save Time, Boost Productivity
                </h6>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-500">
              Eliminate manual data entry and reduce errors. Whether you’re a
              finance professional, accountant, or business owner, our automated
              conversion tool saves hours, letting you focus on what matters
              most—growing your business.
            </p>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
      <div className="w-full flex flex-col justify-center items-center pt-10">
      Managing financial data shouldn’t be a hassle. Our AI-powered platform effortlessly converts your bank statements into clean, accurate CSV files in seconds. Whether you’re an accountant, financial analyst, or business owner, simplify your workflow and eliminate tedious manual data entry.
        <TextHero text="Empower Your Financial Insights – Start Converting Today!" />
        <Button variant={"outline"}>Get Started</Button>
      </div>
    </>
  );
}
