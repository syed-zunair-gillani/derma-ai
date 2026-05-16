'use client'

import React, { useState } from 'react';

interface ReviewModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ReviewModal({ isOpen, onClose }: ReviewModalProps) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [review, setReview] = useState('');
    const [isPublic, setIsPublic] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            console.log({ rating, review, isPublic });
            onClose();
            // Reset form
            setRating(0);
            setReview('');
            setIsPublic(false);
        }, 1500);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-300">
                <div className="p-6 sm:p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-slate-800">Write a Review</h2>
                        <button 
                            onClick={onClose}
                            className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3">
                        {/* Rating Section */}
                        <div className="space-y-3">
                            <label className="text-sm font-semibold text-slate-700">Your Rating</label>
                            <div className="flex gap-2 mt-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setRating(star)}
                                        onMouseEnter={() => setHover(star)}
                                        onMouseLeave={() => setHover(0)}
                                        className="focus:outline-none transition-transform active:scale-90"
                                    >
                                        <span 
                                            className={`material-symbols-outlined text-3xl ${
                                                star <= (hover || rating) 
                                                ? 'text-yellow-400 fill-yellow-400 font-variation-fill-1' 
                                                : 'text-slate-300'
                                            }`}
                                            style={{ fontVariationSettings: star <= (hover || rating) ? "'FILL' 1" : "'FILL' 0" }}
                                        >
                                            star
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Review Textarea */}
                        <div className="space-y-3">
                            <label className="text-sm font-semibold text-slate-700">Your Review</label>
                            <textarea
                                required
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                                placeholder="Share your experience with our AI skin analysis..."
                                className="w-full h-32 mt-2 p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all resize-none outline-none text-slate-600"
                            ></textarea>
                        </div>

                        {/* Public Checkbox */}
                        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setIsPublic(!isPublic)}>
                            <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${
                                isPublic ? 'bg-indigo-600 border-indigo-600' : 'bg-white border-slate-300'
                            }`}>
                                {isPublic && <span className="material-symbols-outlined text-white text-lg">check</span>}
                            </div>
                            <span className="text-sm font-medium text-slate-600 group-hover:text-slate-800 transition-colors">
                                Share your scan as public
                            </span>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting || rating === 0}
                            className={`w-full py-4 rounded-2xl font-bold text-white transition-all shadow-lg ${
                                isSubmitting || rating === 0
                                ? 'bg-slate-300 cursor-not-allowed'
                                : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-indigo-200 active:scale-[0.98]'
                            }`}
                        >
                            {isSubmitting ? (
                                <div className="flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined animate-spin">progress_activity</span>
                                    Submitting...
                                </div>
                            ) : (
                                'Submit Review'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
