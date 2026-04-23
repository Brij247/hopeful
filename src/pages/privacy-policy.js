import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <Head>
        <title>Privacy Policy | Excel HOPE</title>
      </Head>
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Privacy Policy</h1>
      <p className="mb-4 text-gray-700">We value your privacy. This policy explains how Excel HOPE collects, uses, and protects your information.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Information We Collect</h2>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>Personal details you provide in forms (name, email, phone, address, etc.)</li>
        <li>Donation and sponsorship information</li>
        <li>Communication records</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">How We Use Information</h2>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>To process sponsorships and donations</li>
        <li>To communicate with you about our projects and updates</li>
        <li>To comply with legal obligations</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Data Security</h2>
      <p className="mb-4 text-gray-700">We implement industry-standard security measures to protect your data. We do not sell or share your information with third parties except as required by law.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Contact</h2>
      <p className="mb-4 text-gray-700">For privacy-related questions, contact us at <a href="mailto:support@excelhope.org" className="text-pink-600 underline">support@excelhope.org</a>.</p>
      <p className="text-gray-500 mt-8">Last updated: April 2026</p>
    </div>
  );
}
