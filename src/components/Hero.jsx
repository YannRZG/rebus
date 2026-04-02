import * as motion from "motion/react-client"
import { useNavigate } from "react-router-dom"


function Hero() {
  const navigate = useNavigate()

  return (
    <div style={container}>
      <motion.div
        style={content}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 variants={itemVariants} className="text-4xl font-bold text-white text-center">
           Margaux 
        </motion.h1>
        <motion.h2
          variants={itemVariants}
          className="text-2xl font-bold text-white text-center"
        >
         🎉 Joyeux anniversaire ! 🎉
        </motion.h2>
        <motion.p variants={itemVariants} className="text-lg text-white text-center">
          Aujourd’hui n’est pas un jour comme les autres…
        </motion.p>
        <motion.p variants={itemVariants} className="text-lg text-white text-center">
          J’ai préparé quelque chose pour toi 👀
        </motion.p>
        <motion.div variants={itemVariants} className="flex flex-row justify-center items-center gap-4">
        <motion.p variants={itemVariants} className="text-lg text-white text-center">
         un
        </motion.p>
        <motion.h1 variants={itemVariants} className="text-4xl font-bold text-white text-center">Rébus*</motion.h1>
        </motion.div>
        <motion.p variants={itemVariants} className="text-lg text-white text-center">
          Mais d'abord, quelques règles ..
          </motion.p>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/rules")}
          className="mt-4 px-6 py-3 bg-pink-500 text-white rounded-lg font-bold hover:bg-pink-600 transition"
        >
           →
        </motion.button>
      </motion.div>
    </div>
  )
}

export default Hero

// ===== Animations =====
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.6,
      delayChildren: 0.8,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

// ===== Styles =====
const container = {
  position: "relative",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "visible",
}

const content = {
  position: "relative",
  zIndex: 2,
  display: "flex",
  flexDirection: "column",
  gap: 20,
  maxWidth: 500,
  padding: 20,
}