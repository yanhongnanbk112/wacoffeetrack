export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-amber-900 mb-4">
          ☕ CoffeeTrack
        </h1>
        <p className="text-xl text-amber-700 mb-8">
          Track your coffee spending, save money!
        </p>
        
        {/* Add this button */}
        <a 
          href="/dashboard"
          className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
        >
          Start Tracking →
        </a>
        
        <div className="text-sm text-amber-600 mt-6">
          Day 2 - Quick-log buttons working! 🚀
        </div>
      </div>
    </div>
  )
}