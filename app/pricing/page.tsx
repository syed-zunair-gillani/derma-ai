import React from "react";

const PricingPage = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Essential monitoring for skin awareness.",
      features: [
        "1 free scan per month",
        "Basic AI analysis engine",
        "Scan history access",
        "Priority human review",
      ],
      button: "Start for Free",
      outlined: true,
    },
    {
      name: "Pro",
      price: "$15",
      description: "Complete peace of mind with deep analysis.",
      badge: "Recommended",
      subtext: "/mo billed annually",
      note: "($19 billed monthly)",
      features: [
        "Unlimited clinical scans",
        "Advanced multi-image AI",
        "Detailed medical reports (PDF)",
        "Priority support & human triage",
        "Family account (up to 4)",
      ],
      button: "Upgrade to Pro",
      highlighted: true,
    },
    {
      name: "Clinical",
      price: "Custom",
      description: "Professional enterprise solutions.",
      note: "Contact for enterprise rates",
      features: [
        "API Access for clinics",
        "Bulk image processing",
        "HIPAA compliant data export",
        "Dedicated account manager",
      ],
      button: "Contact Sales",
    },
  ];

  const comparison = [
    {
      feature: "AI Analysis Precision",
      basic: "Standard",
      pro: "Clinical-Grade",
      clinical: "Customizable",
    },
    {
      feature: "Monthly Scans",
      basic: "1 Scan",
      pro: "Unlimited",
      clinical: "Unlimited",
    },
    {
      feature: "Human Review Triage",
      basic: "—",
      pro: "Included (48h)",
      clinical: "Included (2h)",
    },
    {
      feature: "Data Encryption",
      basic: "AES-256",
      pro: "AES-256 + MFA",
      clinical: "Enterprise VPN",
    },
    {
      feature: "API Integration",
      basic: "—",
      pro: "—",
      clinical: "Full SDK Access",
    },
    {
      feature: "Customer Support",
      basic: "Email",
      pro: "Priority Email",
      clinical: "24/7 Phone/Chat",
    },
  ];

  const faqs = [
    {
      question: "How accurate is DermAI's analysis?",
      answer:
        "Our AI model is trained on over 2 million clinical images and holds an 89.4% diagnostic accuracy rate in clinical trials.",
    },
    {
      question: "Is my medical data secure?",
      answer:
        "Yes. We use hospital-grade AES-256 encryption for all data at rest and in transit.",
    },
    {
      question: "Does insurance cover the Pro plan?",
      answer:
        "Many FSA/HSA accounts cover DermAI. We recommend checking with your provider.",
    },
  ];

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e]">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-[#f7f9fb] px-6 pt-28 pb-20">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-green-900">
              Flexible Plans
            </span>

            <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-[#000666]">
              Transparent Pricing for Peace of Mind
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Choose the clinical-grade analysis plan that fits your skin
              health journey.
            </p>

            {/* Billing Toggle */}
            <div className="mt-10 flex items-center justify-center gap-4">
              <span className="font-semibold text-slate-500">Monthly</span>

              <button className="relative h-8 w-14 rounded-full bg-[#1a237e] p-1">
                <div className="absolute right-1 top-1 h-6 w-6 rounded-full bg-white shadow-sm"></div>
              </button>

              <span className="font-semibold text-slate-900">Yearly</span>

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-900">
                Save 20%
              </span>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="px-6 pb-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative flex flex-col rounded-2xl bg-white p-8 shadow-[0_4px_20px_0_rgba(26,35,126,0.04)]
                ${
                  plan.highlighted
                    ? "scale-105 border-2 border-[#1a237e] shadow-xl"
                    : "border border-slate-100"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#1a237e] px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="mb-2 text-3xl font-bold text-[#000666]">
                    {plan.name}
                  </h3>

                  <p className="mb-6 text-slate-600">{plan.description}</p>

                  <div className="flex items-baseline">
                    <span className="text-5xl font-extrabold text-[#000666]">
                      {plan.price}
                    </span>

                    {plan.subtext && (
                      <span className="ml-2 text-slate-500">
                        {plan.subtext}
                      </span>
                    )}
                  </div>

                  {plan.note && (
                    <p className="mt-2 text-sm font-medium text-slate-500">
                      {plan.note}
                    </p>
                  )}
                </div>

                <ul className="mb-10 flex-grow space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-green-700">
                        check_circle
                      </span>

                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full rounded-xl px-6 py-4 font-bold transition-all active:scale-[0.98]
                  ${
                    plan.highlighted
                      ? "bg-[#1a237e] text-white shadow-lg hover:shadow-xl"
                      : plan.outlined
                      ? "border-2 border-[#1a237e] text-[#1a237e] hover:bg-indigo-50"
                      : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                  }`}
                >
                  {plan.button}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="bg-slate-100 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-14 text-center text-4xl font-bold text-[#000666]">
              Detailed Comparison
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-indigo-50">
                    <th className="border-b border-slate-100 p-6 text-lg font-bold">
                      Features
                    </th>
                    <th className="border-b border-slate-100 p-6 text-lg font-bold text-[#000666]">
                      Basic
                    </th>
                    <th className="border-b border-slate-100 p-6 text-lg font-bold text-[#000666]">
                      Pro
                    </th>
                    <th className="border-b border-slate-100 p-6 text-lg font-bold text-[#000666]">
                      Clinical
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {comparison.map((row, index) => (
                    <tr
                      key={index}
                      className="transition-colors hover:bg-slate-50"
                    >
                      <td className="border-b border-slate-100 p-6 font-semibold">
                        {row.feature}
                      </td>

                      <td className="border-b border-slate-100 p-6">
                        {row.basic}
                      </td>

                      <td className="border-b border-slate-100 p-6">
                        {row.pro}
                      </td>

                      <td className="border-b border-slate-100 p-6">
                        {row.clinical}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="overflow-hidden border-y border-slate-100 bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-12 text-center text-xs font-bold uppercase tracking-widest text-slate-500">
              Trusted & Compliant With Global Standards
            </p>

            <div className="flex flex-wrap items-center justify-center gap-16 opacity-70">
              {[
                "HIPAA COMPLIANT",
                "GDPR SECURE",
                "FDA CLEARED",
                "SOC2 TYPE II",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 font-extrabold tracking-tight text-[#000666]"
                >
                  <span className="material-symbols-outlined">
                    verified_user
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#f7f9fb] px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-14 text-center text-4xl font-bold text-[#000666]">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-100 bg-white p-8 shadow-[0_4px_20px_0_rgba(26,35,126,0.04)]"
                >
                  <button className="flex w-full items-center justify-between text-left">
                    <span className="text-xl font-semibold text-[#000666]">
                      {faq.question}
                    </span>

                    <span className="material-symbols-outlined">
                      expand_more
                    </span>
                  </button>

                  <p className="mt-4 leading-relaxed text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-20">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-[#1a237e] p-16 text-center text-white">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl"></div>

            <h2 className="relative z-10 text-4xl font-bold">
              Start your skin health journey today
            </h2>

            <p className="relative z-10 mx-auto mt-6 max-w-2xl text-lg text-indigo-100">
              Join over 100,000 users who trust DermAI for their monthly skin
              checkups.
            </p>

            <div className="relative z-10 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="rounded-xl bg-white px-8 py-4 font-bold text-[#1a237e] shadow-lg transition-all hover:bg-indigo-50 active:scale-95">
                Get Started Now
              </button>

              <button className="rounded-xl border-2 border-white/30 px-8 py-4 font-bold text-white transition-all hover:bg-white/10 active:scale-95">
                View Clinical Evidence
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PricingPage;