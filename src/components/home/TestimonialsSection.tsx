import Image from 'next/image';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Verified User",
      image: "/images/avatar1.png",
      quote: "\"DermAI identified a spot that my regular physician missed. It saved me months of uncertainty and likely more serious complications.\""
    },
    {
      name: "Marcus Thompson",
      role: "Verified User",
      image: "/images/avatar2.png",
      quote: "\"The UI is so clean and easy to use. I was nervous about medical tech, but DermAI feels like a helpful partner in my health journey.\""
    },
    {
      name: "Elena Rodriguez",
      role: "Verified User",
      image: "/images/avatar3.png",
      quote: "\"Being able to scan moles at home gives me so much peace of mind. The clinical reports are professional and accepted by my dermatologist.\""
    }
  ];

  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a1f4c] mb-16">Trusted by 50,000+ Users</h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="text-[#0b103e] fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-8 italic leading-relaxed">
                {t.quote}
              </p>
              
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500 font-medium">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
