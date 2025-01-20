import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>A Little God Time - Daily Devotionals</title>
        <meta name="description" content="Take a moment. Find peace. Spend A Little God Time." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
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
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <h3 className="font-serif text-2xl mb-4">Finding Peace in His Presence</h3>
              <p className="text-lg mb-4 italic">"Come to me, all you who are weary and burdened, and I will give you rest." - Matthew 11:28</p>
              <p className="mb-6">
                In today's fast-paced world, finding moments of peace can seem impossible. Yet God invites us to rest in His presence...
              </p>
              <Link href="/devotional" className="text-secondary hover:underline">
                Read More →
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl text-text text-center mb-12">What Others Are Saying</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </main>

      {/* Footer */}
      <footer className="bg-text text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">A Little God Time © {new Date().getFullYear()}</p>
          <nav className="space-x-4">
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contribute" className="hover:underline">Contribute</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}