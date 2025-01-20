import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    prayerRequest: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon.');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <Layout>
      <Head>
        <title>Contact Us - A Little God Time</title>
        <meta name="description" content="Get in touch with A Little God Time" />
      </Head>

      <div className="max-width-container py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information Section */}
          <div className="bg-soft-blue/10 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">
              Contact Information
            </h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold text-dark-blue mb-2">
                  General Inquiries
                </h3>
                <p>Email: info@alittlegodtime.org</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark-blue mb-2">
                  Prayer Requests
                </h3>
                <p>Email: prayer@alittlegodtime.org</p>
                <p className="text-sm text-gray-500 mt-2">
                  Our prayer team is dedicated to lifting up your requests.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark-blue mb-2">
                  Contribution Inquiries
                </h3>
                <p>Email: contribute@alittlegodtime.org</p>
                <p className="text-sm text-gray-500 mt-2">
                  Interested in sharing a devotional? Reach out to us.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-dark-blue mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-soft-blue rounded-lg focus:ring-2 focus:ring-golden-yellow"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-dark-blue mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-soft-blue rounded-lg focus:ring-2 focus:ring-golden-yellow"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-dark-blue mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-soft-blue rounded-lg focus:ring-2 focus:ring-golden-yellow"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-dark-blue mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-soft-blue rounded-lg focus:ring-2 focus:ring-golden-yellow"
                />
              </div>

              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  id="prayerRequest"
                  name="prayerRequest"
                  checked={formData.prayerRequest}
                  onChange={handleChange}
                  className="mt-1 text-golden-yellow focus:ring-golden-yellow"
                />
                <label 
                  htmlFor="prayerRequest" 
                  className="text-sm text-gray-600"
                >
                  This is a prayer request. Our prayer team will be notified.
                </label>
              </div>

              <button 
                type="submit" 
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
