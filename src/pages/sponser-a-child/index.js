import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function SponsorAChild() {
  const saveSponsorData = async () => {
    try {
      const response = await fetch("/api/save-sponsor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          sponsorName: formData.sponsorName,
          sponsorEmail: formData.sponsorEmail,
          sponsorPhone: formData.sponsorPhone,
          sponsorAddress: formData.sponsorAddress,
          childName: formData.childName,
          project: formData.project,
          monthlyAmount: formData.monthlyAmount,
          donationFrequency: formData.donationFrequency,
          hearAboutUs: formData.hearAboutUs,
          message: formData.message,
        }),
      });
      const result = await response.json();
      console.log("Sponsor data saved:", result);
      return result;
    } catch (error) {
      console.error("Error saving sponsor data:", error);
      throw error;
    }
  };

  const [formData, setFormData] = useState({
    sponsorName: "",
    sponsorEmail: "",
    sponsorPhone: "",
    sponsorAddress: "",
    childName: "",
    project: "",
    monthlyAmount: "",
    donationFrequency: "monthly",
    hearAboutUs: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errors = {};
    if (!formData.sponsorName.trim())
      errors.sponsorName = "Sponsor name is required";
    if (!formData.sponsorEmail.trim())
      errors.sponsorEmail = "Email is required";
    if (!formData.sponsorPhone.trim())
      errors.sponsorPhone = "Phone number is required";
    if (!formData.monthlyAmount || isNaN(Number(formData.monthlyAmount))) {
      errors.monthlyAmount = "Valid monthly amount is required";
    }
    if (!formData.project) errors.project = "Please select a project";
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const resetForm = () => {
    setFormData({
      sponsorName: "",
      sponsorEmail: "",
      sponsorPhone: "",
      sponsorAddress: "",
      childName: "",
      project: "",
      monthlyAmount: "",
      donationFrequency: "monthly",
      hearAboutUs: "",
      message: "",
    });
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setIsSubmitting(true);
      try {
        await saveSponsorData();
        alert(
          `✅ Thank you for sponsoring a child!\n\nYour registration has been saved successfully.\n\nWe will contact you soon at ${formData.sponsorEmail} with more details about the child you're sponsoring.`,
        );
        resetForm();
      } catch (error) {
        alert("❌ Error saving registration. Please try again.");
        console.error(error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            💝 Sponsor a Child
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform a child's life through education. Your sponsorship
            provides not just education, but also meals, counseling, and
            spiritual guidance. Every rupee makes a difference!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Benefits Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              ✨ What Your Sponsorship Includes
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-2xl">📚</span>
                <span>Educational Support & Supplies</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">🍱</span>
                <span>Nutritional Support</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">🙏</span>
                <span>Spiritual & Moral Classes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">💬</span>
                <span>Personal Counseling</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">📊</span>
                <span>Regular Progress Updates</span>
              </li>
              <li className="flex gap-3">
                <span className="text-2xl">👨‍👩‍👧</span>
                <span>Family Support</span>
              </li>
            </ul>
          </div>

          {/* Impact Card */}
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-8 rounded-lg shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-4">🏆 The Impact</h3>
            <div className="space-y-4">
              <div>
                <p className="text-3xl font-bold">500+</p>
                <p>Children Supported</p>
              </div>
              <div>
                <p className="text-3xl font-bold">5</p>
                <p>Active Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold">12+</p>
                <p>Years of Service</p>
              </div>
              <p className="text-sm mt-4 italic">
                Join thousands of sponsors making real change in education!
              </p>
            </div>
          </div>

          {/* Info Card */}
          <div className="bg-gradient-to-br from-orange-500 to-red-600 p-8 rounded-lg shadow-lg text-white">
            <h3 className="text-2xl font-bold mb-4">ℹ️ How It Works</h3>
            <ol className="space-y-3 list-decimal list-inside">
              <li>Fill out the sponsorship form</li>
              <li>Choose a project location</li>
              <li>Select your monthly contribution</li>
              <li>Submit your registration</li>
              <li>We'll contact you with child details</li>
            </ol>
            <p className="text-sm mt-4 italic">
              Your information is securely saved and helps us match you with a
              child.
            </p>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            📝 Sponsorship Registration Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Sponsor Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Sponsor Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="sponsorName"
                    value={formData.sponsorName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none transition ${
                      errors.sponsorName ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.sponsorName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.sponsorName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="sponsorEmail"
                    value={formData.sponsorEmail}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none transition ${
                      errors.sponsorEmail ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.sponsorEmail && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.sponsorEmail}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="sponsorPhone"
                    value={formData.sponsorPhone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none transition ${
                      errors.sponsorPhone ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="+91 98765 43210"
                  />
                  {errors.sponsorPhone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.sponsorPhone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Address (Optional)
                  </label>
                  <input
                    type="text"
                    name="sponsorAddress"
                    value={formData.sponsorAddress}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none transition"
                    placeholder="Your address"
                  />
                </div>
              </div>
            </div>

            {/* Sponsorship Details */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Sponsorship Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Child's Name (Optional)
                  </label>
                  <input
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none transition"
                    placeholder="If you have a specific child in mind"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Project *
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none transition ${
                      errors.project ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">-- Choose a project --</option>
                    {projects.map((proj) => (
                      <option key={proj.id} value={proj.name}>
                        {proj.name} ({proj.students} students)
                      </option>
                    ))}
                  </select>
                  {errors.project && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.project}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Contribution (INR) *
                  </label>
                  <input
                    type="number"
                    name="monthlyAmount"
                    value={formData.monthlyAmount}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-pink-500 outline-none transition ${
                      errors.monthlyAmount
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="e.g., 500, 1000, 2000"
                    min="100"
                  />
                  {errors.monthlyAmount && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.monthlyAmount}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Donation Frequency
                  </label>
                  <select
                    name="donationFrequency"
                    value={formData.donationFrequency}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none transition"
                  >
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">
                      Quarterly (Every 3 months)
                    </option>
                    <option value="yearly">Yearly</option>
                    <option value="one-time">One-Time</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Additional Information
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How did you hear about Excel HOPE?
                  </label>
                  <textarea
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none transition"
                    rows="2"
                    placeholder="Tell us how you found us..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message / Motivation
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none transition"
                    rows="3"
                    placeholder="Share why you want to sponsor a child..."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-600 mb-4">
                ✅ By clicking 'Submit Registration', your information will be
                securely saved to our system. We will contact you shortly to
                confirm your sponsorship and provide details about the child
                you're sponsoring.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-lg"
              >
                {isSubmitting ? "Processing..." : "✅ Submit Registration"}
              </button>
            </div>
          </form>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Have questions? Contact us at{" "}
            <span className="font-semibold text-pink-600">
              support@excelhope.org
            </span>
          </p>
          <Link
            href="/project"
            className="text-pink-600 hover:text-pink-700 font-semibold underline"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
