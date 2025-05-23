'use client';

import { useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';
import { users } from '@/data/users';
import UserCard from '@/components/UserCard';
import Layout from '@/components/Layout';

function UsersPageContent() {
  const searchParams = useSearchParams();
  const filter = searchParams.get('filter'); // 🟢 reads ?filter=active
  const [search, setSearch] = useState('');

  const filteredUsers = users
    .filter((user) => {
      if (filter === 'active') return user.active;
      return true;
    })
    .filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <Layout onSearchChange={setSearch}>
      <h1 className="text-blue-400 text-2xl font-bold mb-4">
        {filter === 'active' ? 'Active Users' : 'Users'}
      </h1>

      <div className="text-blue-400 space-y-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <UserCard key={user.id} {...user} />
          ))
        ) : (
          <p className="text-gray-500">No users found.</p>
        )}
      </div>
    </Layout>
  );
}

export default function UsersPage() {
  return (
    <Suspense fallback={<div className="text-gray-500">Loading...</div>}>
      <UsersPageContent />
    </Suspense>
  );
}
