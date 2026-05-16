import React from "react";

const productImage =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBRgdM4CZczFCZPqihEjDJmLzqYOjEGYDfQLOlkZoCrfhElQtwMVb2WpvohP5Vdw_FQm39OpqKK6e1JyCqsG-OCb6JnJR7XVQhMstwELQS6l4wi6Emezz3RPKCPwQiDFdp5hITw9ZkTSoznoO1pnOIfxGnJtRxEK0BJlwELMO1ZRA6ghUd1JYabw4cOx1UJbN6efFw7oeruKn4S-Uw7vJHEft2ix542D_DeWoeT9hg4o1f4nYR61mp5XVYzV-vKehCz3aJxo9Ejtvo";

export default function ProductsSection() {
    return (
        <section className="space-y-10">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <h2 className="text-3xl font-bold text-indigo-900">
                    Support & Recommended Resources
                </h2>

                <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                        Sponsored Content
                    </span>
                </div>
            </div>

            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                        Recommended Products
                    </h4>

                    <button className="text-indigo-700 text-xs font-bold hover:underline">
                        View All
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
                        <img
                            src={productImage}
                            alt="Product"
                            className="w-full h-32 object-cover rounded-xl mb-4"
                        />

                        <div className="flex justify-between items-start mb-4">
                            <h5 className="font-bold text-slate-900 text-sm">
                                DermaHeal Urea 10%
                            </h5>

                            <span className="font-bold text-indigo-700 text-sm">
                                $24.99
                            </span>
                        </div>

                        <button className="w-full py-2 bg-indigo-100 text-indigo-800 rounded-lg font-bold text-xs hover:bg-indigo-200 transition-all">
                            Buy Now
                        </button>
                    </div>

                    <div className="bg-white rounded-2xl p-4 shadow-sm border border-dashed border-slate-200 flex items-center justify-center">
                        <p className="text-slate-400 text-xs font-medium text-center">
                            Additional products tailored to your scan results
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
