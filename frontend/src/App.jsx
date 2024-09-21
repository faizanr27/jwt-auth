import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Signin from "./pages/Signin"
import Signup from "./pages/Singup"
function App() {


  return (
    <Router>
      <div className="bg-gray-300 min-h-screen flex items-center justify-center">
        <Routes>
          {/* <Route path="/" element={<Signin />} /> */}
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
