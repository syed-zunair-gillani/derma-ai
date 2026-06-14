'use client'

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useSidebar } from '@/src/context/SidebarContext';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const { isOpen, toggleSidebar } = useSidebar();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isScanPage = pathname === '/scan';

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("token"));
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
    document.cookie = "token=; path=/; max-age=0";
    document.cookie = "refresh_token=; path=/; max-age=0";
    setIsAuthenticated(false);
    router.push("/");
  };

  return (
    <header className="w-full flex items-center justify-between px-4 md:px-6 py-4 bg-white/80 backdrop-blur-md fixed top-0 z-50 border-b border-gray-100">
      <div className="flex items-center gap-2">
        {/* Toggle Button - Only shown on Scan Page when sidebar is hidden */}
        {isScanPage && !isOpen && (
          <button
            onClick={toggleSidebar}
            className="hover:bg-slate-100 rounded-lg transition-colors text-slate-500 hover:text-indigo-600 mr-1"
            title="Toggle Sidebar"
          >
            <svg width="24px" height="24px" viewBox="0 0 28 28" fill="none"><path d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z" fill="#000000" /><path d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z" fill="#000000" /><path d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z" fill="#000000" /></svg>          </button>
        )}

        {/* Logo */}
        <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
          <span className="text-white font-bold text-lg">D</span>
        </div>
        <Link href="/" className="font-bold text-xl text-gray-900 tracking-tight">Dermic</Link>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <Link href="/how-it-works" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">How it Works</Link>
        <Link href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Clinical Accuracy</Link>
        <Link href="/pricing" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Pricing</Link>
        <Link href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">For Doctors</Link>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <button onClick={handleLogout} className="text-sm font-medium text-gray-700 hover:text-gray-900 hidden sm:block">
            Logout
          </button>
        ) : (
          <>
            <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-gray-900 hidden sm:block">Login</Link>
            <Link href="/register" className="bg-[#0b103e] hover:bg-blue-900 text-white text-sm font-medium py-2 px-5 rounded-lg transition-all shadow-md hover:shadow-lg">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
