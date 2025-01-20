import React, { useState } from 'react';
import Link from 'next/link';
import NewsletterSignup from './NewsletterSignup';

export default function Layout({ children, showNewsletter = true }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-light-gray">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-width-container flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-dark-blue">
            A Little God Time
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/devotionals" className="nav-link">Devotionals</Link>
            <Link href="/archive" className="nav-link">Archive</Link>
            <Link href="/contribute" className="nav-link">Contribute</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
            <Link href="/faq" className="nav-link">FAQ</Link>
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
              <Link href="/" className="block nav-link">Home</Link>
              <Link href="/devotionals" className="block nav-link">Devotionals</Link>
              <Link href="/archive" className="block nav-link">Archive</Link>
              <Link href="/contribute" className="block nav-link">Contribute</Link>
              <Link href="/about" className="block nav-link">About</Link>
              <Link href="/contact" className="block nav-link">Contact</Link>
              <Link href="/faq" className="block nav-link">FAQ</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Newsletter Signup */}
      {showNewsletter && <NewsletterSignup />}

      {/* Footer */}
      <footer className="bg-dark-blue text-white py-12">
        <div className="max-width-container grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">A Little God Time</h3>
            <p>Inspiring daily devotionals to nurture your spiritual journey</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-light-gold">Home</Link></li>
              <li><Link href="/devotionals" className="hover:text-light-gold">Devotionals</Link></li>
              <li><Link href="/contribute" className="hover:text-light-gold">Contribute</Link></li>
              <li><Link href="/faq" className="hover:text-light-gold">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-light-gold">Facebook</a>
              <a href="#" className="text-white hover:text-light-gold">Instagram</a>
              <a href="#" className="text-white hover:text-light-gold">Twitter</a>
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
