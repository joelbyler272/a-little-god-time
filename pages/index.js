import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="max-width-container py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-dark-blue mb-6">
            Take a Moment. Find Peace. 
            <br />
            Spend A Little God Time
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Daily devotionals to inspire, encourage, and connect you with divine wisdom.
          </p>
          <div className="space-x-4">
            <Link 
              href="/devotional" 
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

        <div className="card p-8 bg-white shadow-lg">
          <h2 className="text-3xl font-bold text-dark-blue mb-6">Today's Reflection</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Embracing God's Love</h3>
              <p className="text-gray-600 mb-4">
                In the quiet moments of our day, we find solace in understanding 
                that we are deeply loved, unconditionally and eternally.
              </p>
              <blockquote className="italic border-l-4 border-soft-blue pl-4 mb-4">
                "See what great love the Father has lavished on us, that we should be 
                called children of God!" - 1 John 3:1
              </blockquote>
              <Link 
                href="/devotional" 
                className="btn-primary inline-block"
              >
                Read Full Devotional
              </Link>
            </div>
            <div className="bg-light-gold/10 rounded-lg p-6 flex items-center justify-center">
              <div className="w-full h-64 bg-soft-blue/20 flex items-center justify-center">
                <p className="text-dark-blue text-center">Devotional Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/archive" 
            className="nav-link text-xl"
          >
            Explore Full Archive
          </Link>
        </div>
      </div>
    </Layout>
  );
}
