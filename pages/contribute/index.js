import Head from 'next/head'
import Layout from '../../components/Layout'
import { useState } from 'react'

export default function Contribute() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    scripture: '',
    content: '',
    agreeToGuidelines: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <Layout>
      <Head>
        <title>Contribute - A Little God Time</title>
        <meta name="description" content="Share your devotional and inspire others in their walk with God." />
      </Head>

      <div className="max-width-container py-12">
        <div className="max-w-3xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-4xl font-bold text-dark-blue mb-4">
              Share Your Faith, Inspire Others
            </h1>
            <p className="text-xl text-gray-600">
              We welcome pastors, leaders, and believers to contribute their devotionals and share God's wisdom.
            </p>
          </header>

          <section className="bg-soft-blue/10 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-semibold text-dark-blue mb-6">
              Contribution Guidelines
            </h2>
            <ul className="space-y-4 text-gray-700">
              {[
                "Keep devotionals between 300-500 words, making them perfect for daily reading.",
                "Include a Bible verse or passage as the foundation of your devotional.",
                "Write in a conversational, accessible style that connects with readers.",
                "Include a brief prayer and practical application step."
              ].map((guideline, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-golden-yellow mr-3 text-xl">•</span>
                  <p>{guideline}</p>
                </li>
              ))}
            </ul>
          </section>

          <form onSubmit={handleSubmit} className="card p-8 shadow-lg">
            {[
              { 
                label: 'Your Name', 
                name: 'name', 
                type: 'text', 
                required: true 
              },
              { 
                label: 'Email Address', 
                name: 'email', 
                type: 'email', 
                required: true 
              },
              { 
                label: 'Devotional Title', 
                name: 'title', 
                type: 'text', 
                required: true 
              },
              { 
                label: 'Scripture Reference', 
                name: 'scripture', 
                type: 'text', 
                required: true,
                placeholder: 'e.g., John 3:16'
              }
            ].map((field) => (
              <div key={field.name} className="mb-6">
                <label htmlFor={field.name} className="block text-dark-blue mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.required}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 border border-soft-blue rounded-lg focus:ring-2 focus:ring-golden-yellow"
                />
              </div>
            ))}

            <div className="mb-6">
              <label htmlFor="content" className="block text-dark-blue mb-2">
                Devotional Content
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                rows="10"
                placeholder="Include your reflection, prayer, and practical application..."
                className="w-full px-4 py-3 border border-soft-blue rounded-lg focus:ring-2 focus:ring-golden-yellow"
              />
            </div>

            <div className="flex items-start space-x-2 mb-6">
              <input
                type="checkbox"
                id="agreeToGuidelines"
                name="agreeToGuidelines"
                checked={formData.agreeToGuidelines}
                onChange={handleChange}
                required
                className="mt-1 text-golden-yellow focus:ring-golden-yellow"
              />
              <label htmlFor="agreeToGuidelines" className="text-sm text-gray-600">
                I have read and agree to the contribution guidelines. I understand that my submission
                may be edited for clarity and length, and that submission does not guarantee publication.
              </label>
            </div>

            <button
              type="submit"
              className="btn-primary w-full"
            >
              Submit Your Devotional
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}
