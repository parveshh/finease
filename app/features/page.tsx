"use client";
import FeatureCard from "../components/FeatureCard";
import HeroSection from "../components/subscriptions/HeroSection";
import { motion } from "motion/react";

export default function Page() {
  return (
    <main className="flex flex-col gap-5 relative">
      
      <HeroSection texts={[{
        title: "Unleash the Power of Intelligent Financial Data Extraction",
        description: "Transform your bank statements into structured CSV files for effortless analysis and decision-making.",
      }]} />

      <section className="flex flex-row flex-wrap justify-center gap-5 relative mt-5">
        <motion.div initial={{ opacity: 0 }}  whileInView={{ opacity: 1 }} transition={{ duration: 0.5, staggerChildren: 0.1 }} viewport={{ once: true }} className="absolute z-[-1] bg-gradient-to-b from-amber-500 to-amber-600 rounded-lg h-full left-[calc(50%-1px)] w-[1px]">
          <motion.div className="absolute z-[-1] bg-amber-500 h-2 w-3 rounded-full -right-[2px] top-[calc(5%-1px)]"></motion.div>
          <motion.div className="absolute z-[-1] bg-amber-500 h-2 w-3 rounded-full -right-[12px] top-[calc(15%-1px)]"></motion.div>
          <motion.div className="absolute z-[-1] bg-amber-500 h-2 w-3 rounded-full -right-[2px] top-[calc(25%-1px)]"></motion.div>
          <motion.div className="absolute z-[-1] bg-amber-500 h-2 w-3 rounded-full -right-[12px] top-[calc(35%-1px)]"></motion.div>
          <motion.div className="absolute z-[-1] bg-amber-500 h-2 w-3 rounded-full -right-[2px] top-[calc(45%-1px)]"></motion.div>
          <motion.div className="absolute z-[-1] bg-amber-500 h-2 w-3 rounded-full -right-[12px] top-[calc(55%-1px)]"></motion.div>
          <motion.div className="absolute z-[-1] bg-amber-500 h-2 w-3 rounded-full -right-[2px] top-[calc(65%-1px)]"></motion.div>
          <motion.div className="absolute z-[-1] bg-amber-500 h-2 w-3 rounded-full -right-[12px] top-[calc(75%-1px)]"></motion.div>
          <motion.div className="absolute z-[-1] bg-amber-500 h-2 w-3 rounded-full -right-[2px] top-[calc(85%-1px)]"></motion.div>
          <motion.div className="absolute z-[-1] bg-amber-500 h-2 w-3 rounded-full -right-[12px] top-[calc(95%-1px)]"></motion.div>
        </motion.div>
        <FeatureCard title="Dual Parsing Engines for Maximum Accuracy">
          Our platform offers two powerful parsers to process your documents.
          This ensures better accuracy across varying statement formats. Review
          both outputs and download the version that fits your needs perfectly.
        </FeatureCard>

        <FeatureCard title="Intelligent Financial Data Extraction">
          Leverage advanced Intelligent OCR technology to extract transaction data
          from PDFs, Tiff files, and scanned images with precision, minimizing
          errors and manual effort.
        </FeatureCard>

        <FeatureCard title="Free Plan for Hassle-Free Trial">
          Enjoy up to 10 pages per month on our free plan. It’s an ideal way to
          experience the platform and see how it can simplify your financial
          data management.
        </FeatureCard>

        <FeatureCard title="Support for Multiple Formats">
          Upload bank statements in PDF, Tiff, or scanned image formats, and
          our tool will process them seamlessly into CSV files ready for
          analysis.
        </FeatureCard>

        <FeatureCard title="End-to-End Encryption">
          Your data security is our priority. All uploaded files are encrypted
          during transit and automatically deleted after processing to ensure
          your information remains private and protected.
        </FeatureCard>

        <FeatureCard title="User-Friendly Interface">
          Easily upload documents, process them, and download CSV files through
          our intuitive, easy-to-navigate interface, designed for users of all
          skill levels.
        </FeatureCard>

        <FeatureCard title="Instant Processing">
          No more waiting! Convert your bank statements into organized CSV files
          in a matter of seconds, saving you time and effort.
        </FeatureCard>

        <FeatureCard title="Flexible Subscription Plans">
          Start with our free plan, and when you&apos;re ready to unlock more
          features, upgrade to one of our affordable paid plans for unlimited
          conversions.
        </FeatureCard>

        <FeatureCard title="Cloud-Based Solution">
          Access the platform anytime, anywhere. Our cloud-based service ensures
          fast, reliable performance without the need for additional
          installations or software.
        </FeatureCard>

        <FeatureCard title="Customer Support">
          Need assistance? Our dedicated support team is available to answer
          your questions and ensure a smooth experience.
        </FeatureCard>
      </section>
    </main>
  );
}
