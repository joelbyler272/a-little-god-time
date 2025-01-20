import React, { useState, useEffect } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if already subscribed from local storage
    const isSubscribed = localStorage.getItem('newsletter_subscribed') === 'true';
    setSubscribed(isSubscribed);
  }, []);

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      // Mock subscription logic
      localStorage.setItem('newsletter_email', email);
      localStorage.setItem('newsletter_subscribed', 'true');
      
      setSubscribed(true);
      setEmail('');
      
      // In a real app, you'd send this to a backend
      console.log('Subscribed email:', email);
    } catch (err) {
      setError('Unable to subscribe. Please try again.');
    }
  };

  return (
    <div className="bg-soft-blue/10 py-12">
      <div className="max-width-container text-center">
        <h2 className="text-3xl font-bold text-dark-blue mb-4">
          Daily Spiritual Inspiration
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Receive a meaningful devotional in your inbox every morning
        </p>
        
        {!subscribed ? (
          <form 
            onSubmit={handleSubmit} 
            className="max-w-md mx-auto flex flex-col items-center space-y-4"
            aria-labelledby="newsletter-heading"
          >
            <div className="w-full">
              <label 
                htmlFor="newsletter-email" 
                className="sr-only"
              >
                Email Address
              </label>
              <input 
                type="email" 
                id="newsletter-email"
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-required="true"
                className="w-full px-4 py-3 border border-soft-blue rounded-lg focus:ring-2 focus:ring-golden-yellow"
              />
              {error && (
                <p 
                  className="text-red-500 text-sm mt-2" 
                  role="alert"
                >
                  {error}
                </p>
              )}
            </div>
            <button 
              type="submit" 
              className="btn-primary"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div 
            className="bg-golden-yellow/10 p-6 rounded-lg max-w-md mx-auto"
            role="alert"
            aria-live="polite"
          >
            <p className="text-dark-blue font-semibold">
              Thank you for subscribing! Your daily inspiration is on its way.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
