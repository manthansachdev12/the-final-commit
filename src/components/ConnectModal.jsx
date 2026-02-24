"use client";

import { useState, useEffect } from "react";

export default function ConnectModal({ open, onClose }) {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    github: "",
    experience: "",
    message: "",
  });

  useEffect(() => {
    setMounted(true);
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [open]);

  if (!open || !mounted) return null;

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      alert("Message sent!");
      onClose();
    } catch (err) {
      alert("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 !z-[10000] flex items-center justify-center p-4 isolate">
      {/* GLASS BACKDROP */}
      <div 
        className="absolute inset-0 bg-zinc-900/20 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* MODAL BODY (LIGHT MODE) */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-[0_24px_48px_rgba(0,0,0,0.1)] border border-[#D0D7DE] overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* HEADER: CLEAN & SYSTEMIC */}
        <div className="px-8 py-5 border-b border-[#D0D7DE] bg-[#F6F8FA] flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#2da44e] shadow-[0_0_8px_rgba(45,164,78,0.4)] animate-pulse" />
            <div className="flex flex-col">
              <h2 className="text-sm font-bold text-[#1F2328] uppercase tracking-wider leading-none">
                Connect_Proposal
              </h2>
              <span className="text-[10px] text-[#656D76] font-mono mt-1 font-medium">ESTABLISH_NODE_V4</span>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-[#EBEEF2] rounded-lg text-[#656D76] hover:text-black transition-all"
          >
            <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor"><path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.75.75 0 1 1 1.06 1.06L9.06 8l3.22 3.22a.75.75 0 1 1-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 0 1-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path></svg>
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-[#656D76] uppercase tracking-widest">Full Name</label>
              <input
                name="name"
                onChange={handleChange}
                className="w-full bg-[#F6F8FA] rounded-lg border border-[#D0D7DE] px-4 py-2.5 text-sm text-[#1F2328] focus:bg-white focus:border-[#0969DA] focus:ring-4 focus:ring-[#0969DA]/10 outline-none transition-all placeholder:text-[#8C959F]"
                placeholder="FullName..."
              />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-[#656D76] uppercase tracking-widest">Email Address</label>
              <input
                name="email"
                type="email"
                onChange={handleChange}
                className="w-full bg-[#F6F8FA] rounded-lg border border-[#D0D7DE] px-4 py-2.5 text-sm text-[#1F2328] focus:bg-white focus:border-[#0969DA] focus:ring-4 focus:ring-[#0969DA]/10 outline-none transition-all placeholder:text-[#8C959F]"
                placeholder="dev@network.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-[#656D76] uppercase tracking-widest">GitHub Profile</label>
              <input
                name="github"
                onChange={handleChange}
                className="w-full bg-[#F6F8FA] rounded-lg border border-[#D0D7DE] px-4 py-2.5 text-sm text-[#1F2328] focus:bg-white focus:border-[#0969DA] focus:ring-4 focus:ring-[#0969DA]/10 outline-none transition-all placeholder:text-[#8C959F]"
                placeholder="https://github.com/username"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-[#656D76] uppercase tracking-widest">Exp Level</label>
              <select
                name="experience"
                onChange={handleChange}
                className="w-full bg-[#F6F8FA] rounded-lg border border-[#D0D7DE] px-4 py-2.5 text-sm text-[#1F2328] focus:bg-white focus:border-[#0969DA] outline-none transition-all cursor-pointer appearance-none"
                defaultValue=""
              >
                <option value="" disabled>Select Rank</option>
                <option value="junior">Level_01 (Junior)</option>
                <option value="mid">Level_02 (Mid)</option>
                <option value="senior">Level_03 (Senior)</option>
                <option value="god">Level_99 (Lead)</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] font-bold text-[#656D76] uppercase tracking-widest">Proposal_Details</label>
            <div className="border border-[#D0D7DE] rounded-xl overflow-hidden focus-within:border-[#0969DA] focus-within:ring-4 focus-within:ring-[#0969DA]/10 transition-all">
               <textarea
                name="message"
                rows={4}
                onChange={handleChange}
                className="w-full p-4 bg-[#F6F8FA] focus:bg-white text-sm text-[#1F2328] focus:outline-none resize-none placeholder:text-[#8C959F]"
                placeholder="Briefly describe your project or how you'd like to collaborate..."
              />
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="px-8 py-5 border-t border-[#D0D7DE] bg-[#F6F8FA] flex items-center justify-between">
          <span className="text-[10px] font-mono text-[#656D76] font-bold uppercase tracking-widest">
            {loading ? ">>> Uplinking..." : ">>> Ready_to_send"}
          </span>
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="text-xs font-bold text-[#656D76] hover:text-[#CF222E] transition-colors"
            >
              Discard
            </button>
            <button
              onClick={submit}
              disabled={loading}
              className="px-8 py-2.5 bg-[#2da44e] border border-[#1b7c32] text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-[#2c974b] transition-all shadow-[0_1px_0_rgba(27,31,35,0.1)] active:scale-95 disabled:opacity-50"
            >
              {loading ? "..." : "Send_Message"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}