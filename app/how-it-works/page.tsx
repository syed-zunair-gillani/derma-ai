'use client'

import React from "react";
import Link from "next/link";

export default function HowItWorks() {
    return (
        <div className="bg-slate-50 min-h-screen pt-24 pb-20 overflow-hidden font-sans">
            {/* Background Decorative Gradients */}
            <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-10" />
            <div className="absolute top-80 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl -z-10" />

            {/* Hero Section */}
            <section className="max-w-6xl mx-auto px-6 text-center mt-12 mb-20 relative">
                <span className="bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block shadow-sm">
                    How it Works
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 max-w-4xl mx-auto leading-[1.15]">
                    Advanced Dermatology AI, <br />
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Simplified for Everyone
                    </span>
                </h1>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Dermic uses state-of-the-art deep learning algorithms to scan your skin instantly, providing clinical-level insights and a structured routine in seconds.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/scan"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-indigo-200 transition-all hover:-translate-y-0.5"
                    >
                        Start Your Free Scan
                    </Link>
                    <a
                        href="#steps"
                        className="bg-white hover:bg-slate-50 text-slate-700 font-bold px-8 py-4 rounded-2xl border border-slate-200 shadow-sm transition-all hover:-translate-y-0.5"
                    >
                        See the 3 Steps
                    </a>
                </div>
            </section>

            {/* Interactive Steps Section */}
            <section id="steps" className="max-w-7xl mx-auto px-6 py-12 relative">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">A Skin Scan in Three Simple Steps</h2>
                    <p className="text-slate-500 max-w-md mx-auto">Our seamless workflow ensures quick, reliable, and completely private results.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
                    {/* Connecting Line for Desktop */}
                    <div className="hidden lg:block absolute top-1/3 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 -z-10" />

                    {/* Step 1 */}
                    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between h-full">
                        <div>
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-blue-600 text-3xl">photo_camera</span>
                            </div>
                            <span className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-2 block">Step 01</span>
                            <h3 className="text-xl font-bold text-slate-800 mb-4">Take a Clear Photo</h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                Upload or capture a well-lit close-up photo of the affected skin area. Ensure the image is in focus, avoiding shadows or blurry backgrounds.
                            </p>
                        </div>
                        {/* Custom visual element */}
                        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 mt-4 overflow-hidden relative">
                            <div className="flex justify-between items-center bg-white rounded-xl p-3 border border-slate-100 shadow-sm">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg overflow-hidden flex items-center justify-center">
                                        <span className="material-symbols-outlined text-blue-600">image</span>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-slate-700">skin-area.jpg</h4>
                                        <span className="text-[10px] text-slate-400">1.2 MB • Ready</span>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined text-green-500 text-xl">check_circle</span>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between h-full">
                        <div>
                            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-indigo-600 text-3xl">psychology</span>
                            </div>
                            <span className="text-sm font-bold text-indigo-500 uppercase tracking-widest mb-2 block">Step 02</span>
                            <h3 className="text-xl font-bold text-slate-800 mb-4">AI Deep Analysis</h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                Our convolutional neural network processes your photo, analyzing skin texture, color variance, and lesion boundaries against over 100,000+ pre-validated clinical images.
                            </p>
                        </div>
                        {/* Custom visual element */}
                        <div className="bg-indigo-950 rounded-2xl p-4 border border-indigo-900 mt-4 overflow-hidden relative text-white">
                            <div className="flex flex-col gap-2 font-mono text-[10px]">
                                <div className="flex justify-between items-center text-indigo-300">
                                    <span>&gt;_ RUNNING_DIAGNOSIS</span>
                                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" />
                                </div>
                                <div className="h-1 bg-indigo-800 rounded-full overflow-hidden">
                                    <div className="bg-indigo-500 h-full w-[85%] animate-pulse" />
                                </div>
                                <span className="text-slate-300">Confidence Score: Calculating...</span>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between h-full">
                        <div>
                            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-purple-600 text-3xl">assignment_turned_in</span>
                            </div>
                            <span className="text-sm font-bold text-purple-500 uppercase tracking-widest mb-2 block">Step 03</span>
                            <h3 className="text-xl font-bold text-slate-800 mb-4">Instant Report & Care</h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-6">
                                Receive a complete PDF report identifying potential conditions, primary triggers, personalized morning/night care routines, and actionable care checklists.
                            </p>
                        </div>
                        {/* Custom visual element */}
                        <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 mt-4 overflow-hidden">
                            <div className="flex flex-col gap-2 bg-white rounded-xl p-3 border border-slate-100 shadow-sm text-xs">
                                <div className="flex justify-between items-center font-bold text-slate-800">
                                    <span>Hormonal Acne</span>
                                    <span className="text-indigo-600 text-[10px] bg-indigo-50 px-2 py-0.5 rounded-full">94% Match</span>
                                </div>
                                <div className="text-[10px] text-slate-400">Custom routine generated successfully.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advanced Core Technology Details */}
            <section className="bg-[#0b103e] text-white py-20 relative overflow-hidden mt-12">
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl -z-10" />
                
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="text-indigo-300 font-bold uppercase tracking-widest text-xs mb-3 block">Under the Hood</span>
                        <h2 className="text-3xl sm:text-4xl font-bold leading-snug mb-6">
                            Precision Engineering <br />
                            <span className="text-indigo-400">Behind Every Analysis</span>
                        </h2>
                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                            Dermic's neural network has been meticulously constructed using deep convolutional layers. It focuses on micro-features, vascular patterns, pigment variations, and structure morphology that are invisible to the naked eye.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="border-l-2 border-indigo-500 pl-4">
                                <h4 className="text-2xl font-bold text-indigo-400">94.3%</h4>
                                <p className="text-slate-400 text-xs">Clinical Accuracy Rate</p>
                            </div>
                            <div className="border-l-2 border-indigo-500 pl-4">
                                <h4 className="text-2xl font-bold text-indigo-400">&lt; 3.0s</h4>
                                <p className="text-slate-400 text-xs">Average Analysis Time</p>
                            </div>
                            <div className="border-l-2 border-indigo-500 pl-4">
                                <h4 className="text-2xl font-bold text-indigo-400">100K+</h4>
                                <p className="text-slate-400 text-xs">Training Data Sets</p>
                            </div>
                            <div className="border-l-2 border-indigo-500 pl-4">
                                <h4 className="text-2xl font-bold text-indigo-400">100%</h4>
                                <p className="text-slate-400 text-xs">Encrypted & Private</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-md relative">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
                        <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                            <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                            Clinical Validation
                        </h3>
                        
                        <div className="space-y-6 text-sm text-slate-300">
                            <div className="flex gap-4">
                                <span className="material-symbols-outlined text-indigo-400 text-2xl">verified</span>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Dermatologist Supervised</h4>
                                    <p className="text-xs text-slate-400 leading-relaxed">
                                        Developed in partnership with certified clinical dermatologists to ensure our analysis patterns mirror real diagnostics.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <span className="material-symbols-outlined text-indigo-400 text-2xl">shield</span>
                                <div>
                                    <h4 className="font-bold text-white mb-1">HIPAA Compliant Privacy</h4>
                                    <p className="text-xs text-slate-400 leading-relaxed">
                                        Your photographs are fully encrypted during transit and rest, and are strictly confidential. We never sell your medical data.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clinical Disclaimer & Safety Banner */}
            <section className="max-w-7xl mx-auto px-6 mt-16 relative">
                {/* Glowing background highlights specific to the disclaimer */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-amber-500/5 rounded-[40px] blur-2xl -z-10" />
                
                <div className="bg-gradient-to-br from-white to-amber-50/20 border border-amber-200/60 rounded-[32px] p-8 md:p-12 shadow-[0_8px_30px_rgb(245,158,11,0.04)] backdrop-blur-md relative overflow-hidden group hover:shadow-md transition-all duration-300">
                    {/* Inner glowing amber corner circle */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full blur-2xl pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                        {/* Left Side Visual: Icon Shield / Warning Badge */}
                        <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div className="w-16 h-16 bg-amber-50 border border-amber-200 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform duration-300">
                                <span className="material-symbols-outlined text-amber-600 text-3xl">medical_information</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800 leading-tight">
                                Important Medical <br className="hidden lg:block" />
                                <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">Disclaimer</span>
                            </h3>
                            <p className="text-slate-400 text-xs mt-3 leading-relaxed">
                                Please read these clinical boundaries carefully before using our AI tools.
                            </p>
                        </div>

                        {/* Right Side Content: Clean Grid of Clinical Boundaries */}
                        <div className="lg:col-span-8 space-y-6">
                            <p className="text-slate-600 leading-relaxed">
                                Dermic is engineered as an advanced educational assistant designed to track skin trends and recommend general skincare routines. It operates under strict boundaries:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white/80 border border-slate-100 rounded-2xl p-4 flex gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                                    <span className="material-symbols-outlined text-amber-500 flex-shrink-0 text-xl">medical_services</span>
                                    <div>
                                        <h4 className="text font-bold text-slate-800 mb-1">Not a Medical Diagnosis</h4>
                                        <p className="text-[14px] text-slate-400 leading-relaxed">
                                            The scan results do not constitute medical diagnoses, clinical treatments, or professional prescriptions.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white/80 border border-slate-100 rounded-2xl p-4 flex gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                                    <span className="material-symbols-outlined text-amber-500 flex-shrink-0 text-xl">visibility</span>
                                    <div>
                                        <h4 className="text font-bold text-slate-800 mb-1">Dermatologist Consult Needed</h4>
                                        <p className="text-[14px] text-slate-400 leading-relaxed">
                                            Always consult a board-certified dermatologist for biopsy-verified diagnostics or treatment plans.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white/80 border border-slate-100 rounded-2xl p-4 flex gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                                    <span className="material-symbols-outlined text-amber-500 flex-shrink-0 text-xl">warning</span>
                                    <div>
                                        <h4 className="text font-bold text-slate-800 mb-1">Emergency Situations</h4>
                                        <p className="text-[14px] text-slate-400 leading-relaxed">
                                            Do not delay seeking medical emergency care if you notice rapid growth, bleeding, or dramatic color shifts.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white/80 border border-slate-100 rounded-2xl p-4 flex gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                                    <span className="material-symbols-outlined text-amber-500 flex-shrink-0 text-xl">lock</span>
                                    <div>
                                        <h4 className="text font-bold text-slate-800 mb-1">Strict Data Anonymization</h4>
                                        <p className="text-[14px] text-slate-400 leading-relaxed">
                                            Images are used strictly to run the model and optimize parameters under strict end-to-end encryption layers.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Trust badges footer inside disclaimer */}
                            <div className="pt-4 border-t border-amber-200/40 flex flex-wrap gap-4 justify-center lg:justify-start items-center">
                                <span className="text-[10px] font-bold text-amber-600 bg-amber-50 border border-amber-100 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                                    Educational Purposes Only
                                </span>
                                <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                                    <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                                    Clinical Supervision Built In
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
