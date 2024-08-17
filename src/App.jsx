import { useState } from 'react'
import {BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom" 
import SignIn from './pages/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<SignIn/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
