import Head from "next/head";

export default function License() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <Head>
        <title>License | Excel HOPE</title>
      </Head>
      <h1 className="text-4xl font-bold mb-6 text-gray-800">License</h1>
      <p className="mb-4 text-gray-700">This website and its content are licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener" className="text-blue-600 underline">MIT License</a> unless otherwise noted.</p>
      <h2 className="text-2xl font-semibold mt-8 mb-2">MIT License Summary</h2>
      <ul className="list-disc ml-6 text-gray-700 mb-4">
        <li>Free to use, copy, modify, and distribute</li>
        <li>Attribution required</li>
        <li>No warranty provided</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2">Attribution</h2>
      <p className="mb-4 text-gray-700">If you use or share our content, please credit Excel HOPE and link back to our website.</p>
      <p className="text-gray-500 mt-8">Last updated: April 2026</p>
    </div>
  );
}
