import { useState } from 'react'

export default function NewsletterSignup({ className = '' }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Here you would typically make an API call to your backend
      // For now, we'll simulate a successful signup
      await new Promise(resolve => setTimeout(resolve, 1000))
      setStatus('success')
      setEmail('')
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <div className={`bg-primary/10 rounded-lg p-8 ${className}`}>
      <h3 className="font-serif text-2xl mb-4 text-text">
        Daily Inspiration in Your Inbox
      </h3>
      <p className="text-text/80 mb-6">
        Sign up to receive our daily devotionals and stay connected with God throughout your day.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="sr-only">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading' || status === 'success'}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-secondary focus:ring-1 focus:ring-secondary disabled:opacity-50"
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="w-full bg-secondary text-white py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50"
        >
          {status === 'loading' ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Signing up...
            </span>
          ) : status === 'success' ? (
            <span className="flex items-center justify-center">
              <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Subscribed!
            </span>
          ) : (
            'Subscribe to Daily Devotionals'
          )}
        </button>

        {status === 'error' && (
          <p className="text-red-500 text-sm text-center">
            Something went wrong. Please try again later.
          </p>
        )}

        <p className="text-xs text-text/60 text-center">
          You can unsubscribe at any time. We respect your privacy.
        </p>
      </form>
    </div>
  )
}