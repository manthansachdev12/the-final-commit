"use client";



import { useState, useEffect, useRef } from 'react';



export default function GitHubStudioHero() {

  const [mouse, setMouse] = useState({ x: 0, y: 0, relX: 0, relY: 0 });

  const [isHovered, setIsHovered] = useState(false);

  const heroRef = useRef(null);



  const handleMouseMove = (e) => {

    if (!heroRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    setMouse({

      x,

      y,

      relX: (x / rect.width - 0.5) * 2,

      relY: (y / rect.height - 0.5) * 2,

    });

  };



  // Simulated GitHub Contribution Colors

  const colors = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];



  return (

    <section

      ref={heroRef}

      onMouseMove={handleMouseMove}

      className="relative min-h-screen w-full bg-white text-[#1F2328] flex items-center overflow-hidden font-sans"

    >

      {/* BACKGROUND: DOT GRID (GitHub Style) */}

      <div className="absolute inset-0 z-0 opacity-[0.4]">

        <div

          className="absolute inset-0"

          style={{

            backgroundImage: `radial-gradient(#D0D7DE 1px, transparent 1px)`,

            backgroundSize: '24px 24px',

            maskImage: `radial-gradient(circle 400px at ${mouse.x}px ${mouse.y}px, black, transparent)`,

          }}

        />

      </div>



      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

       

        {/* LEFT SECTION: BRANDING */}

        <div className="space-y-10">

          <div className="space-y-4">

            <div className="flex items-center gap-2">

              <span className="px-2 py-0.5 rounded-full border border-[#D0D7DE] bg-[#F6F8FA] text-[11px] font-medium text-[#656D76]">

                public_repo

              </span>

              <span className="text-zinc-300">/</span>

              <span className="text-[11px] font-mono font-bold text-[#0969DA]">final-commit-v4.0</span>

            </div>

            <h1 className="text-7xl md:text-[100px] font-bold tracking-tight leading-[0.9]">

              THE FINAL <br />

              <span className="text-[#1F2328]">COMMIT.</span>

            </h1>

          </div>



          <p className="max-w-md text-[#656D76] text-xl font-normal leading-relaxed">

            We are the engineers behind the curtain. Building

            <span className="text-[#1F2328] font-semibold italic"> immutable digital products</span> with 100% test coverage.

          </p>



          <div className="flex items-center gap-4">

            <button className="flex items-center gap-2 px-6 py-2.5 bg-[#24292F] text-white rounded-lg font-semibold text-sm hover:bg-[#1B1F23] transition-colors">

              <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path></svg>

              Star Portfolio

            </button>

            <button className="px-6 py-2.5 bg-[#F6F8FA] border border-[#D0D7DE] text-[#24292F] rounded-lg font-semibold text-sm hover:bg-[#F3F4F6] transition-colors">

              Meet the Team

            </button>

          </div>

        </div>



        {/* RIGHT SECTION: THE GITHUB BENTO */}

        <div

          className="relative transition-all duration-500 ease-out"

          style={{

            transform: `perspective(1000px) rotateY(${mouse.relX * 5}deg) rotateX(${mouse.relY * -5}deg)`,

          }}

          onMouseEnter={() => setIsHovered(true)}

          onMouseLeave={() => setIsHovered(false)}

        >

          <div className="bg-white border border-[#D0D7DE] rounded-xl shadow-[0_8px_24px_rgba(149,157,165,0.2)] overflow-hidden">

            {/* Bento Header */}

            <div className="px-6 py-4 bg-[#F6F8FA] border-b border-[#D0D7DE] flex items-center justify-between">

              <span className="text-xs font-semibold text-[#1F2328]">Engineering Activity</span>

              <div className="flex gap-1">

                {[...Array(3)].map((_, i) => (

                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#D0D7DE]" />

                ))}

              </div>

            </div>



            {/* Bento Body */}

            <div className="p-8 space-y-8">

              {/* Contribution Graph Simulation */}

              <div className="space-y-3">

                <div className="flex justify-between items-center text-[10px] text-[#656D76] font-mono uppercase tracking-widest">

                  <span>8,432 commits in 2026</span>

                  <span className="text-[#30a14e]">Live_Sync</span>

                </div>

                <div className="grid grid-cols-12 gap-1.5">

                  {[...Array(60)].map((_, i) => (

                    <div

                      key={i}

                      className="aspect-square rounded-[2px] transition-all duration-300"

                      style={{

                        backgroundColor: colors[Math.floor(Math.random() * colors.length)],

                        transform: isHovered ? `scale(${1 + Math.random() * 0.2})` : 'scale(1)',

                        opacity: isHovered ? 1 : 0.8

                      }}

                    />

                  ))}

                </div>

              </div>



              {/* Status Modules */}

              <div className="grid grid-cols-2 gap-4">

                <div className="p-4 border border-[#D0D7DE] rounded-lg bg-[#F6F8FA]/50">

                  <p className="text-[10px] text-[#656D76] uppercase font-bold mb-1">Build_Passing</p>

                  <p className="text-2xl font-bold text-[#1F2328]">100%</p>

                </div>

                <div className="p-4 border border-[#D0D7DE] rounded-lg bg-[#F6F8FA]/50">

                  <p className="text-[10px] text-[#656D76] uppercase font-bold mb-1">PR_Efficiency</p>

                  <p className="text-2xl font-bold text-[#1F2328]">0.8h</p>

                </div>

              </div>



              {/* Languages / Stack Bar */}

              <div className="space-y-2">

                <div className="flex justify-between text-[10px] font-bold text-[#656D76] uppercase">

                  <span>Tech Stack</span>

                  <span>94.2% JavaScript</span>

                </div>

                <div className="flex h-2 rounded-full overflow-hidden">

                  <div className="bg-[#3178c6] w-[70%]" />

                  <div className="bg-[#f1e05a] w-[20%]" />

                  <div className="bg-[#e34c26] w-[10%]" />

                </div>

              </div>

            </div>

          </div>



          {/* Decorative Cursor Tracker */}

          <div

            className="absolute -z-10 w-32 h-32 bg-[#21c354]/10 blur-[60px] rounded-full pointer-events-none transition-all duration-300"

            style={{ left: mouse.x - 400, top: mouse.y - 200 }}

          />

        </div>



      </div>

    </section>

  );

}