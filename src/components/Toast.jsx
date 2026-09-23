import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900 border border-white/20 text-white px-5 py-3 rounded-full shadow-2xl animate-bounce-short">
      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
      <span className="text-sm font-semibold">{message}</span>
    </div>
  );
}
