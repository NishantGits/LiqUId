import React from 'react';
import { Droplets } from 'lucide-react';

export default function LiquidLogo({ className = "w-10 h-10" }) {
  return (
    <div
      className={`${className} rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30`}
      style={{ background: 'linear-gradient(135deg, #3b82f6, #06b6d4)' }}
    >
      <Droplets className="w-5 h-5 text-white" style={{ width: '55%', height: '55%' }} />
    </div>
  );
}