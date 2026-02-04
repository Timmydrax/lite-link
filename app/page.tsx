import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black max-w-7xl mx-auto">
      {/* Header */}
      <Navbar />

      {/* Main */}
      <main className="flex w-full flex-col items-center justify-center py-8 px-8 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <h1 className="text-6xl w-118 font-bold text-black">
            Make your links{" "}
            <span className="text-[#0EA5A4]"> short & simple.</span>
          </h1>
          <p className="max-w-md text-lg text-zinc-600">
            The easiest way to shorten URLs, track clicks, and share content
            securely.
          </p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
