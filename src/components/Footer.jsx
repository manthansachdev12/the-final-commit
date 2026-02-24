"use client";

export default function Footer() {
  return (
    <footer className="bg-[#f6f8fa] border-t border-[#d0d7de] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* 1. Brand Identity - Span 4 columns */}
          <div className="md:col-span-4 space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-bold tracking-tighter text-[#1f2328]">
                TheFinal<span className="font-light text-[#656d76]">Commit</span>
              </h3>
              <p className="text-sm text-[#656d76] leading-relaxed max-w-xs">
                A high-velocity engineering collective. We architect immutable systems and production-grade digital legacies.
              </p>
            </div>
            
            {/* Live System Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#d0d7de] rounded-md shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2da44e] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2da44e]"></span>
              </span>
              <span className="text-[10px] font-mono font-bold text-[#1f2328] tracking-tight">
                SYSTEM_STABLE_V4.0
              </span>
            </div>
          </div>

          {/* 2. Links - Span 2 columns */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-[#1f2328] uppercase tracking-wider">Protocol</h4>
            <ul className="space-y-2 text-sm text-[#656d76]">
              <li className="hover:text-[#0969da] cursor-pointer transition-colors">Manifesto</li>
              <li className="hover:text-[#0969da] cursor-pointer transition-colors">Documentation</li>
              <li className="hover:text-[#0969da] cursor-pointer transition-colors">Architecture</li>
              <li className="hover:text-[#0969da] cursor-pointer transition-colors">Open Source</li>
            </ul>
          </div>

          {/* 3. Social - Span 2 columns */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-[#1f2328] uppercase tracking-wider">Network</h4>
            <ul className="space-y-2 text-sm text-[#656d76]">
              <li className="hover:text-[#0969da] cursor-pointer transition-colors">GitHub</li>
              <li className="hover:text-[#0969da] cursor-pointer transition-colors">LinkedIn</li>
              <li className="hover:text-[#0969da] cursor-pointer transition-colors">X / Twitter</li>
              <li className="hover:text-[#0969da] cursor-pointer transition-colors">Discord</li>
            </ul>
          </div>

          {/* 4. Technical Logs - Span 4 columns */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-[#1f2328] uppercase tracking-wider">Runtime_Environment</h4>
            <div className="p-4 bg-white border border-[#d0d7de] rounded-lg font-mono text-[11px] text-[#656d76] space-y-1 shadow-sm">
              <div className="flex justify-between border-b border-[#f6f8fa] pb-1">
                <span className="opacity-50 underline decoration-dotted">LOC</span>
                <span className="text-[#1f2328]">INDORE, MP, IN</span>
              </div>
              <div className="flex justify-between border-b border-[#f6f8fa] py-1">
                <span className="opacity-50 underline decoration-dotted">LAT</span>
                <span className="text-[#1f2328]">0.042 MS</span>
              </div>
              <div className="flex justify-between border-b border-[#f6f8fa] py-1">
                <span className="opacity-50 underline decoration-dotted">REL</span>
                <span className="text-[#1f2328]">2026.01.24.STABLE</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="opacity-50 underline decoration-dotted">ENV</span>
                <span className="text-[#2da44e] font-bold">PRODUCTION</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#d0d7de] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <p className="text-[11px] text-[#656d76] font-mono tracking-tighter">
              © 2026 FINAL_COMMIT_STUDIO. ALL RIGHTS RESERVED.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100">
               <span className="text-[10px] font-bold text-[#1f2328] tracking-widest uppercase">Built with</span>
               <div className="h-4 w-[1px] bg-[#d0d7de]" />
               <span className="text-[10px] font-black text-[#1f2328]">NEXT.JS</span>
            </div>
            
            <a href="https://github.com" className="p-2 bg-[#1f2328] text-white rounded-md hover:bg-black transition-all">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}