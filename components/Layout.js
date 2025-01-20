import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavLink = ({ href, children }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link 
      href={href} 
      className={`
        nav-link px-4 py-2 text-lg font-medium transition-all duration-300
        ${isActive 
          ? 'text-golden-yellow border-b-2 border-golden-yellow' 
          : 'text-dark-blue hover:text-golden-yellow'
        }
      `}
    >
      {children}
    </Link>
  );
};

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-light-gray">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-width-container flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-dark-blue">
            A Little God Time
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/devotionals">Devotionals</NavLink>
            <NavLink href="/contribute">Contribute</NavLink>
            <NavLink href="/about">About</NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-dark-blue focus:outline-none"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/devotionals">Devotionals</NavLink>
              <NavLink href="/contribute">Contribute</NavLink>
              <NavLink href="/about">About</NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-dark-blue text-white py-12">
        <div className="max-width-container grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">A Little God Time</h3>
            <p>Inspiring daily devotionals to nurture your spiritual journey.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-light-gold">Home</Link></li>
              <li><Link href="/devotionals" className="hover:text-light-gold">Devotionals</Link></li>
              <li><Link href="/contribute" className="hover:text-light-gold">Contribute</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-2">
              <p>Email: inspire@alittleGodtime.com</p>
              <div className="flex space-x-4">
                {/* Placeholder for social icons */}
                <a href="#" className="text-white hover:text-light-gold">FB</a>
                <a href="#" className="text-white hover:text-light-gold">IG</a>
                <a href="#" className="text-white hover:text-light-gold">TW</a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-soft-blue pt-4">
          <p>&copy; {new Date().getFullYear()} A Little God Time. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
