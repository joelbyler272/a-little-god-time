import Head from 'next/head'
import Layout from '../../components/Layout'

export default function FAQ() {
  const faqs = [
    {
      question: "What is A Little God Time?",
      answer: "A Little God Time is a free, daily devotional platform designed to encourage readers to spend meaningful moments with God through short, reflective readings. We provide concise, inspiring devotionals that fit into busy lifestyles."
    },
    {
      question: "Is this platform completely free?",
      answer: "Yes! A Little God Time is 100% free. Our mission is to make spiritual nourishment accessible to everyone, regardless of their financial situation."
    },
    {
      question: "Who can contribute devotionals?",
      answer: "We welcome contributions from pastors, church leaders, believers, and anyone with a heart to share spiritual insights. Our goal is to provide diverse perspectives that inspire faith."
    },
    {
      question: "How often are new devotionals published?",
      answer: "We aim to publish a new devotional every day. Our contributors come from various backgrounds, ensuring a rich and varied spiritual experience."
    },
    {
      question: "How can I contribute a devotional?",
      answer: "Visit our Contribute page to submit your devotional. We have clear guidelines to help you craft a meaningful, concise reflection that can inspire others."
    },
    {
      question: "Can I share devotionals on social media?",
      answer: "Absolutely! We encourage sharing our devotionals to spread inspiration. Each devotional page has social media sharing buttons to make this easy."
    }
  ]

  return (
    <Layout>
      <Head>
        <title>FAQ - A Little God Time</title>
        <meta name="description" content="Frequently asked questions about A Little God Time, our daily devotional platform." />
      </Head>

      <div className="max-width-container py-12">
        <div className="max-w-3xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-4xl font-bold text-dark-blue mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our devotional platform.
            </p>
          </header>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-soft-blue/10 p-6 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="text-2xl font-semibold text-dark-blue mb-4">
                  {faq.question}
                </h2>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}
