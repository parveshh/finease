import AnimatedHero from "../components/AnimatedHero";

export default function Subscribe() {
    const texts = [
        {
          title: "AI-Powered Accuracy",
          description:
            "Advanced algorithms ensure every transaction is captured correctly.",
        },
        {
          title: "Supports Multiple Formats",
          description:
            "PDF files, or scanned images—our tool handles them all.",
        },
        {
          title: "Data Security Guaranteed",
          description:
            "Your financial information stays encrypted and protected.",
        },
      ];
    return (
      <AnimatedHero className="bg-gradient-to-r from-violet-600 to-indigo-600" texts={texts} />
    );
}