import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { validateEmail, saveFormSubmission } from '../../lib/formSubmission';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setStatus('');

    // Validate email
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    // Attempt to save form submission
    const result = saveFormSubmission('contact', formData);

    if (result.success) {
      setStatus('Your message has been received. We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      setError(result.message);
    }
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
              {error && (
                <div 
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" 
                  role="alert"
                >
                  {error}
                </div>
              )}
              
              {status && (
                <div 
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" 
                  role="alert"
                >
                  {status}
                </div>
              )}

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
