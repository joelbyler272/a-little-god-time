import { useEffect } from 'react';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Optional: Add any global initialization logic here
  }, []);

  return (
    <>
      <Head>
        <title>A Little God Time</title>
        <meta name="description" content="A daily devotional platform" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="min-h-screen bg-light-gray text-dark-gray font-body">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
