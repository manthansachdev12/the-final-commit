import MemberCard from "./MemberCard";

export default function Team() {
  const members = [
    { name: "Manthan Sachdev", role: "Full Stack", tech: "Next.js • JavaScript • React.js • MongoDb", commits: "432", bio: "Obsessed with pixel-perfect UI and system performance." },
    { name: "Swastik Mishra", role: "Android Developer", tech: "Kotlin • Firebase • JavaScript", commits: "291", bio: "Designing Android apps and robust API architectures." },
    ];

  return (
    <section className="py-24 bg-white border-t border-[#D0D7DE] relative overflow-hidden">
      {/* BACKGROUND TEXTURE FOR DEPTH */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#D0D7DE] pb-8 gap-6">
          <div className="space-y-4">
            <h2 className="text-4xl font-black text-[#1F2328] tracking-tight uppercase italic">
              Contributors<span className="text-[#0969DA]">.</span>
            </h2>
            <div className="flex items-center gap-4 text-xs font-mono text-[#656D76]">
               <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#2da44e]" /> 02_active_nodes
               </span>
               <span>// production_ready</span>
            </div>
          </div>
        </div>

        {/* 5-MEMBER BALANCED GRID */}
        <div className="flex flex-wrap justify-center gap-8">
          {members.map((member, index) => (
            <div key={index} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] max-w-sm">
              <MemberCard {...member} />
            </div>
          ))}
        </div>

        {/* --- MODIFIED ENDING: ENGINEERING SYSTEM FOOTER --- */}
        <div className="mt-24 space-y-8">
          
          

          <div className="py-12 border-t border-[#D0D7DE] flex flex-col lg:flex-row items-center justify-between gap-10">
             {/* DETAILED STATS GRID */}
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-[#656D76] uppercase tracking-widest">Stability</p>
                  <p className="text-xl font-black text-[#1F2328]">99.99%</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-[#656D76] uppercase tracking-widest">Region</p>
                  <p className="text-xl font-black text-[#1F2328]">Indore_IN</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-[#656D76] uppercase tracking-widest">Uptime</p>
                  <p className="text-xl font-black text-[#2da44e]">Active</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-[#656D76] uppercase tracking-widest">License</p>
                  <p className="text-xl font-black text-[#1F2328]">MIT_v2</p>
                </div>
             </div>

             {/* CTA BUTTON: THE FINAL ACTION */}
             <div className="flex flex-col items-center lg:items-end gap-3">
                <p className="text-[11px] font-medium text-[#656D76] italic">Ready to initialize collaboration?</p>
                <button className="group relative px-8 py-3 bg-[#1F2328] text-white rounded-lg text-xs font-bold uppercase tracking-widest overflow-hidden transition-all hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)] active:scale-95">
                  <span className="relative z-10">Request Access</span>
                  <div className="absolute inset-0 bg-[#0969DA] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
