import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] grid md:grid-cols-2 items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-transparent pointer-events-none" />

      <div className="order-2 md:order-1 px-6 md:px-12 pb-16 md:pb-0">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 leading-tight">
          AI Signals for XAUUSD
        </h1>
        <p className="mt-4 text-lg text-gray-700 max-w-xl">
          Get clear BUY/SELL calls with chart snapshots and risk levels. Built for speed, clarity, and consistency.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#pricing" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gray-900 text-white hover:bg-black transition-colors">
            Start for $20/month
          </a>
          <a href="#signals" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/70 backdrop-blur border border-gray-200 hover:bg-white transition-colors">
            See recent signals
          </a>
        </div>
        <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
          <span className="px-2 py-1 rounded-full bg-green-100 text-green-700">Realtime</span>
          <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-700">XAUUSD Only</span>
          <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700">AI-Powered</span>
        </div>
      </div>

      <div className="relative order-1 md:order-2 h-[60vh] md:h-[90vh]">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none" />
      </div>
    </section>
  )
}
