import Head from 'next/head'
import Layout from '../../components/Layout'

export default function Devotional() {
  return (
    <Layout>
      <Head>
        <title>Today's Devotional - A Little God Time</title>
        <meta name="description" content="Read today's devotional and spend time with God." />
      </Head>

      <div className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="font-serif text-4xl text-text mb-4">
              Finding Peace in His Presence
            </h1>
            <p className="text-lg text-text/80 mb-4">
              January 20, 2025
            </p>
            <div className="w-16 h-1 bg-secondary mx-auto"></div>
          </header>

          <div className="prose prose-lg max-w-none">
            <blockquote className="text-xl italic mb-8 p-6 bg-primary/10 rounded-lg">
              "Come to me, all you who are weary and burdened, and I will give you rest."
              <footer className="text-right mt-2">- Matthew 11:28</footer>
            </blockquote>

            <p className="mb-6">
              In our fast-paced world, finding moments of true peace can seem like an impossible task. 
              Our days are filled with endless notifications, deadlines, and responsibilities that 
              constantly demand our attention. Yet, in the midst of this chaos, God extends a 
              gentle invitation to find rest in His presence.
            </p>

            <p className="mb-6">
              When Jesus spoke these words, He wasn't just offering a temporary respite from physical 
              tiredness. He was extending an invitation to experience deep, soul-level rest that can 
              only come from connecting with our Creator. This rest isn't about escaping our 
              responsibilities or finding a quiet corner to hide away; it's about finding peace in 
              the midst of our daily lives.
            </p>

            <h2 className="font-serif text-2xl mt-8 mb-4">Reflection</h2>
            <p className="mb-6">
              Take a moment to consider: What burdens are you carrying today? What's making you feel 
              weary? Jesus invites you to bring these to Him. Sometimes we hold onto our struggles, 
              thinking we need to figure everything out on our own. But true rest comes when we 
              surrender our burdens to Him and trust in His perfect timing and plan.
            </p>

            <h2 className="font-serif text-2xl mt-8 mb-4">Prayer</h2>
            <p className="mb-6">
              Dear Heavenly Father, thank you for your invitation to find rest in your presence. 
              Help me to release my burdens to you and trust in your perfect plan. Teach me to 
              find moments of peace throughout my day by turning my thoughts to you. Give me the 
              wisdom to prioritize time with you and the courage to let go of the things that 
              weigh me down. In Jesus' name, Amen.
            </p>

            <h2 className="font-serif text-2xl mt-8 mb-4">Today's Practice</h2>
            <p className="mb-6">
              Set aside 5 minutes today to simply be still in God's presence. Find a quiet place, 
              take a few deep breaths, and focus on this verse. What burdens can you release to 
              Him today? Write them down as a symbolic act of surrendering them to God.
            </p>
          </div>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <button className="text-secondary hover:underline">← Previous Devotional</button>
              <button className="text-secondary hover:underline">Next Devotional →</button>
            </div>
            <div className="mt-8 text-center">
              <h3 className="font-serif text-xl mb-4">Share this Devotional</h3>
              <div className="flex justify-center space-x-4">
                <button className="bg-[#1DA1F2] text-white px-4 py-2 rounded-lg hover:opacity-90">
                  Twitter
                </button>
                <button className="bg-[#4267B2] text-white px-4 py-2 rounded-lg hover:opacity-90">
                  Facebook
                </button>
                <button className="bg-[#25D366] text-white px-4 py-2 rounded-lg hover:opacity-90">
                  WhatsApp
                </button>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </Layout>
  )
}