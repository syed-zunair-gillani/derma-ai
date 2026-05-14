import Image from 'next/image';
import { Layers, Zap } from 'lucide-react';

export default function ScienceSection() {
  return (
    <section className="py-24 bg-[#0a0f2c] text-white overflow-hidden relative">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <div className="relative order-2 lg:order-1">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-white/10 shadow-2xl">
            <Image 
              src="/images/science.png" 
              alt="Skin Layer Neural Network Analysis" 
              fill
              className="object-cover"
            />
            {/* Overlay label */}
            <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-xs font-medium text-blue-50 tracking-wide">Live Neural Mapping</span>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative z-10 order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Beyond the Naked Eye</h2>
          <p className="text-blue-100/80 mb-10 text-lg leading-relaxed">
            Our proprietary vision transformers analyze textures at a sub-millimeter level, identifying patterns that are invisible to humans. We don&apos;t just see skin—we see data.
          </p>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <Layers className="text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Hyper-Spectral Processing</h3>
                <p className="text-blue-100/70">Analyzing 16+ layers of dermis data for deeper insight.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                <Zap className="text-purple-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Instant Triage</h3>
                <p className="text-blue-100/70">Real-time severity scoring to prioritize urgent concerns.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
