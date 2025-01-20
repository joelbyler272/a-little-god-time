'use client';

import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calendar, Users, BookOpen, MessageSquare } from 'lucide-react';
import LoadingSpinner from '../LoadingSpinner';

interface Stats {
  totalDevotionals: number;
  totalViews: number;
  totalComments: number;
  readerCount: number;
  monthlyStats: {
    month: string;
    devotionals: number;
    views: number;
    comments: number;
  }[];
}

export default function ContributorStats() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedMetric, setSelectedMetric] = useState<'devotionals' | 'views' | 'comments'>('views');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/contributor/stats');
        if (!response.ok) {
          throw new Error('Failed to fetch stats');
        }
        const data = await response.json();
        setStats(data);
      } catch (err) {
        console.error('Error fetching stats:', err);
        setError('Failed to load statistics. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error || !stats) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="text-blue-600 hover:text-blue-700"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Devotionals</p>
              <p className="text-2xl font-semibold">{stats.totalDevotionals}</p>
            </div>
            <BookOpen className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Views</p>
              <p className="text-2xl font-semibold">{stats.totalViews}</p>
            </div>
            <Calendar className="w-8 h-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Comments</p>
              <p className="text-2xl font-semibold">{stats.totalComments}</p>
            </div>
            <MessageSquare className="w-8 h-8 text-purple-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Reader Count</p>
              <p className="text-2xl font-semibold">{stats.readerCount}</p>
            </div>
            <Users className="w-8 h-8 text-orange-500" />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Monthly Performance</h3>
          <select
            value={selectedMetric}
            onChange={(e) => setSelectedMetric(e.target.value as typeof selectedMetric)}
            className="border border-gray-300 rounded-md px-3 py-1"
          >
            <option value="views">Views</option>
            <option value="devotionals">Devotionals</option>
            <option value="comments">Comments</option>
          </select>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={stats.monthlyStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey={selectedMetric}
                fill={
                  selectedMetric === 'views'
                    ? '#3B82F6'
                    : selectedMetric === 'devotionals'
                    ? '#10B981'
                    : '#8B5CF6'
                }
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
