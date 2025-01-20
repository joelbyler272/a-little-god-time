import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ContributorStats from '@/components/dashboard/ContributorStats';
import DevotionalsList from '@/components/dashboard/DevotionalsList';
import ProfileSettings from '@/components/dashboard/ProfileSettings';

export const metadata: Metadata = {
  title: 'Dashboard | A Little God Time',
  description: 'Manage your devotionals and account settings',
};

export default async function DashboardPage() {
  const session = await getServerSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <Tabs defaultValue="devotionals" className="space-y-6">
        <TabsList>
          <TabsTrigger value="devotionals">My Devotionals</TabsTrigger>
          <TabsTrigger value="stats">Statistics</TabsTrigger>
          <TabsTrigger value="profile">Profile Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="devotionals">
          <DevotionalsList />
        </TabsContent>

        <TabsContent value="stats">
          <ContributorStats />
        </TabsContent>

        <TabsContent value="profile">
          <ProfileSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}
