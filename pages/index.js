import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="max-width-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            A Little God Time
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover daily devotionals that nourish your soul and inspire your spiritual journey
          </p>
          <div className="space-x-4">
            <Link href="/devotionals" className="btn-primary inline-block">
              Explore Devotionals
            </Link>
            <Link href="/contribute" className="btn-secondary inline-block">
              Contribute
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Devotionals */}
      <section className="section-padding bg-light-gray">
        <div className="max-width-container">
          <h2 className="text-center mb-12">Featured Devotionals</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="card hover:scale-105 transform transition duration-300">
                <h3 className="text-2xl font-semibold mb-4">
                  Daily Reflection {item}
                </h3>
                <p className="text-gray-600 mb-4">
                  A short, meaningful meditation to center your day and connect with divine wisdom.
                </p>
                <Link href={`/devotional/${item}`} className="nav-link">
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="max-width-container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">Our Mission</h2>
            <p className="text-lg mb-4">
              A Little God Time is more than a platform—it's a spiritual companion 
              designed to provide moments of reflection, growth, and connection.
            </p>
            <p className="text-lg">
              We believe in the power of daily devotionals to transform lives 
              and draw us closer to divine purpose.
            </p>
          </div>
          <div className="bg-soft-blue rounded-lg p-8 text-white text-center shadow-lg">
            <blockquote className="italic mb-4">
              "Draw near to God, and he will draw near to you."
            </blockquote>
            <cite>- James 4:8</cite>
          </div>
        </div>
      </section>
    </div>
  );
}
