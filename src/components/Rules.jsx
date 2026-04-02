import * as motion from "motion/react-client"
import { useNavigate } from "react-router-dom" 


export default function Rules() {
    const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col items-center gap-4"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold text-white text-center"
        >
          Règles
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg text-white text-center">
          - Tu dois résoudre le rébus en moins de 60 secondes.
        </motion.p>
        <motion.p variants={itemVariants} className="text-lg text-white text-center">
          - Si tu échoues 
        </motion.p>
        <motion.img
          src="src/assets/map2.png"
          alt="Rébus 1"
          variants={itemVariants}
          className="w-100 h-60 object-cover cursor-pointer"
          whileHover={{ scale: 1.95 }}
          whileTap={{ scale: 1.95 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, type: "spring", stiffness: 100 }}
        />
        <motion.p variants={itemVariants} className="text-lg text-white text-center">
          - Si tu réussis
        </motion.p>
        <motion.p variants={itemVariants} className="text-5xl text-white text-center">
        😏
        </motion.p>
        <motion.p variants={itemVariants} className="text-lg text-white text-center">
          Prête à relever le défi ?
        </motion.p>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/rebus")}
          className="mt-4 px-6 py-3 bg-pink-500 text-white rounded-lg font-bold hover:bg-pink-600 transition"
        >
          Commencer le rébus →
        </motion.button>
      </motion.div>
    </div>
  )
}

// ===== Variants pour l’animation séquentielle =====
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.6, // délai entre chaque élément
      delayChildren: 0.4,   // délai avant de commencer
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}