export default function UsersPage() {
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "inactive" },
    { id: 3, name: "Alex Brown", email: "alex@example.com", status: "active" }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Users</h1>
        <p className="text-sm text-slate-400">Manage your platform users</p>
      </div>

      <div className="overflow-hidden border border-slate-800 rounded-lg">
        <table className="w-full text-sm">
          <thead className="bg-slate-900 text-slate-400">
            <tr>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Email</th>
              <th className="text-left p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t border-slate-800">
                <td className="p-3">{user.name}</td>
                <td className="p-3 text-slate-400">{user.email}</td>
                <td className="p-3">
                  <span
                    className={
                      user.status === "active"
                        ? "text-green-400"
                        : "text-red-400"
                    }
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}