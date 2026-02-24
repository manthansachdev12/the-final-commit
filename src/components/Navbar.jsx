"use client";

import { useEffect, useState } from "react";
import ConnectModal from "@/components/ConnectModal";


export default function PremiumWhiteNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b ${
          scrolled
            ? "py-3 bg-white/90 backdrop-blur-xl border-[#D0D7DE] shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
            : "py-6 bg-white border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          
          {/* LEFT: BRANDING WITH TECH STATUS */}
          <div className="flex items-center gap-10">
            <div className="group flex items-center gap-3 cursor-pointer">
              <div className="w-10 h-10 bg-[#1F2328] rounded-xl flex items-center justify-center transition-all duration-300 group-hover:rotate-[10deg] group-hover:shadow-lg overflow-hidden">
  <img
    src="/assets/logo.jpeg"
    alt="The Final Commit"
    className="w-full h-full object-cover"
  />
</div>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-[#1F2328] tracking-tight leading-none">
                  The Final Commit
                </span>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2da44e] animate-pulse" />
                  <span className="text-[10px] text-[#656D76] font-mono font-bold uppercase tracking-widest">
                    Node_Master_Active
                  </span>
                </div>
              </div>
            </div>

            {/* CENTER: NAV LINKS (Hidden on Mobile) */}
            <div className="hidden lg:flex items-center gap-8 border-l border-[#D0D7DE] pl-10">
              {["Ecosystem", "Architecture", "Collective"].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[13px] font-semibold text-[#656D76] hover:text-black transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FD8C73] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: GITHUB ACTION BUTTON */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpen(true)}
              className="relative px-6 py-2 bg-[#2da44e] border border-[#1b7c32] rounded-lg text-sm font-bold text-white 
                         shadow-[0_1px_0_rgba(27,31,35,0.1)] transition-all duration-200
                         hover:bg-[#2c974b] hover:shadow-md
                         active:scale-[0.97] active:shadow-inner active:bg-[#298e46]"
            >
              Connect
            </button>
          </div>
        </div>
      </nav>

      {/* MODAL: Fixed Z-Index handle inside ConnectModal should be z-[10000] */}
      <ConnectModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}