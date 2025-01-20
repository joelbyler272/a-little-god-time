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
    {
      title: "Walking in Faith",
      date: "January 19, 2025",
      scripture: "For we walk by faith, not by sight.",
      reference: "2 Corinthians 5:7",
      excerpt: "What does it mean to walk by faith? In today's world, we often want to see the whole path...",
      slug: "walking-in-faith",
      themes: ["Faith", "Trust", "Guidance"]
    },
    {
      title: "The Power of Gratitude",
      date: "January 18, 2025",
      scripture: "Give thanks in all circumstances; for this is God's will for you in Christ Jesus.",
      reference: "1 Thessalonians 5:18",
      excerpt: "Gratitude has the power to transform our perspective and bring joy even in difficult times...",
      slug: "power-of-gratitude",
      themes: ["Gratitude", "Joy", "Perspective"]
    }
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

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="font-serif text-4xl text-text mb-4">
              Devotional Archive
            </h1>
            <p className="text-lg text-text/80">
              Browse our collection of devotionals or search by topic.
            </p>
          </header>

          <div className="mb-8">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="search" className="block font-serif mb-2">
                  Search Devotionals
                </label>
                <input
                  type="search"
                  id="search"
                  placeholder="Search by title, scripture, or content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary"
                />
              </div>

              <div>
                <label htmlFor="theme" className="block font-serif mb-2">
                  Filter by Theme
                </label>
                <select
                  id="theme"
                  value={selectedTheme}
                  onChange={(e) => setSelectedTheme(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary"
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
            <div className="text-center py-12">
              <p className="text-lg text-text/80">
                No devotionals found matching your search criteria.
              </p>
            </div>
          ) : (
            <div className="grid gap-6">
              {filteredDevotionals.map(devotional => (
                <DevotionalCard
                  key={devotional.slug}
                  devotional={devotional}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}