"use client";

import { useState } from "react";
import { Check, X, Copy, Settings2, QrCode } from "lucide-react";

interface LinkCardProps {
  shortenedUrl: string;
  onCopy?: () => void;
  onCustomize?: () => void;
  onQRCode?: () => void;
}

export default function LinkCard({
  shortenedUrl = "litelink.com/s/83sk2a",
  onCopy,
  onCustomize,
  onQRCode,
}: LinkCardProps) {
  const [showSuccess, setShowSuccess] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortenedUrl);
      setCopied(true);
      onCopy?.();
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="bg-white border border-slate-200 dark:border-slate-700 rounded-xl shadow-md p-6 w-full max-w-2xl space-y-4">
      {/* Success Message */}
      {showSuccess && (
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center gap-2 bg-teal-500 text-white px-3 py-2 rounded-full w-fit">
            <Check size={16} />
            <span className="text-sm font-medium">
              Link created successfully!
            </span>
          </div>
          <button
            onClick={() => setShowSuccess(false)}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
      )}

      {/* Link Display Section */}
      <div className="bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 flex items-center justify-between">
        <div className="flex-1">
          <p className="font-mono text-lg text-slate-900 dark:text-white break-all">
            {shortenedUrl}
          </p>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 ml-4 px-5 py-2.5 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-lg transition-colors whitespace-nowrap shrink-0"
        >
          <Copy size={16} />
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-2">
        <button
          onClick={onCustomize}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        >
          <Settings2 size={16} />
          Customize
        </button>
        <button
          onClick={onQRCode}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        >
          <QrCode size={16} />
          QR Code
        </button>
      </div>
    </div>
  );
}
