export default function Pricing({ onSubscribe }) {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">Simple, honest pricing</h2>
        <p className="text-center text-gray-600 mt-2">Cancel anytime. Signals for XAUUSD only.</p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur">
            <h3 className="text-xl font-semibold text-gray-900">Monthly</h3>
            <div className="mt-2 text-4xl font-black tracking-tight">$20<span className="text-base font-medium text-gray-500">/mo</span></div>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>Unlimited signals</li>
              <li>Realtime web access</li>
              <li>Email summaries</li>
            </ul>
            <button onClick={() => onSubscribe('monthly')} className="mt-6 w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-black">Start monthly</button>
          </div>
          <div className="p-8 rounded-2xl border-2 border-amber-400 bg-white/80 backdrop-blur relative">
            <span className="absolute -top-3 right-6 text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-700 border border-amber-200">Best value</span>
            <h3 className="text-xl font-semibold text-gray-900">Yearly</h3>
            <div className="mt-2 text-4xl font-black tracking-tight">$199<span className="text-base font-medium text-gray-500">/yr</span></div>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>Everything in monthly</li>
              <li>2 months free compared to monthly</li>
              <li>Priority support</li>
            </ul>
            <button onClick={() => onSubscribe('yearly')} className="mt-6 w-full bg-amber-500 text-white py-3 rounded-xl hover:bg-amber-600">Start yearly</button>
          </div>
        </div>
      </div>
    </section>
  )
}
