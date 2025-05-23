'use client';

import Link from 'next/link';

export default function UserCard({
  id,
  name,
  email,
  active,
}: {
  id: string;
  name: string;
  email: string;
  active: boolean;
}) {
  return (
    <Link href={`/messages/${id}`}>
      <div className="bg-white p-4 rounded shadow-sm flex justify-between items-center hover:bg-blue-50 cursor-pointer transition">
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
        <div className="flex gap-2 items-center">
          
          <span
            className={`text-xs px-2 py-1 rounded ${
              active ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
            }`}
          >
            {active ? 'Active' : 'Inactive'}
          </span>
        </div>
      </div>
    </Link>
  );
}
