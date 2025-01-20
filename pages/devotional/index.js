import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function Devotional() {
  const [devotionals, setDevotionals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDevotionals = async () => {
      try {
        const response = await fetch('/api/devotionals');
        if (!response.ok) {
          throw new Error('Failed to fetch devotionals');
        }
        const data = await response.json();
        setDevotionals(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchDevotionals();
  }, []);

  const categories = ['All', 'Hope', 'Faith', 'Love', 'Strength'];

  const filteredDevotionals = devotionals.filter(dev => 
    (selectedCategory.toLowerCase() === 'all' || 
     dev.category?.toLowerCase() === selectedCategory.toLowerCase()) &&
    (dev.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     dev.author?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (isLoading) {
    return (
      <Layout>
        <div className="max-width-container py-12 text-center">
          <p className="text-xl text-gray-600">Loading devotionals...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="max-width-container py-12 text-center">
          <p className="text-xl text-red-600">{error}</p>
        </div>
      </Layout>
    );
  }

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
        {filteredDevotionals.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {filteredDevotionals.map((devotional) => (
              <div 
                key={devotional.id} 
                className="card hover:scale-105 transform transition duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    {devotional.category && (
                      <span className="text-sm text-soft-green bg-soft-green/10 px-3 py-1 rounded-full">
                        {devotional.category}
                      </span>
                    )}
                    <span className="text-sm text-gray-500">
                      {new Date(devotional.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-dark-blue mb-3">
                    {devotional.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {devotional.excerpt || devotional.content.substring(0, 150) + '...'}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      By {devotional.author}
                    </span>
                    <Link 
                      href={`/devotional/${devotional.id}`} 
                      className="nav-link"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-soft-blue/10 rounded-lg">
            <h3 className="text-2xl text-dark-blue mb-4">No Devotionals Found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Archive Button */}
        <div className="text-center mt-12">
          <Link 
            href="/archive" 
            className="btn-primary inline-block"
          >
            View Full Archive
          </Link>
        </div>
      </div>
    </Layout>
  );
}
