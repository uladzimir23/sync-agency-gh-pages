import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Colabsys UI
        </h1>
        <p className="text-gray-600 mb-6">
          Все зависимости работают!
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={clsx(
            "bg-blue-500 hover:bg-blue-600 text-white font-semibold",
            "py-2 px-4 rounded-lg transition-colors w-full"
          )}
          onClick={() => setCount(count + 1)}
        >
          Count: {count}
        </motion.button>
      </motion.div>
    </div>
  )
}

export default App