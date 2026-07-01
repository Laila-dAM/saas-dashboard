export default function AnalyticsPage() {
  const data = [
    { label: "Visits", value: "24,320" },
    { label: "Signups", value: "1,240" },
    { label: "Conversion", value: "4.8%" },
    { label: "Revenue", value: "$18,540" }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Analytics</h1>
        <p className="text-sm text-slate-400">
          Performance overview of your platform
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item) => (
          <div
            key={item.label}
            className="p-4 bg-slate-900 border border-slate-800 rounded-lg"
          >
            <p className="text-sm text-slate-400">{item.label}</p>
            <p className="text-xl font-semibold">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="p-6 bg-slate-900 border border-slate-800 rounded-lg">
        <p className="text-sm text-slate-400 mb-4">Traffic chart</p>
        <div className="h-48 flex items-center justify-center text-slate-600">
          Chart Placeholder
        </div>
      </div>
    </div>
  )
}