'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Check, ArrowRight, Zap, Lock, BarChart3 } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");

  const handleShorten = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Shorten URL:", url);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-slate-950">
      {/* Header */}
      <Navbar />

      {/* Main */}
      <main className="flex-1 flex flex-col items-center justify-start w-full">
        {/* Hero Section */}
        <section className="w-full py-20 px-6 sm:px-8 lg:px-12 flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-6 max-w-2xl">
            {/* Heading */}
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-2">
                Make your links
              </h1>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-teal-500 dark:text-teal-400">
                short & simple.
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 text-center max-w-xl">
              The easiest way to shorten URLs, track clicks, and share content
              securely.
            </p>

            {/* URL Input Form */}
            <form
              onSubmit={handleShorten}
              className="w-full max-w-2xl flex flex-col sm:flex-row gap-3 bg-white dark:bg-slate-900 p-2 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm"
            >
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste your long link here..."
                className="flex-1 px-6 py-3 bg-transparent outline-none text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500"
                required
              />
              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
              >
                Shorten URL
                <ArrowRight size={18} />
              </button>
            </form>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Check size={16} className="text-teal-500" />
                <span className="text-sm">Free forever</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Check size={16} className="text-teal-500" />
                <span className="text-sm">No credit card</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <Check size={16} className="text-teal-500" />
                <span className="text-sm">Secure & private</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-20 px-6 sm:px-8 lg:px-12 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8 flex flex-col gap-6">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg w-fit border border-slate-200 dark:border-slate-700">
                  <Zap size={24} className="text-teal-500" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    Lightning Fast
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Paste, click, copy. Our infrastructure ensures your links
                    are created instantly and load immediately.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8 flex flex-col gap-6">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg w-fit border border-slate-200 dark:border-slate-700">
                  <Lock size={24} className="text-teal-500" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    Secure by Design
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Every link is encrypted with HTTPS. We monitor for spam and
                    malicious content 24/7.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8 flex flex-col gap-6">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-lg w-fit border border-slate-200 dark:border-slate-700">
                  <BarChart3 size={24} className="text-teal-500" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    Simple Analytics
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    See how many people clicked your link. No complex
                    dashboards, just the numbers you need.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl mx-auto bg-slate-900 dark:bg-black rounded-3xl p-12 text-center flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Ready to get started?
              </h2>
              <p className="text-lg text-slate-300">
                Join 200,000+ users shortening links every day.
              </p>
            </div>
            <button className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors inline-block mx-auto">
              Create a Free Account
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
