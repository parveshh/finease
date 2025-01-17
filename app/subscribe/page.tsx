import TextHero from "../components/textHero";
import Free from "../components/subscriptions/free";
import Standard from "../components/subscriptions/standard";
import Premium from "../components/subscriptions/premium";
import TextAnimation from "../components/TextAnimation";
import HeroSection from "../components/subscriptions/HeroSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Free/>
        <Standard />
        <Premium />
      </div>
      <div className="flex flex-col mt-10 transition-all duration-300 gap-5">
        <h2 className="text-3xl font-bold text-neutral-500 text-left">
        Frequently Asked Questions?
        </h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left text-2xl font-semibold">Is it free to use?</AccordionTrigger>
            <AccordionContent className="text-left text-lg">We offer a free plan for you to try out our service. You can always upgrade to a paid plan later.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left text-2xl font-semibold">How does the data extraction process work?</AccordionTrigger>
            <AccordionContent className="text-left text-lg">
            We offer two parsers to process your files. Since documents can vary in structure, one parser might deliver better accuracy than the other. You can choose to download the version that best suits your requirements.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left text-2xl font-semibold">Is my data secure on your platform?</AccordionTrigger>
            <AccordionContent className="text-left text-lg">Absolutely. We prioritize your data security with end-to-end encryption and ensure compliance with industry-leading privacy standards. Your uploaded documents are automatically deleted after processing.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left text-2xl font-semibold">What if i need more pages?</AccordionTrigger>
            <AccordionContent className="text-left text-lg">We can offer you a custom pricing plan based on the number of pages you need, please <Link href="/contact" className="text-amber-500 dark:text-teal-500">Contact Us</Link> for more information.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left text-2xl font-semibold">Can I get a refund if I don’t like the paid service?</AccordionTrigger>
            <AccordionContent className="text-left text-lg">Unfortunately, we do not offer refunds. However, we recommend using the free plan to evaluate our service before upgrading to a paid plan. Please <Link href="/contact" className="text-amber-500 dark:text-teal-500">Contact Us</Link> for more information.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left text-2xl font-semibold">What file formats do you support for upload?</AccordionTrigger>
            <AccordionContent className="text-left text-lg">We support PDF, scanned images and Tiff files.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-left text-2xl font-semibold"> Can I cancel my subscription anytime?</AccordionTrigger>
            <AccordionContent className="text-left text-lg">Yes, you can cancel your paid plan at any time. Your subscription will remain active until the end of the billing cycle.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-left text-2xl font-semibold"> How can I contact support if I face any issues?</AccordionTrigger>
            <AccordionContent className="text-left text-lg">You can reach out to our support team via email at <Link href="mailto:info@quickextract.ai" className="text-amber-500 dark:text-teal-500">info@quickextract.ai</Link> or contact us via  <Link href="/contact" className="text-amber-500 dark:text-teal-500">Contact Us</Link>.</AccordionContent>
          </AccordionItem>
        </Accordion>
        
      </div>
    </div>
  );
}
