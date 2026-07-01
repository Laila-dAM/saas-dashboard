export default function BillingPage() {
  const plans = [
    { name: "Basic", price: "$9", features: ["Analytics", "Reports"] },
    { name: "Pro", price: "$29", features: ["Everything in Basic", "API Access", "Support"] },
    { name: "Enterprise", price: "$99", features: ["All features", "Dedicated support", "Custom SLA"] }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Billing</h1>
        <p className="text-sm text-slate-400">
          Manage your subscription and plans
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="p-6 bg-slate-900 border border-slate-800 rounded-lg space-y-3"
          >
            <h2 className="text-lg font-semibold">{plan.name}</h2>
            <p className="text-2xl font-bold">{plan.price}/mo</p>

            <ul className="text-sm text-slate-400 space-y-1">
              {plan.features.map((f) => (
                <li key={f}>• {f}</li>
              ))}
            </ul>

            <button className="w-full mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm rounded-md">
              Choose plan
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}