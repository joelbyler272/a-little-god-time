import type { Metadata } from 'next'
import '../styles/global.css'

export const metadata: Metadata = {
  title: 'A Little God Time',
  description: 'A daily devotional platform to encourage spiritual growth',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="bg-gray-100 py-4 text-center">
            <p>&copy; {new Date().getFullYear()} A Little God Time. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  )
}
