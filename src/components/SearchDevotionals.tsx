'use client';

import { useState, useEffect } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import { Search, Filter, X } from 'lucide-react';

interface SearchDevotionalsProps {
  onSearch: (params: SearchParams) => void;
  initialFilters?: SearchParams;
}

interface SearchParams {
  query: string;
  category?: string;
  month?: string;
  author?: string;
  tags?: string[];
}

const categories = ['Prayer', 'Worship', 'Faith', 'Hope', 'Love', 'Wisdom', 'Grace'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                'July', 'August', 'September', 'October', 'November', 'December'];

export default function SearchDevotionals({ onSearch, initialFilters = { query: '' } }: SearchDevotionalsProps) {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [searchParams, setSearchParams] = useState<SearchParams>(initialFilters);
  const debouncedSearchParams = useDebounce(searchParams, 300);

  useEffect(() => {
    onSearch(debouncedSearchParams);
  }, [debouncedSearchParams, onSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  const clearFilters = () => {
    setSearchParams({ query: '' });
    setIsAdvancedOpen(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          name="query"
          value={searchParams.query}
          onChange={handleInputChange}
          placeholder="Search devotionals..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
        >
          <Filter size={16} />
          Advanced Filters
        </button>
        {Object.keys(searchParams).length > 1 && (
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 text-sm text-red-600 hover:text-red-700"
          >
            <X size={16} />
            Clear Filters
          </button>
        )}
      </div>

      {isAdvancedOpen && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              name="category"
              value={searchParams.category || ''}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Month
            </label>
            <select
              name="month"
              value={searchParams.month || ''}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">All Months</option>
              {months.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Author
            </label>
            <input
              type="text"
              name="author"
              value={searchParams.author || ''}
              onChange={handleInputChange}
              placeholder="Search by author..."
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
      )}
    </div>
  );
}
