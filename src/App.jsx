import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Placement_Home from './components/Placement_components/Placement_Home'
import E_commerce from './components/Projects_component/E_commerce'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Placement_Home" element={<Placement_Home />} />
        <Route path="/E_commerce" element={<E_commerce />} />
      </Routes>
    </>
  )
}


export default App


