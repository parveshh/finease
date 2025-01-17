
const PrivacyPolicy = () => {
    return (
      <div className="p-6 mx-auto text-gray-800 dark:text-gray-200">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          <strong>Effective Date:</strong> 01 January 2024
        </p>
        <p className="mb-6">
          At <span className="font-semibold">QuickExtract</span>, we take
          your privacy seriously. This Privacy Policy outlines how we collect,
          use, and protect your information when you use our Bank Statement to
          CSV Converter platform. By using our services, you agree to the terms
          of this Privacy Policy.
        </p>
  
        <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>
            <strong>Uploaded Documents:</strong> Bank statements or documents you
            upload for conversion. These files are processed temporarily and
            deleted automatically after conversion.
          </li>
          <li>
            <strong>Account Information:</strong> When you register, we may
            collect your name, email address, and account details.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about your interactions with
            our platform, such as usage patterns, device type, and browser
            information.
          </li>
        </ul>
  
        <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>To process and convert your bank statements into CSV format.</li>
          <li>To provide customer support and respond to your inquiries.</li>
          <li>
            To improve the functionality and user experience of our platform.
          </li>
          <li>To send updates, notifications, or promotional material (if you opt-in).</li>
        </ul>
  
        <h2 className="text-xl font-semibold mb-4">3. Data Security</h2>
        <p className="mb-6">
          We implement robust security measures to protect your data:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>
            <strong>End-to-End Encryption:</strong> All uploads and downloads are
            encrypted to ensure data security.
          </li>
          <li>
            <strong>Automatic Deletion:</strong> Uploaded documents are
            permanently deleted from our servers shortly after processing.
          </li>
          <li>
            <strong>Restricted Access:</strong> Only authorized systems can
            process your files; no human accesses your data.
          </li>
        </ul>
  
        <h2 className="text-xl font-semibold mb-4">4. Free Plan Usage</h2>
        <p className="mb-6">
          Our free plan allows up to 10 pages per month for conversion. Documents
          processed under the free plan are handled with the same level of
          security and privacy as the paid plans.
        </p>
  
        <h2 className="text-xl font-semibold mb-4">5. Third-Party Services</h2>
        <p className="mb-6">
          We may use trusted third-party services for:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Payment processing for paid plans (e.g., Stripe or PayPal).</li>
          <li>
            Analytics to understand platform usage and improve services. These
            third parties are bound by confidentiality agreements.
          </li>
        </ul>
  
        <h2 className="text-xl font-semibold mb-4">6. No Refund Policy</h2>
        <p className="mb-6">
          Please note that we do not offer refunds for our paid plans. We
          encourage users to try the free plan before upgrading to ensure the
          service meets their needs.
        </p>
  
        <h2 className="text-xl font-semibold mb-4">7. Cookies and Tracking Technologies</h2>
        <p className="mb-6">
          We may use cookies to enhance your experience, such as remembering your
          preferences and optimizing platform performance. You can control or
          disable cookies through your browser settings.
        </p>
  
        <h2 className="text-xl font-semibold mb-4">8. Your Rights</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Access, correct, or delete your account information.</li>
          <li>Opt-out of promotional communications.</li>
          <li>Request a copy of your personal data.</li>
        </ul>
  
        <h2 className="text-xl font-semibold mb-4">
          9. Changes to This Privacy Policy
        </h2>
        <p className="mb-6">
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with the updated effective date.
        </p>
  
        <h2 className="text-xl font-semibold mb-4">10. Contact Us</h2>
        <p className="mb-6">
          If you have questions or concerns about this Privacy Policy, please
          contact us at:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>
            <strong>Email:</strong> support@quickextract.ai
          </li>
          <li>
            <strong>Address:</strong> 97 Jubilee Street BECKENHAM WA 6107
          </li>
        </ul>
  
        <p className="mt-6">
          By using our platform, you acknowledge that you have read and agree to
          this Privacy Policy.
        </p>
      </div>
    );
  };
  
  export default PrivacyPolicy;