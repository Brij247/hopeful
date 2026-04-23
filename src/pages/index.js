import Carousel from "@/widgets/Carousel";
import HomeContent from "@/widgets/HomeContent";
import Link from "next/link";

const testimonials = [
  {
    name: "Anjali R.",
    text: "Excel HOPE changed my daughter's life. She now dreams of becoming a teacher!",
    location: "Kollam, Kerala",
  },
  {
    name: "Rahul M.",
    text: "The support and love from HOPE is truly inspiring. Thank you for believing in us.",
    location: "Trivandrum, Kerala",
  },
  {
    name: "Sister Mary",
    text: "I've seen children blossom with confidence and faith. HOPE is a blessing!",
    location: "Volunteer",
  },
];

const partners = [
  { name: "Kerala Christian Network", logo: "/partner1.png" },
  { name: "EduCare India", logo: "/partner2.png" },
  { name: "Global Hope", logo: "/partner3.png" },
];

export default function Home() {
  return (
    <div>
      <Carousel>
        <HomeContent />
      </Carousel>

      {/* Impact Stats */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <p className="text-4xl font-bold text-pink-600 mb-2">500+</p>
          <p className="text-lg text-gray-700">Children Supported</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-blue-600 mb-2">5</p>
          <p className="text-lg text-gray-700">Active Projects</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-green-600 mb-2">12+</p>
          <p className="text-lg text-gray-700">Years of Service</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-rose-600 mb-2">1000+</p>
          <p className="text-lg text-gray-700">Families Impacted</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-pink-100 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Ready to Make a Difference?
        </h2>
        <p className="text-lg mb-8 text-gray-700">
          Sponsor a child today and help us transform lives through education
          and hope.
        </p>
        <Link
          href="/sponser-a-child"
          className="inline-block bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 px-10 py-4 rounded-lg font-semibold text-xl text-white transition duration-300 shadow-lg"
        >
          <span className="text-2xl">💝</span> Sponsor a Child
        </Link>
      </section>
    </div>
  );
}
