import TextHero from "../components/textHero";
import Free from "../components/subscriptions/free";
import Standard from "../components/subscriptions/standard";
import Premium from "../components/subscriptions/premium";
import TextAnimation from "../components/TextAnimation";
import HeroSection from "../components/subscriptions/HeroSection";

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
      <HeroSection texts={texts} />
      <TextHero>
        <TextAnimation text="Lets Get Started – Choose Your Plan!" />
      </TextHero>
      <div className="flex flex-col md:flex-row justify-evenly transition-all duration-300 gap-5">
        <Free/>
        <Standard />
        <Premium />
      </div>
    </div>
  );
}
