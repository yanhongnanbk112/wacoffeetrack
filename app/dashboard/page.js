"use client"

import { useState } from 'react'

export default function Dashboard() {
  const [total, setTotal] = useState(0)
  const [count, setCount] = useState(0)
  
  function handleQuickLog(amount) {
    setTotal(total + amount)
    setCount(count + 1)
  }
  
  function handleReset() {
    setTotal(0)
    setCount(0)
  }
  
  // Calculate average
  const average = count > 0 ? (total / count).toFixed(2) : 0

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          ☕ Coffee Tracker
        </h1>
        
        {/* Stats display with average */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-600 mb-2">
                Today's Total
              </h2>
              <p className="text-4xl font-bold text-amber-600">
                ${total}
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-600 mb-2">
                Purchases
              </h2>
              <p className="text-4xl font-bold text-blue-600">
                {count}
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-600 mb-2">
                Average
              </h2>
              <p className="text-4xl font-bold text-green-600">
                ${average}
              </p>
            </div>
          </div>
          
          {/* Reset button */}
          {count > 0 && (
            <button 
              onClick={handleReset}
              className="mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition-colors"
            >
              Reset Today
            </button>
          )}
        </div>
        
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