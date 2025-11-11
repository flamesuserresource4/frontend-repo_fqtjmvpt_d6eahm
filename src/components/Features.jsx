export default function Features() {
  const items = [
    {
      title: 'Crystal Clear Entries',
      desc: 'We highlight entry, SL, and TP with concise rationale.'
    },
    {
      title: 'Chart Snapshots',
      desc: 'Every signal includes a fresh image of the current chart context.'
    },
    {
      title: 'AI Confidence',
      desc: 'Each call is scored 0-100 to help you size risk.'
    },
    {
      title: 'Web + Email Alerts',
      desc: 'See signals instantly on web and receive email summaries.'
    }
  ]
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <div key={i} className="p-6 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur">
              <h3 className="font-semibold text-gray-900">{it.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
