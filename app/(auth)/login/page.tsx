"use client"
import React, { useState } from "react";
import {
    Menu,
    Eye,
    ShieldCheck,
    Apple,
} from "lucide-react";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-[#f7f9fb] text-[#191c1e]">
            {/* Main */}
            <main className="flex flex-1 items-center justify-center px-6 py-12">
                <div className="w-full max-w-md">
                    {/* Card */}
                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_4px_20px_rgba(0,6,102,0.04)] md:p-10">
                        {/* Heading */}
                        <div className="mb-8 text-center">
                            <h2 className="mb-2 text-4xl font-bold text-indigo-900">
                                Welcome Back
                            </h2>

                            <p className="text-slate-500">
                                Precision diagnostics for your skin health.
                            </p>
                        </div>

                        {/* Form */}
                        <form className="space-y-6">
                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-semibold text-slate-500"
                                >
                                    Email
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-700 focus:ring-2 focus:ring-indigo-100"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <div className="mb-2 flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="text-sm font-semibold text-slate-500"
                                    >
                                        Password
                                    </label>

                                    <a
                                        href="#"
                                        className="text-sm font-semibold text-indigo-700 hover:underline"
                                    >
                                        Forgot Password?
                                    </a>
                                </div>

                                <div className="relative">
                                    <input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-indigo-700 focus:ring-2 focus:ring-indigo-100"
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-indigo-700"
                                    >
                                        <Eye size={20} />
                                    </button>
                                </div>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full rounded-xl bg-indigo-900 py-4 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-800 hover:shadow-lg active:scale-[0.98]"
                            >
                                Sign In
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-200"></div>
                            </div>

                            <div className="relative flex justify-center">
                                <span className="bg-white px-4 text-xs uppercase tracking-[0.2em] text-slate-500">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        {/* Social Login */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* Google */}
                            <button className="group flex items-center justify-center gap-2 rounded-xl border border-slate-300 py-3 transition hover:bg-slate-50">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyAnYfah9AOCKqpN_oc3MZbtz9pv6d_P03DwGaMeE5w_G-Yv_NxYK-tOSA69eavnD7pfgzFW64uVwsqEmNkMY4fCvMX10iFIk3a96DEn_TMkuO4w9OXpg8E2rhbI5c15PJZkUULuaSAFv_CK7gNqEPiJ-m_fxYIygoVBHDRCCSR_4Zs4rJ3TGGAK8EL4BorumYxfPO7pU2alOTh7sm6XleQoxDWNlskH71l8tURsTx0bPX7M8V2PrP5st04E9DXQNHF7TZl1Ceot4"
                                    alt="Google"
                                    className="h-5 w-5 grayscale transition group-hover:grayscale-0"
                                />

                                <span className="text-sm font-semibold">
                                    Google
                                </span>
                            </button>

                            {/* Apple */}
                            <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 py-3 transition hover:bg-slate-50">
                                <Apple size={20} />

                                <span className="text-sm font-semibold">
                                    Apple
                                </span>
                            </button>
                        </div>

                        {/* Signup */}
                        <div className="mt-10 text-center">
                            <p className="text-slate-500">
                                Don't have an account?{" "}
                                <a
                                    href="#"
                                    className="font-semibold text-indigo-700 hover:underline"
                                >
                                    Sign Up
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Trust Badge */}
                    <div className="mt-8 flex items-center justify-center gap-2 opacity-60">
                        <ShieldCheck
                            size={16}
                            className="text-indigo-900"
                        />

                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                            HIPAA Compliant & Secure
                        </span>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default LoginPage;