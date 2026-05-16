import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen">
      <main className="mx-auto max-w-7xl px-6 pb-24 pt-28">
        {/* Hero Header */}
        <section className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-green-900">
            <span className="material-symbols-outlined text-sm fill-1">
              verified_user
            </span>

            <span className="text-xs font-semibold uppercase tracking-widest">
              Privacy Committed
            </span>
          </div>

          <h1 className="mb-4 text-5xl font-extrabold text-[#000666]">
            Privacy Policy
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
            Transparency and clinical security are at the core of our AI
            diagnostic system. Learn how DermAI protects your sensitive
            dermatological data.
          </p>

          <p className="mt-4 text-sm italic text-slate-400">
            Last updated: October 24, 2024
          </p>
        </section>

        {/* Key Commitments */}
        <section className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-2xl bg-white p-8 text-center shadow-[0_4px_20px_0_rgba(26,35,126,0.04)]">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100">
              <span className="material-symbols-outlined text-3xl text-[#000666]">
                encrypted
              </span>
            </div>

            <h3 className="mb-2 text-2xl font-semibold text-[#000666]">
              End-to-End Encryption
            </h3>

            <p className="text-slate-600">
              All skin images and personal health data are encrypted in transit
              and at rest.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-white p-8 text-center shadow-[0_4px_20px_0_rgba(26,35,126,0.04)]">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
              <span className="material-symbols-outlined text-3xl text-green-900">
                clinical_notes
              </span>
            </div>

            <h3 className="mb-2 text-2xl font-semibold text-[#000666]">
              HIPAA Compliant
            </h3>

            <p className="text-slate-600">
              Our infrastructure strictly adheres to international medical
              security standards.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-indigo-100 bg-white p-8 text-center shadow-[0_4px_20px_0_rgba(26,35,126,0.04)]">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
              <span className="material-symbols-outlined text-3xl text-red-600">
                do_not_disturb_on
              </span>
            </div>

            <h3 className="mb-2 text-2xl font-semibold text-[#000666]">
              No Data Sale
            </h3>

            <p className="text-slate-600">
              We never sell your personal information or medical data to
              third-party advertisers.
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <div className="space-y-12">
          {/* Section 1 */}
          <div className="flex flex-col gap-8 md:flex-row">
            <aside className="md:w-1/3">
              <div className="mb-2 flex items-center gap-3 text-[#000666]">
                <span className="text-4xl font-bold opacity-20">01</span>

                <h2 className="text-3xl font-bold">Data Collection</h2>
              </div>

              <div className="h-1 w-12 rounded-full bg-[#000666]"></div>
            </aside>

            <div className="rounded-2xl bg-white p-8 shadow-[0_4px_20px_0_rgba(26,35,126,0.04)] md:w-2/3 md:p-12">
              <p className="mb-6 text-lg leading-relaxed text-slate-700">
                To provide high-accuracy AI diagnostics, DermAI collects two
                primary types of information:
              </p>

              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-indigo-700">
                    photo_camera
                  </span>

                  <div>
                    <strong className="mb-1 block text-[#000666]">
                      Dermatological Imagery
                    </strong>

                    <span className="text-slate-600">
                      High-resolution images of skin irregularities or areas of
                      concern uploaded for diagnostic analysis.
                    </span>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="material-symbols-outlined text-indigo-700">
                    person
                  </span>

                  <div>
                    <strong className="mb-1 block text-[#000666]">
                      Personal Identifiers
                    </strong>

                    <span className="text-slate-600">
                      Name, date of birth, and biological sex to ensure
                      clinical context for diagnostic results.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col gap-8 md:flex-row">
            <aside className="md:w-1/3">
              <div className="mb-2 flex items-center gap-3 text-[#000666]">
                <span className="text-4xl font-bold opacity-20">02</span>

                <h2 className="text-3xl font-bold">Usage Policy</h2>
              </div>

              <div className="h-1 w-12 rounded-full bg-[#000666]"></div>
            </aside>

            <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-[0_4px_20px_0_rgba(26,35,126,0.04)] md:w-2/3 md:p-12">
              <div className="absolute -right-10 -top-10 opacity-5">
                <span className="material-symbols-outlined text-[160px]">
                  query_stats
                </span>
              </div>

              <p className="mb-6 text-slate-600">
                Your data is utilized solely for the following purposes:
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <h4 className="mb-2 text-sm font-bold uppercase text-[#000666]">
                    Diagnostic Accuracy
                  </h4>

                  <p className="text-sm text-slate-600">
                    Improving the AI's ability to identify specific skin
                    conditions.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <h4 className="mb-2 text-sm font-bold uppercase text-[#000666]">
                    Medical Records
                  </h4>

                  <p className="text-sm text-slate-600">
                    Maintaining a secure history for tracking changes in your
                    skin health.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col gap-8 md:flex-row">
            <aside className="md:w-1/3">
              <div className="mb-2 flex items-center gap-3 text-[#000666]">
                <span className="text-4xl font-bold opacity-20">03</span>

                <h2 className="text-3xl font-bold">
                  Retention & Sharing
                </h2>
              </div>

              <div className="h-1 w-12 rounded-full bg-[#000666]"></div>
            </aside>

            <div className="space-y-6 md:w-2/3">
              <div className="rounded-2xl bg-white p-8 shadow-[0_4px_20px_0_rgba(26,35,126,0.04)]">
                <div className="mb-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-green-700">
                    auto_delete
                  </span>

                  <h4 className="text-2xl font-semibold text-[#000666]">
                    Data Retention
                  </h4>
                </div>

                <p className="text-slate-600">
                  Records are kept for as long as your account remains active.
                  Upon account deletion, all personal identifiers are purged
                  within 30 days.
                </p>
              </div>

              <div className="rounded-2xl border-l-4 border-[#000666] bg-white p-8 shadow-[0_4px_20px_0_rgba(26,35,126,0.04)]">
                <div className="mb-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#000666]">
                    share_off
                  </span>

                  <h4 className="text-2xl font-semibold text-[#000666]">
                    Third-Party Sharing
                  </h4>
                </div>

                <p className="text-slate-600">
                  We do not share your medical data with insurance providers,
                  employers, or third-party marketing firms without your
                  explicit consent.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="flex flex-col gap-8 md:flex-row">
            <aside className="md:w-1/3">
              <div className="mb-2 flex items-center gap-3 text-[#000666]">
                <span className="text-4xl font-bold opacity-20">04</span>

                <h2 className="text-3xl font-bold">User Rights</h2>
              </div>

              <div className="h-1 w-12 rounded-full bg-[#000666]"></div>
            </aside>

            <div className="rounded-2xl bg-white p-8 shadow-[0_4px_20px_0_rgba(26,35,126,0.04)] md:w-2/3 md:p-12">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100">
                    <span className="material-symbols-outlined">
                      export_notes
                    </span>
                  </div>

                  <div>
                    <h4 className="mb-1 text-2xl font-semibold text-[#000666]">
                      Right to Access & Portability
                    </h4>

                    <p className="text-slate-600">
                      You can download a complete record of your diagnostic
                      history and personal data at any time.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100">
                    <span className="material-symbols-outlined">
                      delete_forever
                    </span>
                  </div>

                  <div>
                    <h4 className="mb-1 text-2xl font-semibold text-[#000666]">
                      Right to Erasure
                    </h4>

                    <p className="text-slate-600">
                      You may request permanent deletion of your account and all
                      associated personal data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <section className="relative mt-24 overflow-hidden rounded-[24px] bg-[#1a237e] p-12 text-center text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_0%,transparent_70%)]"></div>
          </div>

          <h2 className="relative z-10 mb-4 text-4xl font-bold">
            Questions about your privacy?
          </h2>

          <p className="relative z-10 mx-auto mb-8 max-w-xl text-lg opacity-80">
            Our dedicated data protection officer is available to help you
            understand how we handle your information.
          </p>

          <button className="relative z-10 rounded-xl bg-white px-8 py-4 font-bold text-[#1a237e] transition-transform active:scale-95">
            Contact Privacy Support
          </button>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;