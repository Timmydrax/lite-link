'use client';

import Image from 'next/image';
import { X, Download } from 'lucide-react';
import { useState } from 'react';

interface QrModalProps {
  isOpen: boolean;
  onClose: () => void;
  qrCodeUrl?: string;
  shortenedUrl: string;
}

export default function QrModal({
  isOpen,
  onClose,
  qrCodeUrl = 'http://localhost:3845/assets/c5f18710b516121708c1879d51ab932ecc1f7ba9.png',
  shortenedUrl = 'litelink.com/s/83sk2a',
}: QrModalProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  if (!isOpen) return null;

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // Add download logic here
      const link = document.createElement('a');
      link.href = qrCodeUrl;
      link.download = `qr-code-${shortenedUrl}.png`;
      link.click();
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 w-full max-w-md">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
            Scan QR Code
          </h2>
        </div>

        {/* QR Code */}
        <div className="flex justify-center mb-6">
          <div className="bg-white border border-slate-200 dark:border-slate-700 rounded-lg p-4">
            <Image
              src={qrCodeUrl}
              alt="QR Code"
              width={192}
              height={192}
              className="object-contain"
            />
          </div>
        </div>

        {/* Shortened Link */}
        <div className="text-center mb-8">
          <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
            Shortened Link
          </p>
          <div className="bg-slate-100 dark:bg-slate-800 rounded-lg px-4 py-2 inline-block">
            <p className="text-sm font-mono text-slate-900 dark:text-white">
              {shortenedUrl}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 justify-center border-t border-slate-200 dark:border-slate-700 pt-6">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-medium rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm"
          >
            Close
          </button>
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="flex items-center gap-2 px-5 py-2 bg-teal-500 hover:bg-teal-600 disabled:bg-teal-400 text-white font-medium rounded-lg transition-colors text-sm"
          >
            <Download size={16} />
            {isDownloading ? 'Downloading...' : 'Download'}
          </button>
        </div>
      </div>
    </div>
  );
}
