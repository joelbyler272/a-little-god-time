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

      <div className="max-width-container py-12">
        <div className="max-w-3xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-4xl font-bold text-dark-blue mb-6">
              About A Little God Time
            </h1>
            <div className="w-16 h-1 bg-golden-yellow mx-auto"></div>
          </header>

          <section>
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-semibold text-dark-blue mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  A Little God Time was created with a simple yet profound mission: to encourage 
                  people to spend meaningful moments with God in their daily lives. We believe that 
                  even a few minutes of focused time with God can transform our perspective, renew 
                  our spirit, and deepen our relationship with Him.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-semibold text-dark-blue mb-6">What We Do</h2>
                <p className="text-lg text-gray-700 mb-6">
                  We provide free, daily devotionals that are:
                </p>
                <ul className="space-y-4 mb-8 text-gray-700">
                  {[
                    { title: 'Accessible', desc: 'Written in clear, engaging language that speaks to both new believers and seasoned faithful.' },
                    { title: 'Scripture-based', desc: 'Rooted in God's Word, helping readers understand and apply biblical truths.' },
                    { title: 'Practical', desc: 'Including real-life applications and actionable steps for spiritual growth.' },
                    { title: 'Community-driven', desc: 'Written by a diverse group of contributors sharing their faith journey.' }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-golden-yellow mr-3 text-xl">•</span>
                      <div>
                        <p className="font-semibold text-dark-blue">{item.title}</p>
                        <p>{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-semibold text-dark-blue mb-6">Our Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We envision a world where people from all walks of life can easily access spiritual 
                  nourishment and find encouragement in their faith journey. Our platform serves as a 
                  daily reminder that God's presence is accessible in every moment, and His wisdom is 
                  relevant to our daily lives.
                </p>
              </div>

              <div className="bg-soft-blue/10 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-dark-blue mb-6">Join Our Community</h3>
                <p className="text-gray-700 mb-6">
                  A Little God Time is more than just a devotional platform – it's a community of believers 
                  supporting each other in their spiritual journey.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    { title: 'Read Daily Devotionals', desc: 'Start your day with inspiration and biblical wisdom.' },
                    { title: 'Share Your Story', desc: 'Contribute your own devotionals and inspire others.' },
                    { title: 'Subscribe to Updates', desc: 'Receive devotionals directly in your inbox.' },
                    { title: 'Spread the Word', desc: 'Share devotionals with friends and family.' }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-golden-yellow mr-3 text-xl">•</span>
                      <div>
                        <p className="font-semibold text-dark-blue">{item.title}</p>
                        <p className="text-gray-700">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <Link 
                    href="/contribute" 
                    className="btn-primary"
                  >
                    Start Contributing Today
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}
