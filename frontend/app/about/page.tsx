import React from 'react'

const teamMembers = [
  {
    name: 'Ava Williams',
    role: 'Founder & CEO',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Liam Johnson',
    role: 'Head of Engineering',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Sofia Martinez',
    role: 'Lead Designer',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Ethan Brown',
    role: 'Product Manager',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
  },
  {
    name: 'Olivia Chen',
    role: 'Marketing Director',
    image: 'https://randomuser.me/api/portraits/women/28.jpg',
  },
  {
    name: 'Noah Davis',
    role: 'Full Stack Developer',
    image: 'https://randomuser.me/api/portraits/men/85.jpg',
  },
]

const AboutUsPage = () => {
  return (
    <div className="mt-10 min-h-screen bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-yellow-100 py-16 px-6 text-center">
        <h1 className="text-4xl font-extrabold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          We’re a passionate team dedicated to building meaningful digital experiences.
        </p>
      </section>

      {/* Mission */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          Our mission is to empower people and businesses through beautifully crafted solutions that
          inspire, simplify, and elevate everyday life. We believe in creativity, collaboration, and
          craftsmanship to deliver exceptional value to our users.
        </p>
      </section>

      {/* Team */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center">Meet the Team</h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 mx-auto mb-4 rounded-full object-cover shadow-md"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUsPage
