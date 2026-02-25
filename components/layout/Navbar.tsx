import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full flex items-center justify-between px-6 sm:px-8 py-4 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      {/* Logo Section */}
      <Link href="/" className="flex items-center gap-3">
        <div className="bg-slate-900 dark:bg-slate-800 p-2 rounded-lg flex items-center justify-center">
          <LinkIcon size={20} className="text-white" />
        </div>
        <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
          LiteLink
        </span>
      </Link>

      {/* Navigation Links */}
      <nav className="flex items-center gap-3 sm:gap-4">
        <Link
          href="/login"
          className="px-6 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium text-sm transition-colors rounded-lg"
        >
          Log in
        </Link>
        <Link
          href="/signup"
          className="px-6 py-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 font-medium text-sm transition-colors rounded-lg"
        >
          Sign up free
        </Link>
      </nav>
    </header>
  );
}
