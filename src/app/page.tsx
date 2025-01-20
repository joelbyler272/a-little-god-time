export default function HomePage() {
  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Welcome to A Little God Time
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Daily devotionals to strengthen your faith and deepen your relationship with God.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Today's Devotional
            </h2>
            <p className="text-gray-600">
              Start your day with inspiration and guidance from God's word.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Browse Devotionals
            </h2>
            <p className="text-gray-600">
              Explore our collection of devotionals by topic, author, or scripture.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}