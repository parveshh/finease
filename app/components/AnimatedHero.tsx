'use client'
import { useState, useEffect } from "react";

export default function AnimatedHero() {
  const [activeIndex, setActiveIndex] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // 4 seconds interval

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="flex items-center flex-col justify-center p-10 bg-zinc-200 h-[410px] rounded-lg mb-10">
      <div className="relative text-center animate-bounce ease-in-out duration-3000">
        <h1 className="md:text-5xl sm:text-2xl text-2xl font-bold text-amber-600">
          {texts[activeIndex].title}
        </h1>
        <p className="md:text-2xl sm:text-xl text-lg text-muted-foreground">
          {texts[activeIndex].description}
        </p>
      </div>
    </div>
  );
}