import {BrowserRouter as Router,Route,Routes,Navigate} from "react-router-dom" 
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Teacher from './pages/User'
import Classroom from './pages/Classroom'
import ShowClassrooms from './pages/ShowClassrooms'
import EditUser from './pages/EditUser'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<SignIn/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/createuser' element={<Teacher/>} />
          <Route path='/classroom' element={<Classroom/>}/>
          <Route path='/showclassroom' element={<ShowClassrooms/>}/>
          <Route path='/dashboard/:userId' element={<EditUser/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
