import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";

export default function Footer() {
  const footerLinks = [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Report Abuse", href: "/report" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12">
        {/* Logo and Links Container */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2 opacity-60">
            <div className="bg-slate-900 dark:bg-slate-800 p-1.5 rounded flex items-center justify-center">
              <LinkIcon size={16} className="text-white" />
            </div>
            <span className="text-sm font-bold text-slate-900 dark:text-white">
              LiteLink
            </span>
          </div>

          {/* Footer Links */}
          <nav className="flex flex-wrap gap-6 sm:gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-slate-400 dark:text-slate-500 pt-8 border-t border-slate-200 dark:border-slate-800">
          © 2024 LiteLink Inc. Simple URLs for everyone.
        </div>
      </div>
    </footer>
  );
}
