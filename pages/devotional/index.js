import Head from 'next/head'
import Layout from '../../components/Layout'

export default function Devotional() {
  return (
    <Layout>
      <Head>
        <title>Today's Devotional - A Little God Time</title>
        <meta name="description" content="Read today's devotional and spend time with God." />
      </Head>

      <div className="max-width-container py-12">
        <article className="max-w-3xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-4xl font-bold text-dark-blue mb-4">
              Finding Peace in His Presence
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              January 20, 2025
            </p>
            <div className="w-16 h-1 bg-golden-yellow mx-auto"></div>
          </header>

          <div>
            <blockquote className="text-xl italic mb-8 p-6 bg-soft-blue/10 rounded-lg border-l-4 border-golden-yellow">
              "Come to me, all you who are weary and burdened, and I will give you rest."
              <footer className="text-right mt-2 text-dark-blue">- Matthew 11:28</footer>
            </blockquote>

            {[
              "In our fast-paced world, finding moments of true peace can seem like an impossible task. Our days are filled with endless notifications, deadlines, and responsibilities that constantly demand our attention. Yet, in the midst of this chaos, God extends a gentle invitation to find rest in His presence.",
              "When Jesus spoke these words, He wasn't just offering a temporary respite from physical tiredness. He was extending an invitation to experience deep, soul-level rest that can only come from connecting with our Creator. This rest isn't about escaping our responsibilities or finding a quiet corner to hide away; it's about finding peace in the midst of our daily lives."
            ].map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 mb-6">{paragraph}</p>
            ))}

            <section className="bg-soft-blue/10 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-semibold text-dark-blue mb-4">Reflection</h2>
              <p className="text-gray-700">
                Take a moment to consider: What burdens are you carrying today? What's making you feel 
                weary? Jesus invites you to bring these to Him. Sometimes we hold onto our struggles, 
                thinking we need to figure everything out on our own. But true rest comes when we 
                surrender our burdens to Him and trust in His perfect timing and plan.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-dark-blue mb-4">Prayer</h2>
              <p className="text-gray-700 italic border-l-4 border-golden-yellow pl-4">
                Dear Heavenly Father, thank you for your invitation to find rest in your presence. 
                Help me to release my burdens to you and trust in your perfect plan. Teach me to 
                find moments of peace throughout my day by turning my thoughts to you. Give me the 
                wisdom to prioritize time with you and the courage to let go of the things that 
                weigh me down. In Jesus' name, Amen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-dark-blue mb-4">Today's Practice</h2>
              <p className="text-gray-700">
                Set aside 5 minutes today to simply be still in God's presence. Find a quiet place, 
                take a few deep breaths, and focus on this verse. What burdens can you release to 
                Him today? Write them down as a symbolic act of surrendering them to God.
              </p>
            </section>

            <footer className="mt-12 pt-8 border-t border-soft-blue">
              <div className="flex justify-between items-center mb-8">
                <button className="nav-link">← Previous Devotional</button>
                <button className="nav-link">Next Devotional →</button>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-dark-blue mb-4">Share this Devotional</h3>
                <div className="flex justify-center space-x-4">
                  {[
                    { name: 'Twitter', color: 'bg-[#1DA1F2]' },
                    { name: 'Facebook', color: 'bg-[#4267B2]' },
                    { name: 'WhatsApp', color: 'bg-[#25D366]' }
                  ].map((platform) => (
                    <button 
                      key={platform.name} 
                      className={`${platform.color} text-white px-4 py-2 rounded-lg hover:opacity-90 transition`}
                    >
                      {platform.name}
                    </button>
                  ))}
                </div>
              </div>
            </footer>
          </div>
        </article>
      </div>
    </Layout>
  )
}
