import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Placement_home from './components/Placement_home'
import Placement_about from './components/Placement_about'
import Placement_methodology from './components/Placement_methodology'
import Placement_student from './components/Placement_students'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Placement_home" element={<Placement_home />} />
        <Route path="/Placement_about" element={<Placement_about />} />
        <Route path="/Placement_methodology" element={<Placement_methodology />} />
        <Route path="/Placement_student" element={<Placement_student />} />
      </Routes>
    </>
  )
}


export default App


