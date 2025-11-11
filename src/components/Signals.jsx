import { useEffect, useState } from 'react'

export default function Signals() {
  const [signals, setSignals] = useState([])
  const [loading, setLoading] = useState(true)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/signals`)
        if (res.ok) {
          const data = await res.json()
          setSignals(data)
        }
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="signals" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Recent Signals</h2>
          <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900">Subscribe to get alerts</a>
        </div>

        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : signals.length === 0 ? (
          <div className="p-6 rounded-2xl border border-dashed border-gray-300 text-gray-600">No signals yet. Subscribe and be first to receive alerts.</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {signals.map((s, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className={`px-2 py-1 text-xs rounded-full ${s.action === 'BUY' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{s.action}</span>
                  <span className="text-xs text-gray-600">{s.timeframe}</span>
                </div>
                <div className="mt-3 text-sm text-gray-700">
                  <p>Entry: {s.entry ?? '-'} | SL: {s.stop_loss ?? '-'} | TP: {s.take_profit ?? '-'}</p>
                  {s.confidence != null && (
                    <p className="mt-1 text-xs text-gray-500">Confidence: {s.confidence}%</p>
                  )}
                </div>
                {s.snapshot_url && (
                  <img src={s.snapshot_url} alt="chart" className="mt-4 w-full h-56 object-cover rounded-xl border" />
                )}
                {s.note && <p className="mt-3 text-sm text-gray-600">{s.note}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
