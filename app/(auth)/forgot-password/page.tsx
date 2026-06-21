"use client"
import React, { useState, type FormEvent } from "react";
import { Mail, ArrowLeft, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { forgotPassword } from "@/src/services/auth";
import { toast } from "sonner";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await forgotPassword({ email });
      setSent(true);
      toast.success("Recovery link sent! Check your email.");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9fb] text-[#191c1e]">
      <main className="flex flex-1 items-center justify-center px-6 pt-28 pb-12">
        <div className="w-full max-w-md">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_4px_20px_rgba(0,6,102,0.04)] md:p-10">
            {!sent ? (
              <>
                <div className="mb-8 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 text-indigo-900">
                    <Mail size={28} />
                  </div>

                  <h2 className="mb-2 text-4xl font-bold text-indigo-900">
                    Reset Password
                  </h2>

                  <p className="text-slate-500">
                    Enter your email address and we&apos;ll send you a secure
                    link to reset your password.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-500"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-700 focus:ring-2 focus:ring-indigo-100"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-indigo-900 py-4 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-800 hover:shadow-lg active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Send Recovery Link"}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <Mail size={28} />
                </div>

                <h2 className="mb-2 text-3xl font-bold text-indigo-900">
                  Check Your Email
                </h2>

                <p className="text-slate-500">
                  We&apos;ve sent a recovery link to{" "}
                  <span className="font-semibold text-indigo-700">{email}</span>
                  . Please check your inbox and follow the instructions.
                </p>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-slate-200 text-center">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 hover:underline"
              >
                <ArrowLeft size={18} />
                Back to Login
              </Link>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 opacity-60">
            <ShieldCheck size={16} className="text-indigo-900" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              HIPAA Compliant & Secure
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForgotPasswordPage;
