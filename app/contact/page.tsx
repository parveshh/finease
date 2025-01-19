import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MailCheck } from "lucide-react";
import React from "react";

const ContactUs = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
      <h1 className="text-3xl font-bold mb-6 text-left">Contact Us</h1>
      <p className="mb-6 text-lg text-left">
        We’d love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help. Reach out to us through any of the channels below.
      </p>

      <div className="space-y-6">
        <div className="flex items-center">
         <MailCheck className="w-12 h-12 flex justify-center items-center text-neutral-300" />
          <div className="ml-4">
            <h2 className="text-lg font-semibold">Email Us</h2>
            <p>
              Send us an email at{" "}
              <a
                href="mailto:support@quickextract.ai"
                className="text-teal-500 hover:underline"
              >
                support@quickextract.ai
              </a>
            </p>
          </div>
        </div>
      </div>
      </div>
    
      <form>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold mb-4 text-left">Send Us a Message</h2>

        <div>
         
          <Input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your name"
          />
        </div>
        <div>
          
          <Input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>
        <div>
         
          <Textarea
            id="message"
            name="message"
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Type your message here"
          ></Textarea>
        </div>
        <Button
          type="submit"
          
        >
          Submit
        </Button>
      </div>
      </form>
    </div>
  );
};

export default ContactUs;