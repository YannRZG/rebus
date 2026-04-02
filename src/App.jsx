import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Rebus from './components/Rebus'
import Hero from './components/Hero'
import RulesPage from './pages/Rules'
function App() {
  return (
    <Router>
      <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom, #4c1d95, #ec4899)", backgroundAttachment: "fixed" }}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/rebus" element={<Rebus />} />
          <Route path="/rules" element={<RulesPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
