'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode, useState } from 'react';
import clsx from 'clsx';
import { Search, ArrowLeft } from 'lucide-react'; // You can use any icon lib

export default function Layout({
  children,
  onSearchChange,
}: {
  children: ReactNode;
  onSearchChange?: (value: string) => void;
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isSearchPage = pathname === "/users" || pathname === "/messages";
  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    onSearchChange?.(e.target.value);
  };

  // ✅ Back icon logic
  const isUserDetailPage = pathname.startsWith('/users/') && pathname.split('/').length === 3;
  const isMessageDetailPage = pathname.startsWith('/messages/') && pathname.split('/').length === 3;

  const showBackButton = isUserDetailPage || isMessageDetailPage;

  const handleBack = () => {
    if (isUserDetailPage) {
      router.push('/users');
    } else if (isMessageDetailPage) {
      router.push('/messages');
    } else {
      router.back();
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 relative">
      {isSidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          'bg-[#8dbeef] border-r border-gray-200 w-64 p-4 z-20 fixed h-full transition-transform duration-300 md:static md:translate-x-0',
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="md:hidden flex justify-end">
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-white text-2xl font-bold"
          >
            ✕
          </button>
        </div>
        <div className="text-2xl font-bold mb-6 text-white">BeyondChats</div>
        <nav className="flex flex-col gap-4 text-gray-100">
          <Link href="/" className={clsx('hover:text-blue-100', pathname === '/' && 'font-bold text-white')}>
            Dashboard
          </Link>
          <Link href="/messages" className={clsx('hover:text-blue-100', pathname === '/messages' && 'font-bold text-white')}>
            Messages
          </Link>
          <Link href="/users" className={clsx('hover:text-blue-100', pathname === '/users' && 'font-bold text-white')}>
            Users
          </Link>
          <Link href="/settings" className={clsx('hover:text-blue-100', pathname === '/settings' && 'font-bold text-white')}>
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col ml-0 md:ml-64">
        {/* Topbar */}
        <header className="bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center">
          {/* ✅ Mobile Sidebar Toggle or Back Icon */}
          {showBackButton ? (
            <button onClick={handleBack} className="md:hidden text-blue-600 text-xl mr-4">
              <ArrowLeft />
            </button>
          ) : (
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden text-gray-600 text-2xl"
            >
              ☰
            </button>
          )}

          {/* ✅ Search Bar or Title */}
          {isSearchPage ? (
            <div className="relative w-full max-w-sm">
              <input
                type="text"
                value={searchInput}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="w-full border rounded px-4 py-1 text-blue-600 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          ) : (
            <div className="text-xl font-bold text-blue-500">BeyondChats</div>
          )}

          <div className="w-8 h-8 rounded-full bg-gray-300 ml-4" />
        </header>

        {/* Main Content */}
        <main className="p-4 overflow-y-auto flex-1">{children}</main>
      </div>
    </div>
  );
}
