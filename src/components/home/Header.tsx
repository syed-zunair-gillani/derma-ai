import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md fixed top-0 z-50 border-b border-gray-100">
      <div className="flex items-center gap-2">
        {/* Logo */}
        <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
          <span className="text-white font-bold text-lg">D</span>
        </div>
        <span className="font-bold text-xl text-gray-900 tracking-tight">DermAI</span>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        <Link href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">How it Works</Link>
        <Link href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Clinical Accuracy</Link>
        <Link href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Pricing</Link>
        <Link href="#" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">For Doctors</Link>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <Link href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 hidden sm:block">Login</Link>
        <Link href="#" className="bg-[#0b103e] hover:bg-blue-900 text-white text-sm font-medium py-2 px-5 rounded-xl transition-all shadow-md hover:shadow-lg">
          Sign Up
        </Link>
      </div>
    </header>
  );
}
