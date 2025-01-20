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

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="font-serif text-4xl text-text mb-4">
              Share Your Faith, Inspire Others
            </h1>
            <p className="text-lg text-text/80">
              We welcome pastors, leaders, and believers to contribute their devotionals and share God's wisdom.
            </p>
          </header>

          <section className="bg-primary/10 p-8 rounded-lg mb-12">
            <h2 className="font-serif text-2xl mb-4">Contribution Guidelines</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <p>Keep devotionals between 300-500 words, making them perfect for daily reading.</p>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <p>Include a Bible verse or passage as the foundation of your devotional.</p>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <p>Write in a conversational, accessible style that connects with readers.</p>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <p>Include a brief prayer and practical application step.</p>
              </li>
            </ul>
          </section>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-serif text-lg mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-serif text-lg mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary"
              />
            </div>

            <div>
              <label htmlFor="title" className="block font-serif text-lg mb-2">
                Devotional Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary"
              />
            </div>

            <div>
              <label htmlFor="scripture" className="block font-serif text-lg mb-2">
                Scripture Reference
              </label>
              <input
                type="text"
                id="scripture"
                name="scripture"
                value={formData.scripture}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary"
                placeholder="e.g., John 3:16"
              />
            </div>

            <div>
              <label htmlFor="content" className="block font-serif text-lg mb-2">
                Devotional Content
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                rows="10"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary"
                placeholder="Include your reflection, prayer, and practical application..."
              />
            </div>

            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="agreeToGuidelines"
                name="agreeToGuidelines"
                checked={formData.agreeToGuidelines}
                onChange={handleChange}
                required
                className="mt-1"
              />
              <label htmlFor="agreeToGuidelines" className="text-sm text-text/80">
                I have read and agree to the contribution guidelines. I understand that my submission
                may be edited for clarity and length, and that submission does not guarantee publication.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-secondary text-white py-3 rounded-lg hover:opacity-90 transition font-serif text-lg"
            >
              Submit Your Devotional
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}