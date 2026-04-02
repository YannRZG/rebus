import * as motion from "motion/react-client"
import { useState } from "react"


const images = [
  "src/assets/IMG_0848.JPG",
  "src/assets/IMG_0849.JPG",
  "src/assets/IMG_0847.JPG",
  "src/assets/IMG_0846.JPG",
]

export default function Rebus() {
  const [answer, setAnswer] = useState("")
  const [correct, setCorrect] = useState(false)
  const [shake, setShake] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (answer.trim().toLowerCase() === "saut à l'élastique") {
      setCorrect(true)
    } else {
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Résous le rébus pour découvrir ton cadeau 🎁
      </motion.h2>

      {/* Images du rébus */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {images.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`Rébus ${i + 1}`}
            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-xl shadow-lg cursor-pointer"
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 1.5 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, type: "spring", stiffness: 100 }}
          />
        ))}
      </div>

      {/* Input */}
      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full max-w-md"
        animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
        transition={{ duration: 0.5 }}
      >
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Écris ta réponse ici..."
          className="w-full p-3 rounded-lg border-2 border-gray-400 text-lg focus:outline-none focus:ring-4 focus:ring-pink-400 text-gray-100"
        />
        <button
          type="submit"
          className="mt-4 px-6 py-3 bg-pink-500 text-white rounded-lg font-bold hover:bg-pink-600 transition"
        >
          Vérifier
        </button>
      </motion.form>

      {/* Message de succès */}
      {correct && (
        <motion.div
          className="mt-8 p-6 bg-green-400 text-white rounded-xl text-center font-bold text-xl shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
        >
          🎉 Bravo ! Ton cadeau est un saut à l'élastique ! 🎉
        </motion.div>
      )}
    </div>
  )
}