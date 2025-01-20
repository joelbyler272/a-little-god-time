import Head from 'next/head'
import Layout from '../../components/Layout'
import Link from 'next/link'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About - A Little God Time</title>
        <meta name="description" content="Learn more about A Little God Time and our mission to encourage daily time with God." />
      </Head>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="font-serif text-4xl text-text mb-4">
              About A Little God Time
            </h1>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </header>

          <section className="prose prose-lg max-w-none">
            <h2 className="font-serif text-2xl mb-6">Our Mission</h2>
            <p className="mb-8">
              A Little God Time was created with a simple yet profound mission: to encourage 
              people to spend meaningful moments with God in their daily lives. We believe that 
              even a few minutes of focused time with God can transform our perspective, renew 
              our spirit, and deepen our relationship with Him.
            </p>

            <h2 className="font-serif text-2xl mb-6">What We Do</h2>
            <p className="mb-8">
              We provide free, daily devotionals that are:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <p><strong>Accessible:</strong> Written in clear, engaging language that speaks to both new believers and seasoned faithful.</p>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <p><strong>Scripture-based:</strong> Rooted in God's Word, helping readers understand and apply biblical truths.</p>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <p><strong>Practical:</strong> Including real-life applications and actionable steps for spiritual growth.</p>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">•</span>
                <p><strong>Community-driven:</strong> Written by a diverse group of contributors sharing their faith journey.</p>
              </li>
            </ul>

            <h2 className="font-serif text-2xl mb-6">Our Vision</h2>
            <p className="mb-8">
              We envision a world where people from all walks of life can easily access spiritual 
              nourishment and find encouragement in their faith journey. Our platform serves as a 
              daily reminder that God's presence is accessible in every moment, and His wisdom is 
              relevant to our daily lives.
            </p>

            <h2 className="font-serif text-2xl mb-6">Join Our Community</h2>
            <p className="mb-8">
              A Little God Time is more than just a devotional platform – it's a community of believers 
              supporting each other in their spiritual journey. Whether you're a reader, contributor, 
              or prayer partner, you're an essential part of this ministry.
            </p>

            <div className="bg-primary/10 p-8 rounded-lg mb-8">
              <h3 className="font-serif text-xl mb-4">Ways to Get Involved:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <div>
                    <p className="font-bold">Read Daily Devotionals</p>
                    <p>Start your day with inspiration and biblical wisdom.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <div>
                    <p className="font-bold">Share Your Story</p>
                    <p>Contribute your own devotionals and inspire others.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <div>
                    <p className="font-bold">Subscribe to Updates</p>
                    <p>Receive devotionals directly in your inbox.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <div>
                    <p className="font-bold">Spread the Word</p>
                    <p>Share devotionals with friends and family.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Link 
                href="/contribute" 
                className="inline-block bg-secondary text-white px-8 py-3 rounded-lg hover:opacity-90 transition"
              >
                Start Contributing Today
              </Link>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}