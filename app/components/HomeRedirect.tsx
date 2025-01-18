"use client"

import { Button } from "@/components/ui/button"
import TextAnimation from "./TextAnimation"
import TextHero from "./textHero"
import { useRouter } from "next/navigation";

export default function HomeRedirect() {

    const router = useRouter();

    const navigation = () => {
        router.push("/subscribe");
    };

    return (
        <>
        <TextHero>
        <TextAnimation text="Empower Your Financial Insights – Choose Your Plan!" />
      </TextHero>
      <Button
        className="p-6 text-white bg-gradient-to-r from-indigo-500 via-purple-600  to-pink-500 text-lg font-semibold hover:bg-gradient-to-r hover:scale-110 hover:border-2 hover:border-pink-500 transition-all duration-300 ease-in-out"
        onClick={navigation}
      >
        Convert Now
      </Button>
      </>
    )
}