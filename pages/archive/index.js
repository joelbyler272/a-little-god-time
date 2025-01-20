import Head from 'next/head'
import Layout from '../../components/Layout'
import DevotionalCard from '../../components/DevotionalCard'
import { useState } from 'react'

export default function Archive() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTheme, setSelectedTheme] = useState('')

  // Mock data - in a real app, this would come from an API or database
  const devotionals = [
    {
      title: "Finding Peace in His Presence",
      date: "January 20, 2025",
      scripture: "Come to me, all you who are weary and burdened, and I will give you rest.",
      reference: "Matthew 11:28",
      excerpt: "In our fast-paced world, finding moments of true peace can seem like an impossible task...",
      slug: "finding-peace-in-his-presence",
      themes: ["Peace", "Rest", "God's Presence"]
    },
    // ... existing devotionals
  ]

  const themes = Array.from(
    new Set(devotionals.flatMap(d => d.themes))
  ).sort()

  const filteredDevotionals = devotionals.filter(devotional => {
    const matchesSearch = searchQuery === '' || 
      devotional.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      devotional.scripture.toLowerCase().includes(searchQuery.toLowerCase()) ||
      devotional.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesTheme = selectedTheme === '' || 
      devotional.themes.includes(selectedTheme)

    return matchesSearch && matchesTheme
  })

  return (
    <Layout>
      <Head>
        <title>Archive - A Little God Time</title>
        <meta name="description" content="Browse our collection of daily devotionals." />
      </Head>

      <div className="max-width-container py-12">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-4xl font-bold text-dark-blue mb-4">
              Devotional Archive
            </h1>
            <p className="text-xl text-gray-600">
              Browse our collection of devotionals or search by topic.
            </p>
          </header>

          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="search" className="block text-dark-blue mb-2 font-semibold">
                  Search Devotionals
                </label>
                <input
                  type="search"
                  id="search"
                  placeholder="Search by title, scripture, or content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 border border-soft-blue rounded-lg focus:ring-2 focus:ring-golden-yellow"
                />
              </div>

              <div>
                <label htmlFor="theme" className="block text-dark-blue mb-2 font-semibold">
                  Filter by Theme
                </label>
                <select
                  id="theme"
                  value={selectedTheme}
                  onChange={(e) => setSelectedTheme(e.target.value)}
                  className="w-full px-4 py-3 border border-soft-blue rounded-lg focus:ring-2 focus:ring-golden-yellow"
                >
                  <option value="">All Themes</option>
                  {themes.map(theme => (
                    <option key={theme} value={theme}>{theme}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {filteredDevotionals.length === 0 ? (
            <div className="text-center py-12 bg-soft-blue/10 rounded-lg">
              <p className="text-lg text-gray-600">
                No devotionals found matching your search criteria.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDevotionals.map(devotional => (
                <div key={devotional.slug} className="card hover:scale-105 transform transition duration-300">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-soft-green bg-soft-green/10 px-3 py-1 rounded-full">
                        {devotional.themes[0]}
                      </span>
                      <span className="text-sm text-gray-500">
                        {devotional.date}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-dark-blue mb-3">
                      {devotional.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {devotional.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {devotional.reference}
                      </span>
                      <button className="nav-link">Read More</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
