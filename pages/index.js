import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  const features = [
    {
      icon: '📖',
      title: 'Daily Devotionals',
      description: 'Concise, meaningful reflections to start your day with spiritual inspiration.'
    },
    {
      icon: '🤝',
      title: 'Community Driven',
      description: 'Devotionals written by pastors, leaders, and believers from diverse backgrounds.'
    },
    {
      icon: '⏱️',
      title: 'Quick Reads',
      description: 'Short, powerful messages designed to fit into your busy lifestyle.'
    }
  ]

  const latestDevotionals = [
    {
      title: 'Finding Peace in Chaos',
      excerpt: 'Discover how to maintain inner calm amidst life\'s storms...',
      date: 'January 20, 2025',
      theme: 'Peace'
    },
    {
      title: 'Embracing God\'s Guidance',
      excerpt: 'Learning to trust divine direction in uncertain times...',
      date: 'January 19, 2025',
      theme: 'Faith'
    },
    {
      title: 'The Power of Gratitude',
      excerpt: 'Transform your perspective through thankfulness...',
      date: 'January 18, 2025',
      theme: 'Gratitude'
    }
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-soft-blue to-light-gold text-white">
        <div className="max-width-container py-20 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Take a Moment. Find Peace. 
            <br />
            Spend A Little God Time
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Daily devotionals to inspire, encourage, and connect you with divine wisdom.
          </p>
          <div className="space-x-4">
            <Link 
              href="/devotionals" 
              className="btn-primary inline-block"
            >
              Read Today's Devotional
            </Link>
            <Link 
              href="/contribute" 
              className="btn-secondary inline-block"
            >
              Contribute
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-width-container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dark-blue">
            Why A Little God Time?
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card text-center p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-6xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-dark-blue mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Latest Devotionals Section */}
      <div className="bg-soft-blue/10 py-16">
        <div className="max-width-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark-blue">
              Latest Devotionals
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {latestDevotionals.map((devotional, index) => (
              <div 
                key={index} 
                className="card hover:scale-105 transform transition duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-soft-green bg-soft-green/10 px-3 py-1 rounded-full">
                      {devotional.theme}
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
                  <Link href="/devotionals" className="nav-link">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Contribute Section */}
      <div className="max-width-container py-16 text-center">
        <h2 className="text-3xl font-bold text-dark-blue mb-6">
          Share Your Spiritual Insights
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          We believe everyone has a unique spiritual journey. Whether you're a pastor, 
          leader, or believer, your perspective can inspire others.
        </p>
        <Link 
          href="/contribute" 
          className="btn-primary"
        >
          Become a Contributor
        </Link>
      </div>
    </Layout>
  )
}
