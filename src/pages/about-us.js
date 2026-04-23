import Link from "next/link";
import { organizationInfo } from "@/data/projects";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            About Excel HOPE
          </h1>
          <p className="text-2xl text-pink-600 font-semibold">
            {organizationInfo.tagline}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Excel HOPE is a Christian-based charitable initiative under{" "}
            <span className="font-semibold text-gray-800">
              Excel Ministries
            </span>
            , a registered organization committed to social and spiritual
            development. Founded in {organizationInfo.founded}, Excel HOPE
            focuses on transforming the lives of underprivileged children
            through quality education, breaking the cycle of poverty and
            creating opportunities for a better future.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            {organizationInfo.description}
          </p>
        </div>

        {/* Vision, Mission, Faith, Parent Organization Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-lg shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-4">📍 Vision</h3>
            <p className="text-lg">{organizationInfo.vision}</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 rounded-lg shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-4">🎯 Mission</h3>
            <p className="text-lg">{organizationInfo.mission}</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 rounded-lg shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-4">🙏 Faith</h3>
            <p className="text-lg">
              We believe in the power of Christian values to inspire hope,
              compassion, and positive change in the lives of children and
              families.
            </p>
          </div>
          {/* <div className="bg-gradient-to-br from-orange-500 to-yellow-500 p-8 rounded-lg shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-4">🏢 Parent Organization</h3>
            <p className="text-lg font-semibold mb-2">Excel Ministries</p>
            <p className="text-sm mb-2">
              Registered under the Society Act (Reg. No: P.14/09)
            </p>
            <p className="text-sm mb-2">
              The Excel Team functions under a Board which is an elected body.
            </p>
            <p className="text-sm mb-2 italic">
              Vision: "Reaching the young generation with love of Jesus"
            </p>
            <p className="text-sm">
              Contact:
              <br />
              Excel Ministries, PB No-82,
              <br />
              Pathanamthitta P O, Kerala - 689645
              <br />
              +91-9496325026, +91-9495834994
              <br />
              <a
                href="mailto:contact@excelministries.org"
                className="underline text-white"
              >
                contact@excelministries.org
              </a>
            </p>
          </div> */}
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-400 p-12 rounded-r-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            💡 How Excel HOPE Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Program Structure
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Under privileged children are identified in every locality and a
                group consists minimum 20 up to 50 children is formed. A staff
                member coordinates the work and ensures quality support.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Support Provided
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Educational aid is distributed to either children directly or to
                their guardians. Spiritual lessons, counselling classes and
                camps are exclusively conducted for HOPE children.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Commitment Period
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Initially the commitment is for one year. The progress of the
                child is evaluated yearly and eligible children&apos;s contract is
                renewed for continued support.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                Holistic Development
              </h4>
              <p className="text-gray-700 leading-relaxed">
                We focus not just on academics but also on personality
                development, career guidance, and spiritual growth of each
                child.
              </p>
            </div>
          </div>
        </div>

        {/* Funding & Management */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              💰 Funding
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Excel HOPE is managed by a board and our sole source of fund is
              from volunteer donations and sponsors like you. We believe in
              transparency and accountability in all our operations.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Every rupee donated goes directly to supporting the children and
              their education.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              🤝 Management
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our organization is run by a dedicated board of directors and
              supported by passionate volunteers. We are committed to best
              practices in charity management and continuous improvement.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              We invite all those desirous of helping our children get educated.
            </p>
          </div>
        </div>

        {/* Impact Stats */}
        <div className="bg-gradient-to-r from-pink-600 to-rose-600 p-12 rounded-lg shadow-lg text-white mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">500+</p>
              <p className="text-lg">Children Supported</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">5</p>
              <p className="text-lg">Active Projects</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">12+</p>
              <p className="text-lg">Years of Service</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">1000+</p>
              <p className="text-lg">Families Impacted</p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "❤️ Compassion",
                description:
                  "We are driven by love and compassion for every child and family we serve.",
              },
              {
                title: "🎓 Education",
                description:
                  "We believe education is the key to breaking the cycle of poverty.",
              },
              {
                title: "🤝 Integrity",
                description:
                  "We operate with transparency and integrity in all our dealings.",
              },
              {
                title: "✨ Excellence",
                description:
                  "We strive for excellence in everything we do for the children.",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition"
              >
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-12 rounded-lg shadow-lg text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Join Us in This Mission</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We invite you to be part of Excel HOPE&apos;s journey to transform lives
            through education. Whether as a sponsor, volunteer, or supporter,
            your contribution makes a real difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/sponser-a-child"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg font-bold transition duration-300"
            >
              💝 Sponsor a Child
            </Link>
            <Link
              href="/project"
              className="inline-block bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-bold transition duration-300"
            >
              📚 View Our Projects
            </Link>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h3>
          <p className="text-gray-600 text-lg mb-2">
            Email:{" "}
            <a
              href="mailto:support@excelhope.org"
              className="text-pink-600 font-semibold hover:underline"
            >
              support@excelhope.org
            </a>
          </p>
          <p className="text-gray-600 text-lg">
            Have questions? We&apos;d love to hear from you!
          </p>
        </div>
      </div>
    </div>
  );
}
