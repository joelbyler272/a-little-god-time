import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="font-serif text-2xl text-text">
              A Little God Time
            </Link>
            <div className="space-x-6">
              <Link href="/devotional" className="text-text hover:text-secondary">
                Today's Devotional
              </Link>
              <Link href="/archive" className="text-text hover:text-secondary">
                Archive
              </Link>
              <Link href="/contribute" className="text-text hover:text-secondary">
                Contribute
              </Link>
              <Link href="/about" className="text-text hover:text-secondary">
                About
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-text text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-xl mb-4">A Little God Time</h3>
              <p className="text-white/80">
                Daily devotionals to inspire your walk with God.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/devotional" className="text-white/80 hover:text-white">
                    Today's Devotional
                  </Link>
                </li>
                <li>
                  <Link href="/contribute" className="text-white/80 hover:text-white">
                    Submit a Devotional
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white/80 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/80 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4">Connect</h3>
              <p className="text-white/80 mb-4">
                Join our community to receive daily inspiration.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-lg flex-grow text-text"
                />
                <button
                  type="submit"
                  className="bg-secondary text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/80">
              © {new Date().getFullYear()} A Little God Time. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}