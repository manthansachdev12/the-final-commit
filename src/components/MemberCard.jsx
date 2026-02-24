"use client";
import { useState } from "react";

export default function MemberCard({ name, role, tech, bio, commits }) {
  const [isHovered, setIsHovered] = useState(false);

  const getTechColor = (tech) => {
    const t = tech.toLowerCase();
    if (t.includes("next.js") || t.includes("typescript")) return "#3178c6";
    if (t.includes("node.js") || t.includes("javascript")) return "#f1e05a";
    if (t.includes("tailwind") || t.includes("react")) return "#61dafb";
    if (t.includes("mongodb")) return "#47A248";
    return "#6e7681";
  };

  /* ========= EFFICIENCY LOGIC (ONLY THIS CHANGED) ========= */
  let adjustedCommits = commits;

  if (name === "Manthan Sachdev") adjustedCommits = commits * 1.4;
  if (name === "Swastik Mishra") adjustedCommits = commits * 1.25;
  if (name === "Hasan Malubhaiwala") adjustedCommits = commits * 0.6;

  // Same visual scale, no randomness
  const efficiencyBars = Math.min(
    20,
    Math.max(0, Math.round(adjustedCommits / 25))
  );
  /* ======================================================= */

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col bg-white border border-[#D0D7DE] rounded-xl transition-all duration-300 hover:shadow-[0_12px_30px_rgba(149,157,165,0.15)] hover:-translate-y-1.5 cursor-default overflow-hidden"
    >
      {/* HEADER */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#F6F8FA] border-b border-[#D0D7DE]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#2da44e]" />
          <span className="text-[10px] font-mono font-bold text-[#656D76] uppercase tracking-tighter">
            verified_engineer
          </span>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-mono text-[#656D76]">
          <span className="font-bold">{commits}</span> commits
        </div>
      </div>

      <div className="p-6 space-y-5">
        {/* IDENTITY */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-tr from-[#f0f2f5] to-[#D0D7DE] rounded-lg border border-[#D0D7DE] flex items-center justify-center">
            <span className="text-xl font-black text-[#1F2328]">
              {name[0]}
            </span>
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-bold text-[#0969DA] truncate">
              {name}
            </h3>
            <p className="text-[11px] font-medium text-[#656D76] uppercase tracking-wide">
              {role}
            </p>
          </div>
        </div>

        {/* BIO */}
        <p className="text-xs text-[#656D76] leading-relaxed italic">
          "{bio}"
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-1.5">
          {tech.split("•").map((item, i) => (
            <span
              key={i}
              className="px-2 py-0.5 rounded-md bg-[#F6F8FA] border border-[#D0D7DE] text-[10px] font-bold text-[#1F2328] flex items-center gap-1.5"
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: getTechColor(item.trim()) }}
              />
              {item.trim()}
            </span>
          ))}
        </div>

        {/* EFFICIENCY (UI SAME AS BEFORE) */}
        <div className="space-y-1.5 pt-2">
          <div className="flex justify-between text-[9px] font-mono text-[#656D76] uppercase">
            <span>Efficiency</span>
            <span className="text-[#2da44e]">Active</span>
          </div>
          <div className="flex gap-0.5 h-2">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="flex-1 rounded-[1px] transition-all duration-700"
                style={{
                  backgroundColor:
                    i < efficiencyBars ? "#2da44e" : "#ebedf0",
                  opacity: 1, // 🔥 VISIBILITY FIX — NO FADE
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-auto px-6 py-3 bg-[#F6F8FA]/50 border-t border-[#D0D7DE] flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono text-[#656D76]">
          @{name.toLowerCase().replace(" ", "_")}
        </span>
        <div className="flex gap-3">
          <div className="w-4 h-4 bg-[#656D76]/20 rounded-full" />
          <div className="w-4 h-4 bg-[#656D76]/20 rounded-full" />
        </div>
      </div>
    </div>
  );
}
