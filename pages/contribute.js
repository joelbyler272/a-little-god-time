import React, { useState } from 'react';
import Layout from '../components/Layout';

export default function Contribute() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    devotionalTitle: '',
    devotionalContent: '',
    scriptureReference: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement actual submission logic
    console.log('Submission:', formData);
    alert('Thank you for your submission! Our team will review it soon.');
  };

  return (
    <Layout>
      <div className="max-width-container py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contribution Guidelines */}
          <div className="bg-soft-blue/10 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">
              Share Your Devotional
            </h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start space-x-3">
                <span className="text-golden-yellow text-2xl">✦</span>
                <p>Inspire others with your spiritual insights and reflections</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-golden-yellow text-2xl">✦</span>
                <p>Share personal stories of faith, hope, and transformation</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-golden-yellow text-2xl">✦</span>
                <p>Support our community with meaningful, biblically-grounded content</p>
              </div>
            </div>
            <div className="mt-8 bg-light-gold/20 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-dark-blue mb-2">
                Submission Guidelines
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>500-1000 words</li>
                <li>Include a clear scripture reference</li>
                <li>Personal and reflective tone</li>
                <li>Proofread for clarity and grammar</li>
              </ul>
            </div>
          </div>

          {/* Contribution Form */}
          <form onSubmit={handleSubmit} className="card p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-dark-blue mb-6">
              Devotional Submission
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-dark-blue mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-soft-blue rounded-lg focus:ring-2 focus:ring-golden-yellow"
                />
              </div>
              <div>
                <label className="block text-dark-blue mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-soft-blue rounded-lg focus:ring-2 focus:ring-golden-yellow"
                />
              </div>
              <div>
                <label className="block text-dark-blue mb-2">Devotional Title</label>
                <input 
                  type="text" 
                  name="devotionalTitle"
                  value={formData.devotionalTitle}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-soft-blue rounded-lg focus:ring-2 focus:ring-golden-yellow"
                />
              </div>
              <div>
                <label className="block text-dark-blue mb-2">Scripture Reference</label>
                <input 
                  type="text" 
                  name="scriptureReference"
                  value={formData.scriptureReference}
                  onChange={handleChange}
                  placeholder="e.g., Psalm 23:1-4"
                  className="w-full px-4 py-3 border border-soft-blue rounded-lg focus:ring-2 focus:ring-golden-yellow"
                />
              </div>
              <div>
                <label className="block text-dark-blue mb-2">Devotional Content</label>
                <textarea 
                  name="devotionalContent"
                  value={formData.devotionalContent}
                  onChange={handleChange}
                  rows="6"
                  required
                  placeholder="Share your spiritual reflection..."
                  className="w-full px-4 py-3 border border-soft-blue rounded-lg focus:ring-2 focus:ring-golden-yellow"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn-primary w-full"
              >
                Submit Devotional
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
