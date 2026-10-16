import React from 'react';

export default function PokePixelsLogo({ className = "h-10", onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="flex items-center focus:outline-none group select-none text-left"
    >
      <img
        src="/poke-pixels-logo.png"
        alt="POKE PIXELS"
        className={`${className} w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform`}
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          if (e.currentTarget.nextElementSibling) {
            e.currentTarget.nextElementSibling.classList.remove('hidden');
          }
        }}
      />
      <div className="hidden flex flex-col font-black tracking-wider leading-none">
        <span className="text-xl text-cyan-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] font-mono">
          POKE
        </span>
        <span className="text-sm text-white tracking-widest font-mono">
          PIXELS
        </span>
      </div>
    </button>
  );
}
