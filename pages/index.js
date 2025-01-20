import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import DevotionalCard from '../components/DevotionalCard'
import NewsletterSignup from '../components/NewsletterSignup'

export default function Home() {
  const featuredDevotional = {
    title: "Finding Peace in His Presence",
    date: "January 20, 2025",
    scripture: "Come to me, all you who are weary and burdened, and I will give you rest.",
    reference: "Matthew 11:28",
    excerpt: "In our fast-paced world, finding moments of true peace can seem like an impossible task. Yet God invites us to rest in His presence...",
    slug: "finding-peace-in-his-presence",
    themes: ["Peace", "Rest", "God's Presence"]
  }

  return (
    <Layout>
      <Head>
        <title>A Little God Time - Daily Devotionals</title>
        <meta name="description" content="Take a moment. Find peace. Spend A Little God Time with daily devotionals that inspire and encourage." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-accent py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-4xl md:text-6xl text-text mb-6">
              Take a moment. Find peace.
              <span className="block">Spend A Little God Time.</span>
            </h1>
            <div className="space-x-4">
              <Link href="/devotional" className="inline-block bg-secondary text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
                Read Today's Devotional
              </Link>
              <Link href="/contribute" className="inline-block bg-white text-text px-6 py-3 rounded-lg hover:opacity-90 transition">
                Contribute a Devotional
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl text-text text-center mb-8">Welcome to A Little God Time</h2>
            <p className="text-lg text-center max-w-2xl mx-auto">
              A Little God Time offers free daily devotionals to inspire you to spend meaningful moments with God, wherever you are in your day.
            </p>
          </div>
        </section>

        {/* Featured Devotional Section */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl text-text text-center mb-8">Today's Devotional</h2>
            <div className="max-w-3xl mx-auto">
              <DevotionalCard devotional={featuredDevotional} featured />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl text-text text-center mb-12">What Others Are Saying</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-primary/5 p-6 rounded-lg">
                <p className="mb-4">"These daily devotionals have become an essential part of my morning routine. They help me start each day with purpose and peace."</p>
                <p className="font-serif">- Sarah M.</p>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg">
                <p className="mb-4">"The perfect length for busy days, yet deep enough to inspire meaningful reflection. Thank you for this ministry!"</p>
                <p className="font-serif">- Michael R.</p>
              </div>
              <div className="bg-primary/5 p-6 rounded-lg">
                <p className="mb-4">"I appreciate how these devotionals help me stay connected to God throughout my busy schedule. They're truly a blessing."</p>
                <p className="font-serif">- Rachel K.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl text-text text-center mb-12">Why A Little God Time?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl mb-2">Daily Inspiration</h3>
                <p className="text-text/80">Fresh devotionals every day to guide your spiritual journey.</p>
              </div>
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl mb-2">Community-Driven</h3>
                <p className="text-text/80">Written by believers from diverse backgrounds and experiences.</p>
              </div>
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl mb-2">Quick & Meaningful</h3>
                <p className="text-text/80">Perfect for busy schedules while providing deep spiritual insights.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <NewsletterSignup />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-secondary text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl mb-6">Ready to Contribute?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Share your faith journey and inspire others. We welcome devotionals from pastors, leaders, and believers from all walks of life.
            </p>
            <Link 
              href="/contribute" 
              className="inline-block bg-white text-secondary px-8 py-3 rounded-lg hover:opacity-90 transition"
            >
              Share Your Devotional
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  )
}