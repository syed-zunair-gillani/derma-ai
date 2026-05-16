"use client"
import React, { useState } from "react";
import {
  Menu,
  Biohazard,
  ShieldPlus,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";
import Link from "next/link";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#f7f9fb] text-[#191c1e]">
      {/* Background Decoration */}
      <div className="absolute right-0 top-0 -z-10 hidden h-[50vh] w-1/3 opacity-20 lg:block">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuACKj0BbNVlxXtNee9Ml8BnKCQ2rXAKbOnkdFWdgmMdMgVwhS_A0ioSocuebyPlKhG_joMziaZ8V8KdxJWhN-AjZTswLYNI6g3IVmUu-VdK4zH3LN7DUCAmRfFbqrhWiDxF4LslvtH5-3nErEEnaEXTxZPaD83PUwcWZfUQtUVDbvPkTEma8kg0gOpzNqL0yryFmgWryH856LRePS_oqPIiWuckP583XClsWkiP5M1SQGlvZZwr-FA3MX6NAE2DwAbJqg-fxPbxoIs"
          alt="Medical Laboratory"
          className="h-full w-full rounded-bl-[100px] object-cover"
        />
      </div>

      {/* Main */}
      <main className="flex flex-1 items-center justify-center px-6 pt-28 pb-16">
        <div className="w-full max-w-md">
          {/* Branding Icon */}
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-indigo-100 p-4">
              <ShieldPlus
                size={42}
                className="text-indigo-900"
              />
            </div>
          </div>

          {/* Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_4px_20px_rgba(0,6,102,0.04)] md:p-12">
            {/* Title */}
            <div className="mb-10 text-center">
              <h2 className="mb-2 text-4xl font-bold text-indigo-900">
                Create Account
              </h2>

              <p className="text-slate-500">
                Join DermAI for precision skin diagnostics
                and professional care.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-slate-500"
                >
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="name"
                    type="text"
                    placeholder="Dr. John Doe"
                    className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 outline-none transition focus:border-indigo-900 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-slate-500"
                >
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="email"
                    type="email"
                    placeholder="john@hospital.com"
                    className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 outline-none transition focus:border-indigo-900 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-slate-500"
                >
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-12 outline-none transition focus:border-indigo-900 focus:ring-2 focus:ring-indigo-100"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-indigo-900"
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3 py-1">
                <input
                  id="terms"
                  type="checkbox"
                  className=" h-5 w-5 rounded border-slate-300 text-indigo-900 focus:ring-indigo-900"
                />

                <label
                  htmlFor="terms"
                  className="text-sm text-slate-500"
                >
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="font-semibold text-indigo-900 hover:underline"
                  >
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="font-semibold text-indigo-900 hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-xl bg-indigo-900 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-indigo-900/10 transition hover:bg-indigo-800 active:scale-[0.98]"
              >
                Create Account
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-8 border-t border-slate-200 pt-8 text-center">
              <p className="text-slate-500">
                Already have an account?
                <Link
                  href="/login"
                  className="ml-1 font-bold text-indigo-900 hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>

          {/* Security Badge */}
          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2 rounded-full border border-slate-300 bg-green-50 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-700 opacity-75"></span>

                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-700"></span>
              </span>

              <span className="text-xs font-semibold tracking-[0.15em] text-slate-700">
                HIPAA COMPLIANT & ENCRYPTED
              </span>
            </div>
          </div>
        </div>
      </main>

    
    </div>
  );
};

export default RegisterPage;