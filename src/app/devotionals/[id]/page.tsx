import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDevotionalById } from '@/lib/devotionals';
import SocialShareButtons from '@/components/SocialShareButtons';
import CommentSection from '@/components/CommentSection';
import { Suspense } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const devotional = await getDevotionalById(params.id);
  
  if (!devotional) {
    return {
      title: 'Devotional Not Found',
    };
  }

  return {
    title: `${devotional.title} | A Little God Time`,
    description: devotional.excerpt,
    openGraph: {
      title: devotional.title,
      description: devotional.excerpt,
      type: 'article',
      authors: [devotional.author],
      publishedTime: devotional.publishedAt,
    },
  };
}

export default async function DevotionalPage({ params }: PageProps) {
  const devotional = await getDevotionalById(params.id);

  if (!devotional) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {devotional.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <time dateTime={devotional.publishedAt}>
            {new Date(devotional.publishedAt).toLocaleDateString()}
          </time>
          <span>•</span>
          <span>{devotional.author}</span>
          {devotional.readingTime && (
            <>
              <span>•</span>
              <span>{devotional.readingTime} min read</span>
            </>
          )}
        </div>
      </header>

      <div className="prose prose-blue max-w-none mb-12">
        {devotional.content}
      </div>

      <div className="border-t border-gray-200 pt-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Scripture Reference</h2>
        <blockquote className="italic text-gray-700 border-l-4 border-blue-500 pl-4">
          {devotional.scripture.text}
          <footer className="text-sm mt-2">
            — {devotional.scripture.reference}
          </footer>
        </blockquote>
      </div>

      <div className="border-t border-gray-200 pt-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Prayer Focus</h2>
        <p className="text-gray-700">{devotional.prayer}</p>
      </div>

      {devotional.reflection && (
        <div className="border-t border-gray-200 pt-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">For Reflection</h2>
          <p className="text-gray-700">{devotional.reflection}</p>
        </div>
      )}

      <div className="border-t border-gray-200 pt-6 mb-8">
        <h3 className="text-lg font-medium mb-4">Share this devotional</h3>
        <SocialShareButtons
          url={`/devotionals/${params.id}`}
          title={devotional.title}
          description={devotional.excerpt}
        />
      </div>

      <div className="border-t border-gray-200 pt-8">
        <Suspense fallback={<LoadingSpinner />}>
          <CommentSection devotionalId={params.id} />
        </Suspense>
      </div>
    </article>
  );
}
