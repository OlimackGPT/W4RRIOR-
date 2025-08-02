export default function Leaderboard({ data }) {
  return (
    <div className="bg-zinc-900 p-4 rounded-lg shadow-md">
      <table className="w-full text-left">
        <thead className="text-yellow-300">
          <tr>
            <th>#</th>
            <th>Usuario</th>
            <th>Referidos</th>
            <th>Apuestas</th>
            <th>Rake</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, i) => (
            <tr key={i} className="border-b border-zinc-700">
              <td className="py-2">{i + 1}</td>
              <td>{user.name}</td>
              <td>{user.referrals}</td>
              <td>${user.wagers.toLocaleString()}</td>
              <td>${user.rake.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}