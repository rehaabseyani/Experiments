const lootItems = [
  { id: 1, title: 'The Engineering of Roman Concrete', type: 'VIDEO', time: '15m • YouTube', color: 'bg-accent-blue', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjJTER6CXzL8ewNONSIYQbOgT_Sxa7KuGYTp2dWR4jKCoBb3FUe6Z0pvMLT1Ro_Nr-1KdSmKM_-DNlVpcb4JGe0tqiBbJKy9ViAG-5DSrKGhd95Oz1JqdrTplidbgSIG7IZrf6QB0vZBFWlPs_80zrg-ntrsuYcre4T4Z_uMzzvGfo5VR_TiRMRUkKdNS2HiPfWoAqah3doz7NzPkHY6zaQqk9lvityoNdDrek962X7-jc89ZfIrwo42Gy1bcgF2EZYgzqGHvd5Ck', consumed: false },
  { id: 2, title: 'History of the Roland TR-808', type: 'PODCAST', time: '45m • 99% Invisible', color: 'bg-success', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7IrSsqbAo5UZi9bIg4dZJBtfWfxL_2N59txRYHiJ5sMaH0lDwC3kP_7tHYmtmVxgl_xan8L0-oNeD6A9QIAU5tMYuLG19uf_F9CWT_CH4hWFf3DUkGR8l3_YGDIyvV_zqIfON-d1Gxp-4JbIN7jF7PzmS0Ra6WRy3qA3XvAwzUlrRe6CiSbcRRTMz35XuvfidXh8ElObOUNQpCfuiiuC4gT8z4QWyhinqLqUkOpDj-UR2bFKf67Z4O4HNv7BMRFs_CXbDhNf4O5k', consumed: false },
  { id: 3, title: 'Why We See Faces in Objects', type: 'ARTICLE', time: '8m • Wikipedia', color: 'bg-accent-red', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOjTmLvA4IRDjQ34jzpDM0FT36gYNutPMLNJfQdcO-Qfk7xncpcbT8tJzhN0nlc8ItuRwCeY2Ie9K8xtbYMQof4lgCqrB4Up2yGJ7E_tTcQ9w9r3MwR3ctJrEgP8q0CCrUmf9cV5tj6DxGpWtl3EIRTN_Sw92ILyu_wEE0iyVVF_67KlSXVxjUr_HcArVKk98Kr9nFFq-cq3R5Daha5GXmZ4XwX8g7CAetOfZo6GiEde8S0vTHSbdfD6gg7VrhD8yqZUyMDopdzjQ', consumed: false },
  { id: 4, title: 'How Mechanical Keyboards Work', type: 'VIDEO', time: '12m • TechQuickie', color: 'bg-accent-blue', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzPZ02UA2qpgpuc_0DGokaY91fIcANvRfX2_CULSpzs0JPx1Oq1OB9aybCpK6EZq6FNx_jB5EyeRh0LskTztvZsaTCqquRaUobW8JwWLHCZR_3UL_68RCxQ_am8bWxdBJN0wZMIPbtZ-PpteN2vkBIYLv9T_25A57M3_ubVscBHB3urhfb1RikvwQ9ij8f-GTJzYUKCZ1O8h-qIRGb5UIwUGejNoF_KQtG8mb6m0KoZVJTYLiP6My2B07h0PRgckOvNLUH5zKYd7Y', consumed: false },
  { id: 5, title: 'Ophiocordyceps unilateralis', type: 'ARTICLE', time: '10m • NatGeo', color: 'bg-gray-500', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWLM7pWYAHIjuxw_ZmlUF1eI6x1Y-m6i7la69gE01-XcOJX5qUt1Ogrsl3VRBIkOaJYaPW_W0-SIcu6ejW8GEvfsFHrjzdZ4e6cUpWIRbEJpgiqFKDnJ9i2WhuM-neocUXYZgE9oB-1R3g_6neKBnqICPiyi588tnIteI84BXODH74LosLAYjwt3ImgilypNL0KFyoyWLNtzNN047yVM7oo_Sq7G12vNbQb7aWhLPYxkM_xLFiq1tSq741uVNtOSmSnUmarl-dxK4', consumed: true },
];

export default function LootLocker() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden bg-background-light font-body">
      <header className="flex items-center justify-between whitespace-nowrap border-b-[3px] border-ink bg-white px-8 py-4 z-20 sticky top-0">
        <div className="flex items-center gap-4 text-ink">
          <div className="size-8 bg-primary border-[3px] border-ink flex items-center justify-center shadow-hard-sm">
            <span className="material-symbols-outlined font-bold">extension</span>
          </div>
          <h2 className="text-ink text-2xl font-black uppercase tracking-tight">Mystery Focus</h2>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center border-[3px] border-ink bg-primary text-ink text-sm font-bold uppercase h-10 px-4 shadow-hard hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#1A1A1A] transition-all btn-press">
              Profile
            </button>
            <div className="bg-center bg-no-repeat bg-cover border-[3px] border-ink size-10 shadow-hard" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCd4zwMT4t2bHOs9bxkpWcMCHZFAcWhLQ4R3F6LAGk5jP_MTxfR6EylmWVFDIZ6oDxMvarCJiei0kps9Q3e1zsi8-x5QcBJEI4b4sXf1E9kgF5UINJ58Z1aAewPzthBQYIpcM9HLxB5SJRuHyDoKAURZvhtKC_sraRJPSR9X8c4bNHr30aNknAy1UqDpZs5AU1GWV3fnd2zqJm348wiPqPBwYVZ0sGohq7qqeF_1XGQl21ul4_xgTcDmPMC1te_Qsc4XVx_sbY8tZU')"}}></div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-80 bg-white border-r-[3px] border-ink flex flex-col p-6 gap-8 overflow-y-auto shrink-0 hidden lg:flex">
          <div>
            <h3 className="text-2xl font-black uppercase mb-6 tracking-tight border-b-[3px] border-ink pb-2">Player Stats</h3>
            <div className="flex flex-col gap-5">
              <div className="bg-background-light border-[3px] border-ink p-4 shadow-hard">
                <div className="flex items-center gap-3 mb-2 text-ink/70">
                  <span className="material-symbols-outlined">swords</span>
                  <span className="font-bold text-xs uppercase tracking-wider">Bosses Defeated</span>
                </div>
                <div className="text-4xl font-black text-ink">42</div>
              </div>
              <div className="bg-background-light border-[3px] border-ink p-4 shadow-hard">
                <div className="flex items-center gap-3 mb-2 text-ink/70">
                  <span className="material-symbols-outlined text-accent-red">local_fire_department</span>
                  <span className="font-bold text-xs uppercase tracking-wider">Current Streak</span>
                </div>
                <div className="text-4xl font-black text-ink">4 <span className="text-lg font-bold">Days</span></div>
              </div>
              <div className="bg-background-light border-[3px] border-ink p-4 shadow-hard">
                <div className="flex items-center gap-3 mb-2 text-ink/70">
                  <span className="material-symbols-outlined text-accent-blue">inventory_2</span>
                  <span className="font-bold text-xs uppercase tracking-wider">Total Loot</span>
                </div>
                <div className="text-4xl font-black text-ink">15</div>
              </div>
            </div>
          </div>
          <div className="mt-auto">
            <div className="bg-ink p-4 text-white border-[3px] border-ink shadow-hard relative">
              <div className="absolute -top-3 -right-3 bg-primary text-ink border-[3px] border-ink p-1 rotate-12 shadow-hard-sm">
                <span className="material-symbols-outlined text-xl font-black">emoji_events</span>
              </div>
              <p className="text-xs font-bold uppercase mb-2 text-white/70">Next Milestone</p>
              <p className="text-lg font-bold leading-tight">Unlock "Master Archivist" badge at 20 Loot Items.</p>
              <div className="w-full h-3 bg-white/20 mt-3 border border-white/30 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-3/4"></div>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 flex flex-col bg-background-light overflow-hidden relative">
          <div className="p-6 pb-2 sticky top-0 bg-background-light z-10">
            <div className="max-w-[1200px] mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-4xl font-black uppercase tracking-tight">The Loot Locker</h1>
                <p className="text-ink/70 font-medium">Your stash of unlocked knowledge and weird internet finds.</p>
              </div>
              <div className="flex border-[3px] border-ink bg-white shadow-hard p-1">
                <button className="px-6 py-2 font-bold uppercase text-sm border-2 border-transparent bg-primary text-ink shadow-[inset_2px_2px_0px_rgba(0,0,0,0.1)] transition-colors">
                  Stashed (9)
                </button>
                <button className="px-6 py-2 font-bold uppercase text-sm border-2 border-transparent text-ink/60 hover:bg-ink/5 hover:text-ink transition-colors">
                  Consumed (6)
                </button>
              </div>
            </div>
            <div className="h-1 bg-ink w-full mt-6 opacity-10"></div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 pt-4">
            <div className="max-w-[1200px] mx-auto w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 pb-12">
                {lootItems.map(item => (
                  <div key={item.id} className={`neo-card flex flex-col h-full bg-surface group ${item.consumed ? 'grayscale opacity-70 hover:opacity-100 hover:grayscale-0 relative' : ''}`}>
                    {item.consumed && (
                      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                        <div className="border-[4px] border-ink text-ink text-4xl font-black uppercase px-4 py-2 rotate-[-15deg] bg-transparent opacity-80" style={{maskImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><filter id=\"noise\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"1.5\" numOctaves=\"3\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23noise)\" opacity=\"0.5\"/></svg>')", WebkitMaskImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\" viewBox=\"0 0 100 100\"><filter id=\"noise\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"1.5\" numOctaves=\"3\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23noise)\" opacity=\"0.5\"/></svg>')"}}>
                          USED
                        </div>
                      </div>
                    )}
                    <div className="relative w-full h-40 border-b-[3px] border-ink overflow-hidden bg-gray-200">
                      <div className={`absolute top-2 right-2 ${item.color} text-white text-xs font-bold px-2 py-1 border-2 border-ink z-10 shadow-hard-sm`}>{item.type}</div>
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src={item.image} alt={item.title} />
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className={`text-lg font-bold leading-tight mb-2 ${item.consumed ? 'text-ink/60 line-through decoration-2' : ''}`}>{item.title}</h3>
                      <div className="flex items-center gap-2 mt-auto text-xs font-bold text-ink/60 uppercase">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        <span>{item.time}</span>
                      </div>
                      {item.consumed ? (
                        <button className="mt-4 w-full bg-gray-200 border-[3px] border-ink py-2 text-xs font-black uppercase text-ink/50 cursor-not-allowed">
                          Completed
                        </button>
                      ) : (
                        <button className="mt-4 w-full bg-primary border-[3px] border-ink py-2 text-xs font-black uppercase hover:bg-white transition-colors btn-press">
                          Consume Now
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}