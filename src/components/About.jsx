export default function About() {
  return (
    <section className="py-24 bg-white border-t border-[#D0D7DE]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-[250px_1fr] gap-12">
          
          {/* Sidebar Metadata (GitHub Style) */}
          <aside className="space-y-8">
            <div>
              <h3 className="text-[11px] font-bold text-[#656D76] uppercase tracking-widest mb-3">Established</h3>
              <p className="text-sm font-mono text-[#1F2328]">MMXXIV / 2024</p>
            </div>
            <div>
              <h3 className="text-[11px] font-bold text-[#656D76] uppercase tracking-widest mb-3">Core Focus</h3>
              <ul className="space-y-2 text-sm font-medium text-[#1F2328]">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#3178c6]" /> System Design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#f1e05a]" /> Rapid Prototyping
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#30a14e]" /> Scalable Logic
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content: The Manifesto */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F6F8FA] border border-[#D0D7DE] text-[11px] font-mono text-[#0969DA]">
              cat mission_statement.txt
            </div>

            <h2 className="text-5xl font-bold tracking-tight text-[#1F2328]">
              Beyond the code, <br />
              <span className="text-[#656D76]">we build impact.</span>
            </h2>

            <div className="space-y-6 text-lg text-[#656D76] leading-relaxed max-w-2xl">
              <p>
                <span className="text-[#1F2328] font-semibold italic">The Final Commit</span> was born in the pressure cooker of high-stakes hackathons. We realized that while many can ship code, few can ship <span className="text-black underline underline-offset-4">architectural integrity</span> under tight deadlines.
              </p>
              
              <p>
                Our collective is built on the philosophy that the "Final Commit" is more than just a git command—it's a signature of quality. We specialize in taking raw, complex problems and distilling them into production-ready solutions that don't just work, but scale.
              </p>

              <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-5 rounded-xl border border-[#D0D7DE] bg-[#F6F8FA]/30 group hover:border-[#0969DA] transition-colors">
                  <h4 className="font-bold text-[#1F2328] mb-2">Clean Architecture</h4>
                  <p className="text-sm">We prioritize modular, maintainable codebases that teams can actually build upon, not just look at.</p>
                </div>
                <div className="p-5 rounded-xl border border-[#D0D7DE] bg-[#F6F8FA]/30 group hover:border-[#0969DA] transition-colors">
                  <h4 className="font-bold text-[#1F2328] mb-2">Speed & Precision</h4>
                  <p className="text-sm">Velocity is nothing without direction. We move fast, but our technical choices are rooted in long-term stability.</p>
                </div>
              </div>
            </div>

            {/* GitHub Documentation Footer */}
            <div className="pt-8 border-t border-[#D0D7DE] flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-[#D0D7DE]" />
                ))}
              </div>
              <p className="text-xs text-[#656D76] font-mono italic">
                Verified by the collective. All systems optimal.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}