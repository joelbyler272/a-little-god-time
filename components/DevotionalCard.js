import Link from 'next/link'

export default function DevotionalCard({ devotional, featured = false }) {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden ${featured ? 'p-8' : 'p-6'}`}>
      <div className="space-y-4">
        <div className="space-y-2">
          {featured && (
            <span className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-2">
              Today's Devotional
            </span>
          )}
          <h3 className={`font-serif ${featured ? 'text-2xl' : 'text-xl'} text-text`}>
            {devotional.title}
          </h3>
          <p className="text-sm text-text/60">
            {devotional.date}
          </p>
        </div>

        <blockquote className="italic text-text/80 border-l-4 border-secondary pl-4">
          "{devotional.scripture}"
          <footer className="mt-1 text-sm">
            - {devotional.reference}
          </footer>
        </blockquote>

        <p className="text-text/80">
          {devotional.excerpt}
        </p>

        <div className="pt-4 flex items-center justify-between">
          <Link
            href={`/devotional/${devotional.slug}`}
            className="text-secondary hover:underline inline-flex items-center"
          >
            Read More
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <div className="flex space-x-2">
            <button 
              className="text-text/60 hover:text-secondary p-1" 
              title="Share"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: devotional.title,
                    text: devotional.excerpt,
                    url: window.location.origin + `/devotional/${devotional.slug}`
                  })
                }
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
            <button 
              className="text-text/60 hover:text-secondary p-1" 
              title="Save"
              onClick={() => {/* Handle save functionality */}}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}