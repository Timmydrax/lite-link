import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Check } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black max-w-7xl mx-auto">
      {/* Header */}
      <Navbar />

      {/* Main */}
      <main className="flex w-full flex-col items-center justify-center py-8 px-8 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center justify-center gap-6 text-center w-full">
          <h1 className="text-6xl w-118 font-bold text-black">
            Make your links{" "}
            <span className="text-[#0EA5A4]"> short & simple.</span>
          </h1>
          <p className="max-w-md text-lg text-zinc-400">
            The easiest way to shorten URLs, track clicks, and share content
            securely.
          </p>
          
          <div className="flex items-center gap-4 text-zinc-400">
            <p className="flex items-center gap-2">
              <span>
                <Check />
              </span>
              Free Forever
            </p>
            <p className="flex items-center gap-2">
              <span>
                <Check />
              </span>
              No credit card
            </p>
            <p className="flex items-center gap-2">
              <span>
                <Check />
              </span>
              Secure & Private
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
