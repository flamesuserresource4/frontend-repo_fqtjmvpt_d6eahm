import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur-md bg-white/40 border-b border-white/30">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 shadow-inner" />
          <span className="font-semibold tracking-tight text-gray-900">Aurum AI</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#signals" className="hover:text-gray-900">Signals</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#pricing" className="hidden md:inline-flex bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-black transition-colors">Get Started</a>
          <button className="md:hidden p-2 rounded-lg hover:bg-white/60">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
