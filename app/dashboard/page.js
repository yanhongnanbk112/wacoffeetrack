"use client"  // ← ADD THIS LINE AT THE VERY TOP!
export default function Dashboard() {
    // Function to handle button clicks
    function handleQuickLog(amount) {
      alert(`Logged $${amount}!`)
    }
  
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            ☕ Coffee Tracker
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Quick Log
            </h2>
            <p className="text-gray-600 mb-6">
              How much did you spend?
            </p>
            
            <div className="flex gap-4">
              <button 
                onClick={() => handleQuickLog(5)}
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
              >
                $5
              </button>
              <button 
                onClick={() => handleQuickLog(7)}
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
              >
                $7
              </button>
              <button 
                onClick={() => handleQuickLog(10)}
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
              >
                $10
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }