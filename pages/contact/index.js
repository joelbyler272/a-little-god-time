import Head from 'next/head'
import Layout from '../../components/Layout'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    prayerRequest: false
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
        <title>Contact Us - A Little God Time</title>
        <meta name="description" content="Get in touch with the A Little God Time team. We'd love to hear from you!" />
      </Head>

      <div className="max-width-container py-12">
        <div className="max-w-3xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-4xl font-bold text-dark-blue mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600">
              We'd love to hear from you! Whether you have questions, feedback, or prayer requests,
              please don't hesitate to reach out.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-soft-blue/10 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold text-dark-blue mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl text-dark-blue mb-2">Email</h3>
                  <p className="text-gray-600">info@alittlegodtime.org</p>
                </div>
                <div>
                  <h3 className="text-xl text-dark-blue mb-2">Prayer Requests</h3>
                  <p className="text-gray-600">prayer@alittlegodtime.org</p>
                </div>
                <div>
                  <h3 className="text-xl text-dark-blue mb-2">Contribution Inquiries</h3>
                  <p className="text-gray-600">contribute@alittlegodtime.org</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl text-dark-blue mb-4">
                  Connect With Us
                </h3>
                <div className="flex space-x-4">
                  {['Facebook', 'Twitter', 'Instagram'].map((platform, index) => (
                    <a 
                      key={platform} 
                      href="#" 
                      className="text-dark-blue hover:text-golden-yellow transition duration-300"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="card p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-dark-blue mb-6">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    label: 'Subject', 
                    name: 'subject', 
                    type: 'text', 
                    required: true 
                  }
                ].map((field) => (
                  <div key={field.name}>
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
                      className="w-full px-4 py-3 border border-soft-blue rounded-lg focus:ring-2 focus:ring-golden-yellow"
                    />
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className="block text-dark-blue mb-2">
                    Message
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
                  <label htmlFor="prayerRequest" className="text-sm text-gray-600">
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
      </div>
    </Layout>
  )
}
