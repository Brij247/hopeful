import { projects, organizationInfo } from "@/data/projects";
import Link from "next/link";
import { useState } from "react";

export default function Project() {
  const [expandedProject, setExpandedProject] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            {organizationInfo.name}
          </h1>
          <p className="text-2xl text-pink-600 font-semibold mb-4">
            {organizationInfo.tagline}
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            {organizationInfo.description}
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-lg shadow-lg text-white">
            <h2 className="text-2xl font-bold mb-4">📍 Vision</h2>
            <p className="text-lg">{organizationInfo.vision}</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 rounded-lg shadow-lg text-white">
            <h2 className="text-2xl font-bold mb-4">🎯 Mission</h2>
            <p className="text-lg">{organizationInfo.mission}</p>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-8 mb-16 rounded-r-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            💡 How Excel HOPE Works
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {organizationInfo.structure}
          </p>
        </div>

        {/* Projects Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            🏫 Our Projects in Kerala
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6">
                  {/* Project Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-gray-800 mb-2">
                        {project.name}
                      </h3>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                          👥 {project.students} Students
                        </span>
                        <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
                          📅 Started: {project.startYear}
                        </span>
                        <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
                          👤 {project.coordinator}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Program Details */}
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-800 font-semibold mb-2">
                      📢 Program Frequency:
                    </p>
                    <p className="text-gray-700 mb-4">
                      {project.programFrequency}
                    </p>

                    {project.activities && (
                      <>
                        <p className="text-gray-800 font-semibold mb-2">
                          🎓 Activities:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-4">
                          {project.activities.map((activity, idx) => (
                            <li key={idx}>{activity}</li>
                          ))}
                        </ul>
                      </>
                    )}

                    {project.targetGroup && (
                      <>
                        <p className="text-gray-800 font-semibold mb-2">
                          🎯 Target Group:
                        </p>
                        <p className="text-gray-700 mb-4">
                          {project.targetGroup}
                        </p>
                      </>
                    )}

                    {project.challenges && (
                      <>
                        <p className="text-gray-800 font-semibold mb-2">
                          ⚠️ Challenges Faced:
                        </p>
                        <p className="text-gray-700 mb-4">
                          {project.challenges}
                        </p>
                      </>
                    )}

                    {project.achievements && (
                      <>
                        <p className="text-gray-800 font-semibold mb-2">
                          🏆 Achievements:
                        </p>
                        <p className="text-gray-700">{project.achievements}</p>
                      </>
                    )}

                    {project.church && (
                      <>
                        <p className="text-gray-800 font-semibold mb-2">
                          ⛪ Church:
                        </p>
                        <p className="text-gray-700">{project.church}</p>
                      </>
                    )}

                    {project.location && (
                      <>
                        <p className="text-gray-800 font-semibold mb-2">
                          📍 Location:
                        </p>
                        <p className="text-gray-700">{project.location}</p>
                      </>
                    )}
                  </div>

                  {/* Action Button */}
                  <Link
                    href="/sponser-a-child"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
                  >
                    💝 Sponsor a Child
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white p-12 rounded-lg text-center">
          <h3 className="text-3xl font-bold mb-4">Make a Difference Today</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            By sponsoring a child, you're not just providing education. You're
            transforming a life and building a brighter future for the entire
            family and community.
          </p>
          <Link
            href="/sponser-a-child"
            className="inline-block bg-white text-pink-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-300"
          >
            Sponsor a Child Now
          </Link>
        </div>
      </div>
    </div>
  );
}
