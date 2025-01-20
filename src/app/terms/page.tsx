import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | A Little God Time',
  description: 'Terms of service and user agreement for A Little God Time',
};

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700 mb-4">
            By accessing and using A Little God Time, you accept and agree to be
            bound by the terms and provisions of this agreement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. User Accounts</h2>
          <p className="text-gray-700 mb-4">
            You are responsible for maintaining the confidentiality of your account
            and password. You agree to accept responsibility for all activities that
            occur under your account.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Content Guidelines</h2>
          <p className="text-gray-700 mb-4">
            Users who contribute content must ensure it is:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Respectful and appropriate for a Christian devotional context</li>
            <li>Original or properly attributed</li>
            <li>Free from harmful or offensive material</li>
            <li>In compliance with all applicable laws and regulations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
          <p className="text-gray-700 mb-4">
            The content, organization, graphics, design, and other matters related
            to the Site are protected under applicable copyrights and other
            proprietary laws. Users retain copyright of their original contributions
            while granting us a license to display and distribute the content.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
          <p className="text-gray-700 mb-4">
            A Little God Time and its operators shall not be liable for any
            damages arising out of or in connection with the use or inability
            to use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Modifications to Service</h2>
          <p className="text-gray-700 mb-4">
            We reserve the right to modify or discontinue, temporarily or
            permanently, the service with or without notice. You agree that we
            shall not be liable to you or any third party for any modification,
            suspension, or discontinuance of the service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
          <p className="text-gray-700 mb-4">
            These terms shall be governed by and construed in accordance with
            the laws of the jurisdiction in which we operate, without regard
            to its conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
          <p className="text-gray-700 mb-4">
            For any questions about these Terms of Service, please contact us
            through our contact form or at the email address provided on our website.
          </p>
        </section>
      </div>
    </div>
  );
}
