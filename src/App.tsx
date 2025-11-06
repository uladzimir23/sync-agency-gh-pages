import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { useState, useEffect } from 'react'
import { 
  Rocket, 
  Sparkles, 
  Code2, 
  Palette,
  Zap,
  Github,
  ExternalLink
} from 'lucide-react'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "TypeScript",
      description: "Полная типобезопасность и лучшие практики разработки"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Tailwind CSS",
      description: "Современная утилитарная система стилей"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Framer Motion",
      description: "Плавные анимации и интерактивные элементы"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "React 18",
      description: "Последняя версия с Concurrent Features"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-purple-900/20 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-6 py-3 mb-8"
          >
            <Rocket className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">
              Успешно задеплоено на GitHub Pages
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Colabsys{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              UI
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Современный React + TypeScript шаблон с Tailwind CSS, Framer Motion 
            и всем необходимым для быстрого старта вашего проекта
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={clsx(
                "bg-gradient-to-r from-purple-500 to-pink-500",
                "text-white font-semibold py-4 px-8 rounded-xl",
                "flex items-center gap-2 shadow-lg shadow-purple-500/25"
              )}
            >
              <Sparkles className="w-5 h-5" />
              Начать работу
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={clsx(
                "bg-white/10 backdrop-blur-sm border border-white/20",
                "text-white font-semibold py-4 px-8 rounded-xl",
                "flex items-center gap-2 hover:bg-white/20 transition-colors"
              )}
            >
              <Github className="w-5 h-5" />
              GitHub
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={clsx(
                "bg-white/5 backdrop-blur-sm border border-white/10",
                "rounded-2xl p-6 hover:bg-white/10 transition-all duration-300",
                "group cursor-pointer"
              )}
            >
              <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 1.2 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
      >
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Готовы к разработке?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Все зависимости настроены и готовы к работе. Начните создавать 
            потрясающие приложения прямо сейчас!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={clsx(
              "bg-white text-slate-900 font-bold py-4 px-8 rounded-xl",
              "flex items-center gap-2 mx-auto shadow-lg",
              "hover:shadow-xl transition-all duration-300"
            )}
          >
            <ExternalLink className="w-5 h-5" />
            Исследовать документацию
          </motion.button>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 1.4 }}
        className="border-t border-white/10 py-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            Создано с ❤️ использованием React, TypeScript, Tailwind CSS и Framer Motion
          </p>
        </div>
      </motion.footer>
    </div>
  )
}

export default App