import { db } from "@/core/db";
import UserTable from "@/modules/users/components/UserTable";

export default async function UsersPage() {
  // Fetch users directly from PostgreSQL
  const users = await db.user.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    }
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-bold text-2xl tracking-tight">User Management</h1>
        <p className="text-zinc-500 text-sm">Manage permissions and account details for your team.</p>
      </div>

      {/* Pass the data to our Client Component table */}
      <UserTable initialUsers={users} />
    </div>
  );
}