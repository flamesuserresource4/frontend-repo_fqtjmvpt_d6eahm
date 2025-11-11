import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Signals from './components/Signals'

function App() {
  const [status, setStatus] = useState('')
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleSubscribe = async (plan) => {
    const email = window.prompt('Enter your email to subscribe:')
    if (!email) return
    try {
      setStatus('Processing...')
      const res = await fetch(`${baseUrl}/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, plan })
      })
      if (!res.ok) throw new Error('Subscription failed')
      setStatus('Success! Check your email for confirmation.')
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    } finally {
      setTimeout(() => setStatus(''), 4000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Features />
        <Signals />
        <Pricing onSubscribe={handleSubscribe} />
        {status && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg">
            {status}
          </div>
        )}
      </main>
      <footer className="py-10 text-center text-sm text-gray-600">© {new Date().getFullYear()} Aurum AI. All rights reserved.</footer>
    </div>
  )
}

export default App
