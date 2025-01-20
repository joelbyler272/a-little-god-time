import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  const [activeTab, setActiveTab] = useState('devotional');

  const tabs = [
    { 
      id: 'devotional', 
      title: 'Daily Devotional', 
      content: (
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
      )
    },
    { 
      id: 'community', 
      title: 'Community', 
      content: (
        <div className="card p-8 bg-white shadow-lg">
          <h2 className="text-3xl font-bold text-dark-blue mb-6">Community Connections</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: 'Bible Study Group', 
                description: 'Wednesdays at 7 PM', 
                link: '#' 
              },
              { 
                title: 'Youth Ministry', 
                description: 'Fridays at 6 PM', 
                link: '#' 
              },
              { 
                title: 'Volunteer Opportunities', 
                description: 'Serve your community', 
                link: '#' 
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-soft-blue/10 p-6 rounded-lg hover:bg-soft-blue/20 transition-colors"
              >
                <h3 className="text-xl font-semibold text-dark-blue mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Link href={item.link} className="nav-link">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      )
    },
  ];

  return (
    <Layout>
      <div className="max-width-container py-12">
        {/* Tabbed Navigation */}
        <div className="flex justify-center mb-8 bg-white rounded-full shadow-md p-2 max-w-xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                px-6 py-3 rounded-full transition-all duration-300
                ${activeTab === tab.id 
                  ? 'bg-golden-yellow text-white' 
                  : 'text-dark-blue hover:bg-soft-blue/20'
                }
              `}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="mt-8">
          {tabs.find(tab => tab.id === activeTab)?.content}
        </div>
      </div>
    </Layout>
  );
}
