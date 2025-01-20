'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push('/')}
      className="flex items-center text-gray-600 hover:text-gray-900"
    >
      <ArrowLeft className="w-5 h-5 mr-2" />
      Back to Home
    </button>
  );
}