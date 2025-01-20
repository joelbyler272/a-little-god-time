'use client';

import { Facebook, Twitter, Linkedin, Mail, Link as LinkIcon } from 'lucide-react';

interface SocialShareButtonsProps {
  url: string;
  title: string;
  description?: string;
}

export default function SocialShareButtons({ url, title, description }: SocialShareButtonsProps) {
  const fullUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${url}`;
  
  const shareData = {
    title,
    text: description,
    url: fullUrl,
  };

  const handleShare = async (platform: string) => {
    try {
      switch (platform) {
        case 'native':
          if (navigator.share) {
            await navigator.share(shareData);
          }
          break;
        case 'facebook':
          window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`,
            '_blank'
          );
          break;
        case 'twitter':
          window.open(
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}`,
            '_blank'
          );
          break;
        case 'linkedin':
          window.open(
            `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`,
            '_blank'
          );
          break;
        case 'email':
          window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(
            `Check out this devotional: ${fullUrl}`
          )}`;
          break;
        case 'copy':
          await navigator.clipboard.writeText(fullUrl);
          // You might want to add a toast notification here
          break;
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div className="flex flex-wrap gap-4">
      <button
        onClick={() => handleShare('facebook')}
        className="flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        aria-label="Share on Facebook"
      >
        <Facebook size={20} />
        <span className="hidden sm:inline">Facebook</span>
      </button>

      <button
        onClick={() => handleShare('twitter')}
        className="flex items-center gap-2 px-4 py-2 rounded-md bg-sky-500 text-white hover:bg-sky-600 transition-colors"
        aria-label="Share on Twitter"
      >
        <Twitter size={20} />
        <span className="hidden sm:inline">Twitter</span>
      </button>

      <button
        onClick={() => handleShare('linkedin')}
        className="flex items-center gap-2 px-4 py-2 rounded-md bg-blue-700 text-white hover:bg-blue-800 transition-colors"
        aria-label="Share on LinkedIn"
      >
        <Linkedin size={20} />
        <span className="hidden sm:inline">LinkedIn</span>
      </button>

      <button
        onClick={() => handleShare('email')}
        className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-600 text-white hover:bg-gray-700 transition-colors"
        aria-label="Share via Email"
      >
        <Mail size={20} />
        <span className="hidden sm:inline">Email</span>
      </button>

      <button
        onClick={() => handleShare('copy')}
        className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
        aria-label="Copy Link"
      >
        <LinkIcon size={20} />
        <span className="hidden sm:inline">Copy Link</span>
      </button>
    </div>
  );
}
