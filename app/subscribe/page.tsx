
import AnimatedHero from "../components/AnimatedHero";
import TextHero from "../components/textHero";
import Free from "../components/subscriptions/free";
import Standard from "../components/subscriptions/standard";
import Premium from "../components/subscriptions/premium";
import TextAnimation from "../components/TextAnimation";

export default function Subscribe() {
  const texts = [
    {
      title: "AI-Powered Accuracy",
      description:
        "Advanced algorithms ensure every transaction is captured correctly.",
    },
    {
      title: "Supports Multiple Formats",
      description: "PDF files, or scanned images—our tool handles them all.",
    },
    {
      title: "Data Security Guaranteed",
      description: "Your financial information stays encrypted and protected.",
    },
  ];
  return (
    <div className="flex flex-col">
      <AnimatedHero
        className="bg-gradient-to-b from-[#db2777] via-[#ef4444] to-[#f97316]"
        texts={texts}
      />
      <TextHero>
        <TextAnimation text="Empower Your Financial Insights – Choose Your Plan!" />
      </TextHero>
      <div className="flex flex-col md:flex-row justify-evenly transition-all duration-300 gap-5">
        <Free/>
        <Standard />
        <Premium />
      </div>
    </div>
  );
}
