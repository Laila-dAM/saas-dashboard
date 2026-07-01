type Props = {
  params: {
    id: string
  }
}

export default function UserDetailsPage({ params }: Props) {
  const user = {
    id: params.id,
    name: "John Doe",
    email: "john@example.com",
    status: "active",
    role: "admin"
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">User Details</h1>
        <p className="text-sm text-slate-400">ID: {user.id}</p>
      </div>

      <div className="p-6 bg-slate-900 border border-slate-800 rounded-lg space-y-3">
        <div>
          <p className="text-sm text-slate-400">Name</p>
          <p className="text-base">{user.name}</p>
        </div>

        <div>
          <p className="text-sm text-slate-400">Email</p>
          <p className="text-base">{user.email}</p>
        </div>

        <div>
          <p className="text-sm text-slate-400">Status</p>
          <p className="text-base">{user.status}</p>
        </div>

        <div>
          <p className="text-sm text-slate-400">Role</p>
          <p className="text-base">{user.role}</p>
        </div>
      </div>
    </div>
  )
}