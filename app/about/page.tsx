import React from "react";

const AboutUs = () => {
  return (
    <div className="p-6 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-left">About Us</h1>
      <p className="mb-6 text-lg">
        Welcome to <span className="font-semibold">QuickExtract</span>, your trusted partner in simplifying financial data management. Our mission is to provide an effortless and reliable solution for converting complex bank statements into organized CSV files, empowering individuals and businesses to focus on what matters most.
      </p>

      <h2 className="text-xl font-semibold mb-4">Our Vision</h2>
      <p className="mb-6">
        We envision a world where managing financial data is no longer a tedious task. By leveraging cutting-edge AI and machine learning technologies, we strive to make data processing fast, accurate, and accessible for everyone.
      </p>

      <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
      <p className="mb-6">
        At <span className="font-semibold">QuickExtract</span>, our mission is to eliminate the frustration of manual data entry and empower users with tools that are intuitive, secure, and efficient. Whether you&apos;re an individual managing personal finances or a business handling large volumes of data, we&apos;re here to support you every step of the way.
      </p>

      <h2 className="text-xl font-semibold mb-4">What We Offer</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>
          **Free Plan:** Convert up to 10 pages per month, perfect for trying out our platform risk-free.
        </li>
        <li>
          **Advanced Technology:** AI-powered dual parsers ensure high accuracy for diverse document formats.
        </li>
        <li>
          **Security First:** End-to-end encryption and automatic file deletion to protect your data.
        </li>
        <li>
          **Scalable Solutions:** Flexible plans for individuals, small businesses, and large enterprises.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-4">Why Choose Us?</h2>
      <p className="mb-6">
        With years of expertise and a customer-first approach, we are dedicated to providing exceptional service. Our platform is designed to save time, reduce errors, and make financial data management seamless.  
      </p>

      <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
      <p className="mb-6">
        Have questions or feedback? We&apos;d love to hear from you! Contact our support team at:  
      </p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>
          <strong>Email:</strong> support@quickextract.ai
        </li>
        <li>
          <strong>Address:</strong>  97 Jubilee Street BECKENHAM WA 6107
        </li>
      </ul>

      <p className="text-center mt-6">
        <span className="font-semibold">QuickExtract</span> – Simplifying financial data, one file at a time.
      </p>
    </div>
  );
};

export default AboutUs;