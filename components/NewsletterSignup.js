import React, { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement actual newsletter signup logic
    console.log('Subscribing email:', email)
    setSubscribed(true)
    setEmail('')
  }

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
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow px-4 py-3 border border-soft-blue rounded-l-lg focus:ring-2 focus:ring-golden-yellow"
            />
            <button 
              type="submit" 
              className="btn-primary rounded-l-none"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="bg-golden-yellow/10 p-6 rounded-lg max-w-md mx-auto">
            <p className="text-dark-blue font-semibold">
              Thank you for subscribing! Your daily inspiration is on its way.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
