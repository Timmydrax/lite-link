"use client";

import { useState } from "react";
import { ChevronUp } from "lucide-react";

interface LinkModalProps {
  customSlug?: string;
  onUpdate?: (slug: string) => void;
}

export default function LinkModal({
  customSlug = "summer-sale-2025",
  onUpdate,
}: LinkModalProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [slug, setSlug] = useState(customSlug);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdate = async () => {
    setIsUpdating(true);
    try {
      // Add update logic here
      console.log("Updating link with slug:", slug);
      onUpdate?.(slug);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="bg-white border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm overflow-hidden max-w-lg">
      {/* Header Section - Toggle */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
      >
        <h3 className="font-medium text-sm text-slate-900 dark:text-white">
          Customize link (optional)
        </h3>
        <ChevronUp
          size={16}
          className={`text-slate-400 transition-transform duration-200 ${
            isExpanded ? "rotate-0" : "rotate-180"
          }`}
        />
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-slate-200 dark:border-slate-700 px-6 py-4 space-y-4">
          {/* Custom Link Input */}
          <div className="flex items-center gap-0 border border-slate-200 dark:border-slate-700 rounded-md overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-800 px-3 py-2 border-r border-slate-200 dark:border-slate-700 shrink-0">
              <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap font-medium">
                litelink.com/s/
              </span>
            </div>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="summer-sale-2025"
              className="flex-1 px-3 py-2 bg-white dark:bg-slate-900 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 outline-none focus:ring-1 focus:ring-teal-500"
            />
          </div>

          {/* Helper Text */}
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Create a memorable name for your link. Letters, numbers, and dashes
            only.
          </p>

          {/* Update Button */}
          <div className="flex justify-end pt-2">
            <button
              onClick={handleUpdate}
              disabled={isUpdating}
              className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-medium text-xs rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors disabled:opacity-50"
            >
              {isUpdating ? "Updating..." : "Update Link"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
