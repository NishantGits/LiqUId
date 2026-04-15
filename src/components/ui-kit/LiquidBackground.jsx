import React from 'react';

export default function LiquidBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Blobs */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-[0.12] blur-[80px] animate-blob"
        style={{ background: '#3b82f6' }}
      />
      <div
        className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.10] blur-[80px]"
        style={{
          background: '#06b6d4',
          animation: 'blob 7s infinite 2s',
        }}
      />
      <div
        className="absolute -bottom-20 left-1/3 w-[550px] h-[550px] rounded-full opacity-[0.10] blur-[80px]"
        style={{
          background: '#8b5cf6',
          animation: 'blob 7s infinite 4s',
        }}
      />
      <div
        className="absolute top-2/3 left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.08] blur-[80px]"
        style={{
          background: '#06b6d4',
          animation: 'blob 9s infinite 1s',
        }}
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
        }}
      />
    </div>
  );
}