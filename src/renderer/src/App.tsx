import { Routes, Route, useNavigate } from 'react-router-dom'
import MorningLoadout from './pages/MorningLoadout'
import FocusHud from './pages/FocusHud'
import LootLocker from './pages/LootLocker'

function Navigation() {
  const navigate = useNavigate()
  return (
    <div className="fixed bottom-4 left-4 z-50 flex gap-2">
      <button onClick={() => navigate('/')} className="px-2 py-1 bg-ink text-white text-xs font-mono">Loadout</button>
      <button onClick={() => navigate('/hud')} className="px-2 py-1 bg-ink text-white text-xs font-mono">HUD</button>
      <button onClick={() => navigate('/loot')} className="px-2 py-1 bg-ink text-white text-xs font-mono">Loot</button>
    </div>
  )
}

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<MorningLoadout />} />
        <Route path="/hud" element={<FocusHud />} />
        <Route path="/loot" element={<LootLocker />} />
      </Routes>
    </>
  )
}

export default App
