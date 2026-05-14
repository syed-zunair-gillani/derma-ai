import { Scan, BrainCircuit, FileHeart } from 'lucide-react';

export default function StepsSection() {
  const steps = [
    {
      icon: Scan,
      title: "Capture",
      description: "Securely photograph any skin area using our guided scanning interface for optimal clarity.",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: BrainCircuit,
      title: "Analyze",
      description: "Our neural networks process millions of data points to identify markers with microscopic precision.",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600"
    },
    {
      icon: FileHeart,
      title: "Resolve",
      description: "Receive a comprehensive report with recommended next steps and specialist referrals if needed.",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f4c] mb-4">Three Steps to Peace of Mind</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16 text-lg">
          Our streamlined process combines intuitive design with powerful medical intelligence to provide instant clarity.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-50 to-white rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
              
              <div className={`w-12 h-12 ${step.iconBg} rounded-2xl flex items-center justify-center mb-6 relative z-10`}>
                <step.icon size={24} className={step.iconColor} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
