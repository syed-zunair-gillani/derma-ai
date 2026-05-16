import Image from 'next/image';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden bg-gradient-to-b from-[#f8fafe] to-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100/80 border border-green-200 text-green-800 text-xs font-semibold mb-6">
            <ShieldCheck size={14} className="text-green-600" />
            Clinical Diagnostic Engine
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-[#1a1f4c] leading-[1.1] mb-6 tracking-tight">
            Precision<br />
            Diagnostics for Your<br />
            Skin Health
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
            Harness the power of world-class AI to detect skin conditions early with clinical-grade accuracy, all from the comfort of your home.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href={"/scan"}  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0b103e] hover:bg-blue-900 text-white font-medium py-3.5 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Start Your Scan <ArrowRight size={18} />
            </Link>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-medium py-3 px-8 rounded-xl transition-all">
              How it Works
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* Decorative background blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-400/20 rounded-full blur-[100px] -z-10"></div>
          
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-gray-900 bg-gray-900 aspect-[9/16] max-h-[550px] w-full max-w-[500px] mx-auto">
            <Image 
              src="/images/unnamed.png" 
              alt="AI Skin Scan on Mobile" 
              fill
              className="object-cover"
              priority
            />
            {/* Accuracy floating badge */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex items-center gap-3 border border-white/50 w-[85%]">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                <ShieldCheck size={16} className="text-green-600" />
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900">99.4% Accuracy</div>
                <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Clinically Validated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
