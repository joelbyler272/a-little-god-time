import { redirect } from 'next/navigation';
import AdminDashboard from './components/AdminDashboard';
import PasswordProtection from './components/PasswordProtection';
import BackButton from './components/BackButton';

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-4 bg-white shadow-sm">
        <BackButton />
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <PasswordProtection password="Wind-Unpiloted8-Grass">
          <AdminDashboard />
        </PasswordProtection>
      </div>
    </div>
  );
}