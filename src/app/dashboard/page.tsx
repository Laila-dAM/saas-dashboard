export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-sm text-slate-400">
          Overview of your SaaS metrics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg">
          <p className="text-sm text-slate-400">MRR</p>
          <p className="text-xl font-semibold">$12,430</p>
        </div>

        <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg">
          <p className="text-sm text-slate-400">Users</p>
          <p className="text-xl font-semibold">1,284</p>
        </div>

        <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg">
          <p className="text-sm text-slate-400">Churn</p>
          <p className="text-xl font-semibold">2.4%</p>
        </div>
      </div>

      <div className="p-6 bg-slate-900 border border-slate-800 rounded-lg">
        <p className="text-sm text-slate-400">Activity</p>
        <div className="h-40 mt-4 flex items-center justify-center text-slate-600">
          Chart Placeholder
        </div>
      </div>
    </div>
  )
}