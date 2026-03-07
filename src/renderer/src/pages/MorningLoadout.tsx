import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const initialDrafts = [
  { id: 'task-1', content: 'Email Accountant', category: 'ADMIN', color: 'bg-gray-100', borderColor: 'border-gray-300' },
  { id: 'task-2', content: 'Write Script', category: 'CREATIVE', color: 'bg-yellow-100', borderColor: 'border-yellow-300' },
  { id: 'task-3', content: 'Call Mom', category: 'LIFE', color: 'bg-green-100', borderColor: 'border-green-300' },
  { id: 'task-4', content: 'Buy Cat Food', category: 'ERRAND', color: 'bg-gray-100', borderColor: 'border-gray-300' },
];

export default function MorningLoadout() {
  const [drafts, setDrafts] = useState<typeof initialDrafts>(initialDrafts);
  const [queue, setQueue] = useState<typeof initialDrafts>([]);

  const onDragEnd = (result: any) => {
    // Basic drag and drop logic
    if (!result.destination) return;

    const sourceList = result.source.droppableId === 'drafts' ? drafts : queue;
    const destList = result.destination.droppableId === 'drafts' ? drafts : queue;

    if (sourceList === destList) {
        const items = Array.from(sourceList);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        if (result.source.droppableId === 'drafts') setDrafts(items);
        else setQueue(items);
    } else {
        const sourceClone = Array.from(sourceList);
        const destClone = Array.from(destList);
        const [movedItem] = sourceClone.splice(result.source.index, 1);
        destClone.splice(result.destination.index, 0, movedItem);

        if (result.source.droppableId === 'drafts') {
            setDrafts(sourceClone);
            setQueue(destClone);
        } else {
            setQueue(sourceClone);
            setDrafts(destClone);
        }
    }
  };

  return (
    <div className="bg-background-light text-ink font-body min-h-screen flex flex-col overflow-hidden selection:bg-primary selection:text-ink">
      <header className="flex items-center justify-between border-b-[3px] border-ink bg-surface px-6 py-4 z-20 sticky top-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-ink text-primary flex items-center justify-center border-[3px] border-ink shadow-hard-sm">
            <span className="material-symbols-outlined text-2xl">visibility</span>
          </div>
          <h1 className="font-display text-2xl tracking-tight uppercase">Mystery Focus</h1>
        </div>
        <div className="flex gap-4">
          <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-background-light border-[3px] border-ink font-mono text-sm font-bold shadow-hard-sm">
            <span className="material-symbols-outlined text-base">local_fire_department</span>
            <span>STREAK: 4 DAYS</span>
          </div>
          <button className="w-10 h-10 bg-surface border-[3px] border-ink flex items-center justify-center hover:bg-primary transition-colors shadow-hard-sm active:translate-y-1 active:shadow-none">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <button className="w-10 h-10 bg-surface border-[3px] border-ink flex items-center justify-center hover:bg-accent-blue hover:text-white transition-colors shadow-hard-sm active:translate-y-1 active:shadow-none">
            <span className="material-symbols-outlined">inventory_2</span>
          </button>
        </div>
      </header>

      <DragDropContext onDragEnd={onDragEnd}>
        <main className="flex-1 flex flex-col md:flex-row h-[calc(100vh-80px)] overflow-hidden">
          {/* Left Column */}
          <section className="flex-1 flex flex-col border-r-0 md:border-r-[3px] border-ink bg-grid-pattern relative">
            <div className="p-8 pb-4 flex flex-col gap-6 h-full overflow-y-auto">
              <div>
                <h2 className="font-display text-3xl mb-1">INVENTORY</h2>
                <p className="font-mono text-muted font-bold text-sm uppercase tracking-wider">Load your tasks here</p>
              </div>

              <div className="relative group">
                <input className="w-full bg-surface border-[3px] border-ink p-6 text-2xl font-bold font-display placeholder:text-gray-300 focus:bg-primary focus:outline-none focus:placeholder:text-ink/40 shadow-hard transition-all duration-200" placeholder="What is the mission?" type="text" />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-ink text-white p-2 border border-ink hover:bg-accent-blue active:scale-95 transition-all flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>

              <div className="flex justify-between items-center border-b-2 border-dashed border-gray-300 pb-2">
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-ink text-white font-mono text-xs font-bold border-2 border-ink shadow-hard-sm hover:translate-y-px hover:shadow-none transition-all">ALL</button>
                  <button className="px-3 py-1 bg-transparent text-ink font-mono text-xs font-bold border-2 border-transparent hover:border-ink hover:bg-white transition-all">WORK</button>
                  <button className="px-3 py-1 bg-transparent text-ink font-mono text-xs font-bold border-2 border-transparent hover:border-ink hover:bg-white transition-all">LIFE</button>
                </div>
                <span className="font-mono text-xs font-bold text-muted">{drafts.length} DRAFTS</span>
              </div>

              <Droppable droppableId="drafts">
                {(provided) => (
                  <div className="flex flex-col gap-4 pb-20 min-h-[200px]" {...provided.droppableProps} ref={provided.innerRef}>
                    {drafts.map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`neo-card bg-surface p-4 flex justify-between items-center cursor-grab active:cursor-grabbing group ${snapshot.isDragging ? 'rotate-2 z-50 shadow-hard-lg' : ''}`}
                          >
                            <div className="flex items-center gap-3">
                              <span className="material-symbols-outlined text-gray-400 group-hover:text-ink">drag_indicator</span>
                              <div>
                                <h3 className="font-bold leading-tight text-lg">{task.content}</h3>
                                <span className={`text-xs font-mono ${task.color} px-1 border ${task.borderColor}`}>{task.category}</span>
                              </div>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                              <button className="w-8 h-8 flex items-center justify-center border-2 border-ink hover:bg-accent-red hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-sm">delete</span>
                              </button>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          </section>

          {/* Right Column */}
          <section className="flex-1 bg-surface flex flex-col relative h-full">
            <div className="p-8 flex flex-col h-full overflow-y-auto">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h2 className="font-display text-4xl mb-1 text-ink drop-shadow-[2px_2px_0_rgba(255,214,0,1)]">THE RUN</h2>
                  <p className="font-mono text-ink font-bold text-sm uppercase tracking-wider">Prioritize &amp; Execute</p>
                </div>
                <div className="bg-ink text-primary px-3 py-1 font-mono font-bold text-xs border border-primary shadow-hard-sm">
                  CAPACITY: 4 SLOTS
                </div>
              </div>

              {/* Boss Battle Slot */}
              <div className="mb-8 group">
                <div className="flex items-center justify-between mb-2">
                  <label className="font-display text-lg text-ink bg-primary px-2 border-2 border-ink shadow-hard-sm -rotate-1 inline-block">BOSS BATTLE</label>
                  <span className="font-mono text-xs font-bold bg-ink text-white px-2 py-0.5">PRIORITY #1</span>
                </div>
                <div className="relative bg-diagonal-stripes p-3 border-[3px] border-ink shadow-hard-lg transition-transform">
                  <div className="bg-surface border-[3px] border-ink p-5 flex justify-between items-start shadow-sm relative z-10">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-accent-red text-white text-[10px] font-mono font-bold px-1 py-0.5 border border-ink">URGENT</span>
                        <span className="font-mono text-xs text-muted font-bold">EST. 45m</span>
                      </div>
                      <h3 className="font-display text-2xl leading-tight">Finish Q3 Report</h3>
                      <p className="text-sm mt-2 text-gray-600 leading-snug">Data aggregation is done, just need to write the summary.</p>
                    </div>
                    <button className="ml-4 w-10 h-10 flex items-center justify-center border-[3px] border-ink bg-white hover:bg-accent-red hover:text-white transition-colors shadow-hard-sm btn-press">
                      <span className="material-symbols-outlined">close</span>
                    </button>
                  </div>
                  <div className="absolute -left-2 top-1/2 w-4 h-[3px] bg-ink"></div>
                  <div className="absolute -right-2 top-1/2 w-4 h-[3px] bg-ink"></div>
                </div>
              </div>

              {/* Side Quests */}
              <div className="flex flex-col gap-4 mb-24">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-lg">checklist</span>
                  <h3 className="font-display text-lg">SIDE QUESTS</h3>
                </div>

                <Droppable droppableId="queue">
                  {(provided) => (
                    <div className="flex flex-col gap-4 min-h-[150px]" {...provided.droppableProps} ref={provided.innerRef}>
                      {queue.map((task, index) => (
                        <Draggable key={task.id} draggableId={task.id} index={index}>
                          {(provided, snapshot) => (
                             <div
                               ref={provided.innerRef}
                               {...provided.draggableProps}
                               {...provided.dragHandleProps}
                               className={`relative flex items-center gap-4 ${snapshot.isDragging ? 'z-50' : ''}`}
                             >
                              <span className="font-display text-2xl text-gray-300 w-6">{index + 1}</span>
                              <div className="flex-1 bg-surface neo-border shadow-hard p-3 flex justify-between items-center group hover:-translate-y-0.5 transition-transform bg-white">
                                <div className="flex items-center gap-3">
                                  <div className={`w-2 h-full ${index % 2 === 0 ? 'bg-accent-blue' : 'bg-success'} self-stretch`}></div>
                                  <div>
                                    <h4 className="font-bold text-lg">{task.content}</h4>
                                    <span className="font-mono text-xs text-muted">15m • {task.category}</span>
                                  </div>
                                </div>
                                <button className="opacity-0 group-hover:opacity-100 text-ink hover:text-accent-red transition-all">
                                  <span className="material-symbols-outlined">remove_circle</span>
                                </button>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}

                      {/* Empty Slot Placeholder */}
                      <div className="relative flex items-center gap-4 group">
                        <span className="font-display text-2xl text-gray-300 w-6">{queue.length + 1}</span>
                        <div className="flex-1 border-[3px] border-dashed border-gray-300 p-4 flex items-center justify-center bg-gray-50/50 group-hover:border-ink group-hover:bg-yellow-50 transition-colors cursor-pointer">
                          <span className="font-mono text-gray-400 font-bold group-hover:text-ink flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg">add_circle</span>
                            DRAG MISSION HERE
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </Droppable>

              </div>
            </div>

            {/* Initiate Button */}
            <div className="absolute bottom-8 right-8 z-30">
              <button className="bg-primary hover:bg-[#ffe033] text-ink font-display text-xl px-8 py-4 neo-border shadow-[8px_8px_0px_0px_#1A1A1A] hover:shadow-[4px_4px_0px_0px_#1A1A1A] hover:translate-x-1 hover:translate-y-1 active:shadow-none active:translate-x-2 active:translate-y-2 transition-all flex items-center gap-3">
                INITIATE RUN
                <span className="material-symbols-outlined text-2xl">play_arrow</span>
              </button>
            </div>
          </section>
        </main>
      </DragDropContext>
    </div>
  );
}