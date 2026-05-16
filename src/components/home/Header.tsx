'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSidebar } from '@/src/context/SidebarContext';

export default function Header() {
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();
  const isScanPage = pathname === '/scan';

  return (
    <header className="w-full flex items-center justify-between px-4 md:px-6 py-4 bg-white/80 backdrop-blur-md fixed top-0 z-50 border-b border-gray-100">
      <div className="flex items-center gap-2">
        {/* Toggle Button - Only shown on Scan Page */}
        {isScanPage && (
          <button 
            onClick={toggleSidebar}
            className="pt-2 hover:bg-slate-100 lg:hidden rounded-lg transition-colors text-slate-500 hover:text-indigo-600 mr-1"
            title="Toggle Sidebar"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        )}

        {/* Logo */}
        <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
          <span className="text-white font-bold text-lg">D</span>
        </div>
        <Link href="/" className="font-bold text-xl text-gray-900 tracking-tight">Dermic</Link>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <Link href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">How it Works</Link>
        <Link href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Clinical Accuracy</Link>
        <Link href="/pricing" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Pricing</Link>
        <Link href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">For Doctors</Link>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-gray-900 hidden sm:block">Login</Link>
        <Link href="/register" className="bg-[#0b103e] hover:bg-blue-900 text-white text-sm font-medium py-2 px-5 rounded-lg transition-all shadow-md hover:shadow-lg">
          Sign Up
        </Link>
      </div>
    </header>
  );
}
