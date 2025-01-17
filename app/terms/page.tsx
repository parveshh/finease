const TermsOfService = () => {
  return (
    <div className="p-6  text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">
        Welcome to <span className="font-semibold">QuickExtract</span> By
        accessing or using our Bank Statement to CSV Converter platform, you
        agree to comply with these Terms of Service. Please read them carefully
        before using our services.
      </p>

      <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
      <p className="mb-6">
        By using our platform, you acknowledge that you have read, understood,
        and agree to be bound by these terms. If you do not agree to these
        terms, you may not access or use our services.
      </p>

      <h2 className="text-xl font-semibold mb-4">2. Use of the Service</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>
          You may use the platform for personal or business purposes, provided
          you comply with these terms.
        </li>
        <li>
          Do not misuse the service, including attempting unauthorized access
          or disrupting the platform&apos;s operation.
        </li>
        <li>
          You&apos;re responsible for the accuracy and legality of the documents you
          upload.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-4">3. Free and Paid Plans</h2>
      <p className="mb-6">
        Our platform offers a free plan with limited usage and paid plans with
        enhanced features:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>
          The free plan allows conversion of up to 10 pages per month. Excess
          usage requires upgrading to a paid plan.
        </li>
        <li>
          Paid plans are subject to the terms provided during the subscription
          process.
        </li>
        <li>No refunds are available for paid plans.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-4">4. Data Privacy</h2>
      <p className="mb-6">
        We take your data privacy seriously. Please review our{" "}
        <a
          href="/privacy"
          className="text-teal-500 hover:underline"
        >
          Privacy Policy
        </a>{" "}
        for details on how we handle your data.
      </p>

      <h2 className="text-xl font-semibold mb-4">5. Intellectual Property</h2>
      <p className="mb-6">
        All content, trademarks, and other intellectual property on the platform
        belong to <span className="font-semibold">QuickExtract</span> or its
        licensors. You may not reproduce, distribute, or create derivative works
        without prior written permission.
      </p>

      <h2 className="text-xl font-semibold mb-4">6. Service Availability</h2>
      <p className="mb-6">
        We strive to provide uninterrupted access to the platform but do not
        guarantee availability. Maintenance, updates, or unforeseen events may
        temporarily disrupt the service.
      </p>

      <h2 className="text-xl font-semibold mb-4">7. Limitation of Liability</h2>
      <p className="mb-6">
        <span className="font-semibold">QuickExtract</span> is not liable
        for any damages resulting from the use or inability to use the platform.
        Your use of the service is at your own risk.
      </p>

      <h2 className="text-xl font-semibold mb-4">8. Changes to Terms</h2>
      <p className="mb-6">
        We may update these Terms of Service at any time. Changes will be
        effective immediately upon posting. Continued use of the platform
        signifies your acceptance of the updated terms.
      </p>

      <h2 className="text-xl font-semibold mb-4">9. Termination</h2>
      <p className="mb-6">
        We reserve the right to suspend or terminate your access to the platform
        at our sole discretion if you violate these terms or for other reasons
        deemed necessary.
      </p>

      <h2 className="text-xl font-semibold mb-4">10. Contact Us</h2>
      <p className="mb-6">
        If you have questions or concerns about these Terms of Service, please
        contact us at:
      </p>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li>
          <strong>Email:</strong> support@quickextract@ai
        </li>
        <li>
          <strong>Address:</strong> 97 Jubilee Street BECKENHAM WA 6107
        </li>
      </ul>

      <p className="mt-6">
        By using our platform, you confirm your acceptance of these Terms of
        Service.
      </p>
    </div>
  );
};

export default TermsOfService;