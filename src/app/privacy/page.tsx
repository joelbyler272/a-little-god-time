import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | A Little God Time',
  description: 'Privacy policy and data protection information for A Little God Time',
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            We collect information you provide directly to us when you create an account,
            including your name and email address. We also collect data about your usage
            of our devotional content and interactions with other users.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>To provide and maintain our devotional services</li>
            <li>To notify you about changes to our service</li>
            <li>To allow you to participate in interactive features</li>
            <li>To provide customer support</li>
            <li>To analyze usage patterns and improve our content</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="text-gray-700 mb-4">
            We implement appropriate security measures to protect your personal
            information. However, no method of transmission over the Internet is
            100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
          <p className="text-gray-700 mb-4">
            We use cookies to enhance your experience on our website. You can set
            your browser to refuse all or some browser cookies, but this may
            affect your ability to use certain features.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
          <p className="text-gray-700 mb-4">
            We may use third-party services that collect, monitor, and analyze
            user data to improve our service. These third parties have their own
            privacy policies addressing how they use such information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy, please contact us
            through our contact form or at the email address provided on our website.
          </p>
        </section>
      </div>
    </div>
  );
}
