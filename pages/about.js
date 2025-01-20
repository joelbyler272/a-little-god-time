import React from 'react';
import Layout from '../components/Layout';

export default function About() {
  const teamMembers = [
    { 
      name: 'Sarah Johnson', 
      role: 'Founder & Spiritual Director', 
      bio: 'Passionate about connecting people with meaningful spiritual insights.',
      imageUrl: '/api/placeholder/300/300'
    },
    { 
      name: 'Michael Rodriguez', 
      role: 'Content Curator', 
      bio: 'Dedicated to selecting and crafting transformative devotional content.',
      imageUrl: '/api/placeholder/300/300'
    },
    { 
      name: 'Emily Chen', 
      role: 'Community Engagement Lead', 
      bio: 'Bridging connections and fostering a supportive spiritual community.',
      imageUrl: '/api/placeholder/300/300'
    }
  ];

  const missionValues = [
    {
      title: 'Spiritual Growth',
      description: 'Providing daily inspiration to deepen your relationship with God.',
      icon: '🌱'
    },
    {
      title: 'Community Connection',
      description: 'Creating a supportive network of believers and seekers.',
      icon: '🤝'
    },
    {
      title: 'Authentic Reflection',
      description: 'Encouraging honest, transformative spiritual experiences.',
      icon: '✨'
    }
  ];

  return (
    <Layout>
      <div className="max-width-container py-12">
        {/* Mission Statement */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-dark-blue mb-6">
            Our Mission
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed">
              A Little God Time exists to provide meaningful, accessible spiritual 
              nourishment for individuals seeking daily connection with divine wisdom. 
              We believe in the transformative power of consistent, reflective spiritual practice.
            </p>
          </div>
        </section>

        {/* Mission Values */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {missionValues.map((value, index) => (
              <div 
                key={index} 
                className="card text-center p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-6xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-semibold text-dark-blue mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold text-dark-blue text-center mb-12">
            Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="card text-center p-8 hover:scale-105 transform transition duration-300"
              >
                <img 
                  src={member.imageUrl} 
                  alt={member.name} 
                  className="w-48 h-48 object-cover rounded-full mx-auto mb-6 shadow-md"
                />
                <h3 className="text-2xl font-semibold text-dark-blue mb-2">
                  {member.name}
                </h3>
                <p className="text-soft-green font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-16 bg-soft-blue/10 rounded-lg p-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              We'd love to hear from you. Whether you have a question, 
              suggestion, or simply want to share your spiritual journey, 
              our team is here to listen and support you.
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="mailto:connect@alittlegodtime.com" 
                className="btn-primary"
              >
                Email Us
              </a>
              <a 
                href="#" 
                className="btn-secondary"
              >
                Join Our Community
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
