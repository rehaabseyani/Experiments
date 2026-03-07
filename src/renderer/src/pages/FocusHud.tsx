import { useState } from 'react';

export default function FocusHud() {
  const [showPivot, setShowPivot] = useState(false);
  const [showLoot, setShowLoot] = useState(false);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-body overflow-hidden selection:bg-primary selection:text-ink relative">
      <header className="w-full p-6 flex justify-between items-center z-10">
        <div className="flex items-center gap-2">
          <div className="size-3 bg-success rounded-full animate-pulse border-2 border-ink"></div>
          <span className="text-ink font-display text-sm tracking-widest uppercase">System Online</span>
        </div>
        <div className="neo-border bg-white px-3 py-1 shadow-hard-sm">
          <span className="text-ink font-mono text-xs font-bold">STREAK: 04</span>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center relative w-full h-full max-w-4xl mx-auto px-4 pb-12">
        <aside className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-20">
          <div className="neo-border bg-white p-3 shadow-hard rounded-full flex flex-col gap-4 items-center">
            <button aria-label="Rain Sounds" className="group relative flex items-center justify-center size-12 rounded-full hover:bg-primary/20 transition-colors btn-press">
              <span className="material-symbols-outlined text-ink text-3xl group-hover:scale-110 transition-transform">water_drop</span>
            </button>
            <button aria-label="Cafe Sounds" className="group relative flex items-center justify-center size-12 rounded-full bg-primary neo-border shadow-hard-sm transition-transform btn-press">
              <span className="material-symbols-outlined text-ink text-3xl">coffee</span>
            </button>
            <button aria-label="White Noise" className="group relative flex items-center justify-center size-12 rounded-full hover:bg-primary/20 transition-colors btn-press">
              <span className="material-symbols-outlined text-ink text-3xl group-hover:scale-110 transition-transform">graphic_eq</span>
            </button>
          </div>
          <div className="neo-border bg-white p-2 shadow-hard rounded-full flex flex-col items-center gap-1 h-24 justify-end">
            <div className="w-2 h-full bg-gray-200 rounded-full relative overflow-hidden">
              <div className="absolute bottom-0 w-full bg-ink h-[60%]"></div>
            </div>
            <span className="material-symbols-outlined text-ink text-xs">volume_up</span>
          </div>
        </aside>

        <div className="flex flex-col items-center w-full max-w-lg gap-8 relative">
          <div className="relative w-full">
            <div className="bg-surface neo-border shadow-hard-lg p-10 flex flex-col items-center justify-center rounded-lg relative overflow-hidden">
              <span className="text-ink/60 font-mono text-sm tracking-widest mb-2 uppercase">Time Remaining</span>
              <h1 className="text-ink font-mono text-7xl md:text-9xl font-medium tracking-tighter leading-none relative z-10">
                24:59
              </h1>
              <div className="w-full h-3 mt-6 neo-border bg-gray-100 rounded-full overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full bg-primary w-[85%] border-r-2 border-ink"></div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col gap-6">
            <div className="bg-primary/10 neo-border p-6 shadow-hard bg-white relative">
              <div className="absolute -top-3 left-4 bg-primary neo-border px-2 py-0.5 text-xs font-display uppercase tracking-wider shadow-hard-sm">
                Current Mission
              </div>
              <h2 className="text-ink font-display text-2xl md:text-3xl leading-tight text-center mt-2">
                Draft Q3 Marketing Strategy Report
              </h2>
              <div className="flex justify-center gap-2 mt-4">
                <span className="px-2 py-1 bg-gray-100 border-2 border-ink text-xs font-mono font-bold uppercase rounded-sm">#Strategy</span>
                <span className="px-2 py-1 bg-gray-100 border-2 border-ink text-xs font-mono font-bold uppercase rounded-sm">High Priority</span>
              </div>
            </div>

            <button onClick={() => setShowLoot(true)} className="w-full bg-success neo-border shadow-hard py-5 px-8 text-ink hover:bg-[#25b560] transition-all btn-press group relative overflow-hidden">
              <div className="flex items-center justify-center gap-3 relative z-10">
                <span className="material-symbols-outlined text-3xl font-black">check_circle</span>
                <span className="font-display text-2xl uppercase tracking-wide">Smash Task</span>
              </div>
            </button>

            <div className="text-center">
              <button onClick={() => setShowPivot(true)} className="text-ink/60 hover:text-ink font-body font-medium underline decoration-2 decoration-primary underline-offset-4 hover:decoration-ink transition-all text-sm flex items-center justify-center gap-1 mx-auto">
                <span className="material-symbols-outlined text-lg">psychology_alt</span>
                Stuck? Pivot Strategy
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Pivot Modal overlay */}
      {showPivot && (
        <div className="fixed inset-0 z-50 flex flex-1 items-center justify-center p-4 backdrop-blur-sm bg-ink/50 h-screen w-full">
          <div className="bg-surface border-3 border-ink shadow-hard-lg max-w-4xl w-full flex flex-col md:flex-row overflow-hidden relative">
            <div className="w-full md:w-1/3 bg-ink p-8 flex flex-col justify-between text-white relative">
              <div className="relative z-10">
                <h1 className="font-display text-4xl leading-tight mb-4 text-primary">TACTICAL<br/>RETREAT?</h1>
                <p className="font-body text-lg text-gray-300 leading-relaxed">Mission paused. No shame. Just strategy.</p>
              </div>
            </div>
            <div className="w-full md:w-2/3 p-8 bg-surface flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-xl text-ink uppercase">Select Protocol</h2>
                <button onClick={() => setShowPivot(false)} className="text-xs font-mono underline hover:text-accent-blue decoration-2 underline-offset-4">Skip & Continue</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full strategy-group">
                <button className="group strategy-card neo-card bg-surface p-4 flex flex-col items-center text-center justify-center gap-3 relative h-64 md:h-auto">
                  <div className="w-16 h-16 bg-background-light rounded-full border-3 border-ink flex items-center justify-center mb-2 group-hover:bg-white transition-colors">
                    <span className="material-symbols-outlined text-4xl text-ink">content_cut</span>
                  </div>
                  <h3 className="font-display text-lg leading-none">SPLIT<br/>IT UP</h3>
                  <p className="text-sm font-medium text-gray-600 leading-snug group-hover:text-ink">Task too big? Break into 2 sub-quests.</p>
                </button>
                <button className="group strategy-card neo-card bg-surface p-4 flex flex-col items-center text-center justify-center gap-3 relative h-64 md:h-auto">
                  <div className="w-16 h-16 bg-background-light rounded-full border-3 border-ink flex items-center justify-center mb-2 group-hover:bg-white transition-colors">
                    <span className="material-symbols-outlined text-4xl text-ink">shuffle</span>
                  </div>
                  <h3 className="font-display text-lg leading-none">SHUFFLE<br/>DECK</h3>
                  <p className="text-sm font-medium text-gray-600 leading-snug group-hover:text-ink">Not the vibe? Move to end of queue.</p>
                </button>
                <button className="group strategy-card neo-card bg-surface p-4 flex flex-col items-center text-center justify-center gap-3 relative h-64 md:h-auto">
                  <div className="w-16 h-16 bg-background-light rounded-full border-3 border-ink flex items-center justify-center mb-2 group-hover:bg-white transition-colors">
                    <span className="material-symbols-outlined text-4xl text-ink">air</span>
                  </div>
                  <h3 className="font-display text-lg leading-none">BRAIN<br/>RESET</h3>
                  <p className="text-sm font-medium text-gray-600 leading-snug group-hover:text-ink">Brain fog? 2 min box breathing.</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Loot Reveal Modal */}
      {showLoot && (
        <div className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-[600px] flex flex-col items-center">
            <div className="mb-8 text-center animate-pulse">
              <p className="font-mono text-primary text-sm md:text-base font-bold tracking-widest bg-ink px-4 py-2 inline-block border-2 border-primary shadow-[4px_4px_0_#FFD600]">
                &lt; TASK DESTROYED. CLAIM LOOT. &gt;
              </p>
            </div>
            <div className="relative w-full">
              <div className="relative z-20 w-full bg-surface border-3 border-ink shadow-hard-lg p-0 overflow-hidden transform">
                <div className="absolute -right-12 top-6 rotate-45 bg-accent-red px-12 py-1 border-y-2 border-ink z-30 shadow-sm">
                  <p className="text-white font-display text-xs tracking-widest text-center">NEW!</p>
                </div>
                <div className="relative w-full aspect-video border-b-[3px] border-ink group overflow-hidden bg-ink">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuASFLIdM4-N71Whkitky7YV_8n9GxjGCa7yKc02bCYKYrpmm3pDfv6XEkfiBKWrZT71D1bpLokrYyvMyZUqTX9G4C4LvAOBwMmQICZjIjKMhIvaip4YR0sXMrTlFmQPcvJzIwr-7D3VJYBGxKmiB3YQKj7yrF4s3uyrHUJIWEN64j_i_cSR1Y14k-f-9_bjRSwG-qgJdUQhQHIAD8U6PkmrKoW7PQOtb7rQMCCSxKgqM9HG8L1N90t3-hDYC1gvwQDJFgVWTXu2zms')"}}>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 bg-accent-blue text-white font-mono text-xs font-bold px-2 py-1 border-2 border-ink shadow-[2px_2px_0_#1A1A1A]">
                      <span className="material-symbols-outlined text-[14px]">history_edu</span>
                      HISTORY
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8 relative" style={{ backgroundImage: "repeating-linear-gradient(45deg, #F4F0E6, #F4F0E6 10px, #e8e4d8 10px, #e8e4d8 20px)" }}>
                  <p className="text-muted font-mono text-xs font-bold tracking-widest mb-2 uppercase">Rare Drop Unlocked!</p>
                  <h2 className="font-display text-2xl md:text-3xl leading-tight text-ink mb-6 uppercase">
                    The Engineering of Roman Concrete
                  </h2>
                  <div className="flex flex-col md:flex-row gap-4 items-stretch">
                    <button className="group flex-1 relative bg-primary text-ink border-[3px] border-ink shadow-hard active:translate-x-1 active:translate-y-1 active:shadow-none transition-all hover:bg-[#ffe033]">
                      <div className="px-6 py-4 flex items-center justify-center gap-3">
                        <span className="material-symbols-outlined text-[24px]">visibility</span>
                        <span className="font-display text-sm md:text-base tracking-wide">CONSUME NOW (15m)</span>
                      </div>
                    </button>
                    <button className="flex-1 md:flex-none relative bg-white text-ink border-[3px] border-ink shadow-hard active:translate-x-1 active:translate-y-1 active:shadow-none transition-all hover:bg-slate-50 px-6 py-4 flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-[20px]">inventory_2</span>
                      <span className="font-display text-sm md:text-base tracking-wide">STASH IN LOCKER</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <button onClick={() => setShowLoot(false)} className="text-white/60 hover:text-white font-mono text-sm border-b border-white/60 hover:border-white pb-0.5 transition-colors">
                Close & Return to Focus HUD
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}