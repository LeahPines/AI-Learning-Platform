import React from 'react';
import UserManagementPanel from '../components/adminDashboard/UserManagementPanel';
import CategoryManagementPanel from '../components/adminDashboard/categoryPanel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AdminDashboard: React.FC = () => (
  <div className="min-h-screen bg-gray-50 py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Tabs defaultValue="users" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="categories">Content Management</TabsTrigger>
        </TabsList>

        <TabsContent value="users">
          <UserManagementPanel />
        </TabsContent>

        <TabsContent value="categories">
          <CategoryManagementPanel />
        </TabsContent>
      </Tabs>
      <Link to="/">
        <Button className="mt-4">Go to Home</Button>
      </Link>
    </div>
  </div>
);

export default AdminDashboard;
