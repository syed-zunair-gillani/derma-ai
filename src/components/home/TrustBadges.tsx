import { Shield, Building2, Lock, Activity } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    { icon: Shield, label: "HIPAA COMPLIANT" },
    { icon: Building2, label: "MAYO CLINIC PARTNER" },
    { icon: Lock, label: "256-BIT ENCRYPTED" },
    { icon: Activity, label: "FDA CLEARED" }
  ];

  return (
    <section className="py-12 border-y border-gray-100 bg-[#fbfcfd]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 md:justify-between items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <badge.icon size={20} className="text-gray-500" />
              <span className="text-xs font-bold text-gray-600 tracking-widest">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
