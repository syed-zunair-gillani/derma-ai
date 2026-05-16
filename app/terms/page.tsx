import React from "react";

const TermsOfService = () => {
  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] font-sans">
      {/* Main */}
      <main className="px-8 pb-24 pt-32">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <header className="mb-12">
            <div className="mb-6 inline-flex items-center rounded-full bg-indigo-100 px-4 py-1.5 text-indigo-900">
              <span className="text-sm font-semibold tracking-wide">
                LEGAL DOCUMENTATION
              </span>
            </div>

            <h1 className="mb-4 text-5xl font-bold text-[#000666]">
              Terms of Service
            </h1>

            <p className="text-lg text-slate-600">
              Last Updated: October 24, 2024
            </p>
          </header>

          <div className="flex flex-col gap-12 lg:flex-row">
            {/* Sidebar */}
            <aside className="hidden lg:block lg:w-1/4">
              <div className="sticky top-24 rounded-xl border border-slate-100 bg-white p-6 shadow-[0_4px_20px_0_rgba(26,35,126,0.04)]">
                <h4 className="mb-4 text-lg font-semibold text-[#000666]">
                  Navigation
                </h4>

                <ul className="space-y-3">
                  <li>
                    <a
                      href="#acceptance"
                      className="block text-slate-600 transition-colors hover:text-[#000666]"
                    >
                      Acceptance of Terms
                    </a>
                  </li>

                  <li>
                    <a
                      href="#use-of-service"
                      className="block text-slate-600 transition-colors hover:text-[#000666]"
                    >
                      Use of Service
                    </a>
                  </li>

                  <li>
                    <a
                      href="#ai-disclaimer"
                      className="block text-slate-600 transition-colors hover:text-[#000666]"
                    >
                      AI Accuracy Disclaimer
                    </a>
                  </li>

                  <li>
                    <a
                      href="#privacy"
                      className="block text-slate-600 transition-colors hover:text-[#000666]"
                    >
                      Privacy & Data
                    </a>
                  </li>

                  <li>
                    <a
                      href="#liability"
                      className="block text-slate-600 transition-colors hover:text-[#000666]"
                    >
                      Limitation of Liability
                    </a>
                  </li>
                </ul>
              </div>
            </aside>

            {/* Content */}
            <article className="rounded-xl border border-slate-100 bg-white p-8 shadow-[0_4px_20px_0_rgba(26,35,126,0.04)] md:p-12 lg:w-3/4">
              <div className="space-y-10">
                {/* Section 1 */}
                <section id="acceptance">
                  <h2 className="mb-4 text-3xl font-semibold text-[#000666]">
                    1. Acceptance of Terms
                  </h2>

                  <p className="leading-relaxed text-slate-700">
                    By accessing or using the DermAI diagnostic application,
                    you agree to be bound by these Terms of Service. If you do
                    not agree to all of these terms, do not use our services.
                    These terms constitute a legally binding agreement between
                    you and DermAI AI Diagnostics.
                  </p>
                </section>

                {/* Section 2 */}
                <section id="use-of-service">
                  <h2 className="mb-4 text-3xl font-semibold text-[#000666]">
                    2. Use of Service
                  </h2>

                  <p className="mb-4 leading-relaxed text-slate-700">
                    DermAI provides AI-powered skin analysis tools for
                    educational and informational purposes only. You agree to:
                  </p>

                  <ul className="list-disc space-y-3 pl-5 text-slate-700">
                    <li>
                      Provide accurate and complete information during
                      registration.
                    </li>
                    <li>
                      Maintain the security of your account credentials.
                    </li>
                    <li>
                      Use the service only for lawful purposes and in accordance
                      with these terms.
                    </li>
                  </ul>
                </section>

                {/* Disclaimer */}
                <section
                  id="ai-disclaimer"
                  className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-8"
                >
                  <div className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-4xl text-indigo-900">
                      medical_services
                    </span>

                    <div>
                      <h2 className="mb-4 text-3xl font-semibold text-[#000666]">
                        3. AI Accuracy Disclaimer
                      </h2>

                      <p className="mb-4 leading-relaxed text-slate-700">
                        <strong>DERMAI IS NOT A MEDICAL DIAGNOSIS.</strong> The
                        results provided by our AI are based on probabilistic
                        models and are for informational guidance only.
                      </p>

                      <div className="mb-4 inline-flex items-center rounded-lg bg-white px-3 py-1 shadow-sm">
                        <div className="mr-2 h-2 w-2 rounded-full bg-red-500"></div>

                        <span className="text-sm font-semibold uppercase text-[#000666]">
                          Critical Notice
                        </span>
                      </div>

                      <p className="italic leading-relaxed text-slate-700">
                        Our technology does not replace the professional
                        judgment of a board-certified dermatologist. Always seek
                        the advice of your physician or other qualified health
                        provider with any questions you may have regarding a
                        medical condition.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Privacy */}
                <section id="privacy">
                  <h2 className="mb-4 text-3xl font-semibold text-[#000666]">
                    4. Privacy & Data Protection
                  </h2>

                  <p className="leading-relaxed text-slate-700">
                    Your privacy is paramount. DermAI utilizes enterprise-grade
                    encryption to protect your biometric and personal data. We
                    comply with relevant healthcare data protection standards,
                    including HIPAA and GDPR where applicable. Please refer to
                    our full Privacy Policy for detailed information on how we
                    collect and process your data.
                  </p>
                </section>

                {/* Liability */}
                <section id="liability">
                  <h2 className="mb-4 text-3xl font-semibold text-[#000666]">
                    5. Limitation of Liability
                  </h2>

                  <p className="leading-relaxed text-slate-700">
                    To the maximum extent permitted by law, DermAI and its
                    affiliates shall not be liable for any indirect,
                    incidental, special, consequential, or punitive damages, or
                    any loss of profits or revenues, whether incurred directly
                    or indirectly, or any loss of data, use, goodwill, or other
                    intangible losses resulting from your use of the service.
                  </p>
                </section>

                {/* Footer Note */}
                <div className="mt-12 border-t border-slate-100 pt-10">
                  <p className="italic text-slate-500">
                    For any questions regarding these terms, please contact our
                    legal department at{" "}
                    <a
                      href="mailto:legal@dermai.com"
                      className="font-semibold text-indigo-900 underline"
                    >
                      legal@dermai.com
                    </a>
                    .
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>

    </div>
  );
};

export default TermsOfService;