import React from "react";

const ResetPassword = () => {
  return (
    <div className="bg-[#f7f9fb] min-h-screen flex flex-col text-[#191c1e]">

      {/* Main */}
      <main className="flex-grow flex items-center justify-center px-6 pt-28 pb-12 relative overflow-hidden">
        {/* Background Blur */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-200 blur-[120px] rounded-full"></div>

          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-200 blur-[100px] rounded-full"></div>
        </div>

        {/* Card */}
        <section className="w-full max-w-md bg-white p-8 md:p-10 rounded-2xl shadow-2xl border border-slate-200/40 text-center">
          {/* Top */}
          <div className="mb-8">
            <div className="w-16 h-16 bg-indigo-100 text-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-4xl">
                lock_reset
              </span>
            </div>

            <h1 className="font-[Manrope] text-3xl font-bold text-indigo-900 mb-2">
              Reset Password
            </h1>

            <p className="text-slate-500 text-base leading-relaxed">
              Enter your email address and we'll send you a secure link to reset
              your password.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6 text-left">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-slate-600 ml-1"
              >
                Email Address
              </label>

              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <span className="material-symbols-outlined text-[20px]">
                    mail
                  </span>
                </div>

                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  className="w-full pl-11 pr-4 py-4 bg-slate-50 rounded-xl border border-slate-300 focus:border-indigo-700 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200 placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-4 bg-indigo-900 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-800 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
            >
              Send Recovery Link

              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </button>
          </form>

          {/* Back */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-indigo-900 font-semibold hover:underline hover:opacity-80 transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">
                arrow_back
              </span>

              Back to Login
            </a>
          </div>
        </section>

        {/* Decorative Image */}
        <div className="hidden lg:block absolute left-12 bottom-12 w-64 h-64 opacity-20">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUQ0S6HHhCLAWvjqAOOvXQn3uUne6cjbhzHQhNFI2EoIJZ-gUOvGXi4BnmKEB_l2BhaDE2v1cCWc25n-u3MTqcTFEDvx4YNgYZjBMkWdUed7e8dg3cdwVqIuSuLd0ZF4nihap2r33KvFjv33Qh8oKwQB87Mu83hc9cYHc7MyauuD4VUIdGGZFfpbsk_f70zXJyrt-HY_zX-RhGKbv_cCPGmsdrLSJvBRt9Qa3gBgqb-4hJsAhY_l3QXQY96aDiTi4dAxZVOVMvZi4"
            alt="Medical Illustration"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </main>

    </div>
  );
};

export default ResetPassword;