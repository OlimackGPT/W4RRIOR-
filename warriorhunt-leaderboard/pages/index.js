import Head from 'next/head'
import Leaderboard from '../components/Leaderboard'
import data from '../data/mockdata.json'

export default function Home() {
  const totalReferrals = data.reduce((acc, user) => acc + user.referrals, 0);
  const jackpot = totalReferrals * 50;

  return (
    <div className="bg-black text-white min-h-screen px-4 py-6">
      <Head>
        <title>WARRIORHUNT Leaderboard</title>
      </Head>
      <main className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-yellow-400">🏆 WARRIORHUNT Leaderboard</h1>
        <p className="text-lg">Usa el código <span className="text-green-400 font-bold">WARRIORHUNT</span> para participar.</p>
        <p className="text-lg">💰 Jackpot actual: <span className="text-yellow-300">${jackpot}</span></p>
        <Leaderboard data={data} />
      </main>
    </div>
  )
}