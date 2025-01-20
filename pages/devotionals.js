import React, { useState } from 'react';
import Layout from '../components/Layout';

export default function Devotionals() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const devotionals = [
    { 
      id: 1, 
      title: 'Finding Peace in Uncertain Times', 
      author: 'Sarah Johnson', 
      date: 'January 15, 2025', 
      category: 'Hope', 
      excerpt: 'In moments of doubt, learn how to anchor your faith...',
      imageUrl: '/api/placeholder/300/200'
    },
    { 
      id: 2, 
      title: 'The Power of Gratitude', 
      author: 'Michael Rodriguez', 
      date: 'January 10, 2025', 
      category: 'Thankfulness', 
      excerpt: 'Discover how gratitude can transform your spiritual journey...',
      imageUrl: '/api/placeholder/300/200'
    },
    { 
      id: 3, 
      title: 'Overcoming Challenges with Faith', 
      author: 'Emily Chen', 
      date: 'January 5, 2025', 
      category: 'Strength', 
      excerpt: 'Explore biblical strategies for facing life\'s difficulties...',
      imageUrl: '/api/placeholder/300/200'
    },
  ];

  const categories = ['All', 'Hope', 'Thankfulness', 'Strength', 'Love'];

  const filteredDevotionals = devotionals.filter(dev => 
    (selectedCategory === 'all' || dev.category.toLowerCase() === selectedCategory.toLowerCase()) &&
    (dev.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     dev.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Layout>
      <div className="max-width-container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-dark-blue mb-4">
            Daily Devotionals
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Inspiring readings to nourish your soul and deepen your spiritual connection
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Search Input */}
          <div className="w-full md:w-1/2">
            <input 
              type="text" 
              placeholder="Search devotionals..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-soft-blue rounded-full focus:ring-2 focus:ring-golden-yellow"
            />
          </div>

          {/* Category Filters */}
          <div className="flex space-x-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category.toLowerCase())}
                className={`
                  px-4 py-2 rounded-full text-sm transition-all duration-300
                  ${selectedCategory === category.toLowerCase() 
                    ? 'bg-golden-yellow text-white' 
                    : 'bg-soft-blue/10 text-dark-blue hover:bg-soft-blue/20'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Devotionals Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredDevotionals.map((devotional) => (
            <div 
              key={devotional.id} 
              className="card hover:scale-105 transform transition duration-300"
            >
              <img 
                src={devotional.imageUrl} 
                alt={devotional.title} 
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-soft-green bg-soft-green/10 px-3 py-1 rounded-full">
                    {devotional.category}
                  </span>
                  <span className="text-sm text-gray-500">{devotional.date}</span>
                </div>
                <h3 className="text-2xl font-semibold text-dark-blue mb-3">
                  {devotional.title}
                </h3>
                <p className="text-gray-600 mb-4">{devotional.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">By {devotional.author}</span>
                  <button className="nav-link">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredDevotionals.length === 0 && (
          <div className="text-center py-12 bg-soft-blue/10 rounded-lg">
            <h3 className="text-2xl text-dark-blue mb-4">No Devotionals Found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
