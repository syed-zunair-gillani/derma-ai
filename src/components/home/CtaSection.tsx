import { ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-5xl mx-auto bg-[#0a0f2c] rounded-[3rem] px-6 py-16 md:py-20 text-center relative overflow-hidden shadow-2xl">
        {/* Abstract background shapes */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready for absolute clarity?</h2>
          <p className="text-blue-100/80 mb-10 text-lg">
            Start your first scan today and join thousands of people taking control of their skin health with AI precision.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#0a0f2c] font-bold py-4 px-8 rounded-full transition-transform hover:scale-105 shadow-xl">
              Start Your Free Scan <ArrowRight size={18} />
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border border-white/30 text-white font-medium py-4 px-8 rounded-full transition-colors hover:bg-white/10">
              Talk to a Specialist
            </button>
          </div>
          
          <p className="text-xs text-blue-200/60 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400"></span>
            Your medical data is encrypted and 100% private.
          </p>
        </div>
      </div>
    </section>
  );
}
