import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import 'react-quill/dist/quill.snow.css';
import { PrismaClient } from '@prisma/client';

// Dynamically import a rich text editor
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('devotionals');

  // Devotional Form State
  const [devotionalTitle, setDevotionalTitle] = useState('');
  const [devotionalAuthor, setDevotionalAuthor] = useState('');
  const [devotionalContent, setDevotionalContent] = useState('');
  const [devotionalScripture, setDevotionalScripture] = useState('');
  const [devotionalCategory, setDevotionalCategory] = useState('');

  // Newsletter Content State
  const [newsletterTitle, setNewsletterTitle] = useState('');
  const [newsletterContent, setNewsletterContent] = useState('');

  // Contact and Contribution Submissions State
  const [contactSubmissions, setContactSubmissions] = useState([]);
  const [contributionSubmissions, setContributionSubmissions] = useState([]);

  useEffect(() => {
    // Check authentication when component mounts
    const storedAuth = localStorage.getItem('admin_authenticated');
    setIsAuthenticated(storedAuth === 'true');

    // Fetch submissions if authenticated
    if (storedAuth === 'true') {
      fetchContactSubmissions();
      fetchContributionSubmissions();
    }
  }, []);

  const fetchContactSubmissions = async () => {
    try {
      const response = await fetch('/api/contact-submissions');
      if (response.ok) {
        const data = await response.json();
        setContactSubmissions(data);
      }
    } catch (error) {
      console.error('Error fetching contact submissions:', error);
    }
  };

  const fetchContributionSubmissions = async () => {
    try {
      const response = await fetch('/api/contribution-submissions');
      if (response.ok) {
        const data = await response.json();
        setContributionSubmissions(data);
      }
    } catch (error) {
      console.error('Error fetching contribution submissions:', error);
    }
  };

  const handleLogin = () => {
    if (password === 'Wind-Unpiloted8-Grass') {
      setIsAuthenticated(true);
      localStorage.setItem('admin_authenticated', 'true');
      fetchContactSubmissions();
      fetchContributionSubmissions();
    } else {
      alert('Incorrect password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_authenticated');
  };

  const handleDevotionalSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/devotionals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: devotionalTitle,
          author: devotionalAuthor,
          content: devotionalContent,
          scripture: devotionalScripture,
          category: devotionalCategory,
          isPublished: true,
        }),
      });

      if (response.ok) {
        alert('Devotional added successfully');
        setDevotionalTitle('');
        setDevotionalAuthor('');
        setDevotionalContent('');
        setDevotionalScripture('');
        setDevotionalCategory('');
      } else {
        alert('Failed to add devotional');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newsletterTitle, content: newsletterContent }),
      });

      if (response.ok) {
        alert('Newsletter content saved');
        setNewsletterTitle('');
        setNewsletterContent('');
      } else {
        alert('Failed to save newsletter');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

  const handleMarkAsResolved = async (submissionId, type) => {
    try {
      const response = await fetch(`/api/${type}-submissions/${submissionId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isResolved: true }),
      });

      if (response.ok) {
        if (type === 'contact') {
          fetchContactSubmissions();
        } else {
          fetchContributionSubmissions();
        }
      }
    } catch (error) {
      console.error('Error marking as resolved:', error);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-soft-blue/10">
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold text-center mb-6">Admin Login</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full px-4 py-2 border border-soft-blue rounded-lg mb-4"
          />
          <button onClick={handleLogin} className="w-full btn-primary">
            Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-width-container py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-dark-blue">Admin Dashboard</h1>
        <Link href="/" className="btn-secondary">
          Back to Site
        </Link>
      </div>

      <div className="flex mb-8">
        {['Devotionals', 'Contact Submissions', 'Contributions', 'Newsletter'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase().replace(' ', ''))}
            className={`px-4 py-2 mr-2 rounded ${
              activeTab === tab.toLowerCase().replace(' ', '')
                ? 'bg-golden-yellow text-white'
                : 'bg-soft-blue/10 text-dark-blue'
            }`}
          >
            {tab}
          </button>
        ))}
        <button onClick={handleLogout} className="ml-auto btn-secondary">
          Logout
        </button>
      </div>

      {activeTab === 'devotionals' && (
        <div className="grid md:grid-cols-2 gap-8">
          <form onSubmit={handleDevotionalSubmit} className="space-y-4">
            <h2 className="text-2xl font-semibold">Add Devotional</h2>
            <input
              type="text"
              value={devotionalTitle}
              onChange={(e) => setDevotionalTitle(e.target.value)}
              placeholder="Devotional Title"
              required
              className="w-full px-4 py-2 border border-soft-blue rounded-lg"
            />
            <input
              type="text"
              value={devotionalAuthor}
              onChange={(e) => setDevotionalAuthor(e.target.value)}
              placeholder="Author Name"
              required
              className="w-full px-4 py-2 border border-soft-blue rounded-lg"
            />
            <input
              type="text"
              value={devotionalScripture}
              onChange={(e) => setDevotionalScripture(e.target.value)}
              placeholder="Scripture Reference (Optional)"
              className="w-full px-4 py-2 border border-soft-blue rounded-lg"
            />
            <select
              value={devotionalCategory}
              onChange={(e) => setDevotionalCategory(e.target.value)}
              className="w-full px-4 py-2 border border-soft-blue rounded-lg"
            >
              <option value="">Select Category</option>
              <option value="Hope">Hope</option>
              <option value="Faith">Faith</option>
              <option value="Love">Love</option>
              <option value="Strength">Strength</option>
            </select>
            <ReactQuill
              value={devotionalContent}
              onChange={setDevotionalContent}
              placeholder="Devotional Content"
              className="bg-white"
            />
            <button type="submit" className="btn-primary">
              Add Devotional
            </button>
          </form>
        </div>
      )}

      {activeTab === 'contactsubmissions' && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Contact Form Submissions</h2>
          <div className="grid gap-4">
            {contactSubmissions.map((submission) => (
              <div
                key={submission.id}
                className={`p-4 rounded-lg border ${
                  submission.isResolved ? 'bg-gray-50 border-gray-200' : 'bg-white border-soft-blue'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{submission.subject}</h3>
                    <p className="text-sm text-gray-600">From: {submission.name} ({submission.email})</p>
                    <p className="mt-2">{submission.message}</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Submitted: {new Date(submission.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  {!submission.isResolved && (
                    <button
                      onClick={() => handleMarkAsResolved(submission.id, 'contact')}
                      className="btn-secondary text-sm"
                    >
                      Mark as Resolved
                    </button>
                  )}
                </div>
              </div>
            ))}
            {contactSubmissions.length === 0 && (
              <p className="text-gray-500">No contact submissions yet.</p>
            )}
          </div>
        </div>
      )}

      {activeTab === 'contributions' && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Contribution Submissions</h2>
          <div className="grid gap-4">
            {contributionSubmissions.map((submission) => (
              <div
                key={submission.id}
                className={`p-4 rounded-lg border ${
                  submission.isResolved ? 'bg-gray-50 border-gray-200' : 'bg-white border-soft-blue'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{submission.title}</h3>
                    <p className="text-sm text-gray-600">By: {submission.author}</p>
                    <div className="mt-2 prose max-w-none" dangerouslySetInnerHTML={{ __html: submission.content }} />
                    <p className="text-sm text-gray-500 mt-2">
                      Submitted: {new Date(submission.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  {!submission.isResolved && (
                    <button
                      onClick={() => handleMarkAsResolved(submission.id, 'contribution')}
                      className="btn-secondary text-sm"
                    >
                      Mark as Reviewed
                    </button>
                  )}
                </div>
              </div>
            ))}
            {contributionSubmissions.length === 0 && (
              <p className="text-gray-500">No contribution submissions yet.</p>
            )}
          </div>
        </div>
      )}

      {activeTab === 'newsletter' && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Create Newsletter</h2>
          <input
            type="text"
            value={newsletterTitle}
            onChange={(e) => setNewsletterTitle(e.target.value)}
            placeholder="Newsletter Title"
            required
            className="w-full px-4 py-2 border border-soft-blue rounded-lg"
          />
          <ReactQuill
            value={newsletterContent}
            onChange={setNewsletterContent}
            placeholder="Newsletter Content"
            className="bg-white"
          />
          <button onClick={handleNewsletterSubmit} className="btn-primary">
            Save Newsletter
          </button>
        </div>
      )}
    </div>
  );
}