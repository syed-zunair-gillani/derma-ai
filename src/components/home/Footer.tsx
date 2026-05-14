import Link from 'next/link';
import { Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">D</span>
            </div>
            <span className="font-bold text-lg text-gray-900 tracking-tight">DermAI</span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            Advancing dermatological care through high-precision artificial intelligence and clinical imagery.
          </p>
          {/* Social icons placeholder */}
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer transition-colors flex items-center justify-center">
               <span className="text-gray-500 text-xs">in</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer transition-colors flex items-center justify-center">
               <span className="text-gray-500 text-xs">tw</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-4">Product</h4>
          <ul className="space-y-3">
            <li><Link href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">How it Works</Link></li>
            <li><Link href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Clinical Trials</Link></li>
            <li><Link href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Pricing</Link></li>
            <li><Link href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">FDA Status</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
          <ul className="space-y-3">
            <li><Link href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Medical Disclaimer</Link></li>
            <li><Link href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Terms of Service</Link></li>
            <li><Link href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Contact Support</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-4">Newsletter</h4>
          <p className="text-sm text-gray-500 mb-4">Stay updated on skin health research.</p>
          <div className="flex border border-gray-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-100 transition-all">
            <input 
              type="email" 
              placeholder="Email" 
              className="px-4 py-2 w-full text-sm outline-none"
            />
            <button className="bg-[#0b103e] text-white px-4 hover:bg-blue-900 transition-colors">
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-gray-100 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-400">
          © 2026 DermAI Diagnostics. Not a replacement for professional medical advice.
        </p>
      </div>
    </footer>
  );
}
