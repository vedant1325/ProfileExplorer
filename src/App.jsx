import React from 'react'
import Navbar from './components/Navbar'
import Admin from "./pages/AdminPanel"
import Home from "./pages/Home"
import { Route, Routes } from 'react-router-dom'
import Profiles from './pages/Profiles'
import AdminPanel from './pages/AdminPanel'
import UserList from './pages/UserList'
import MapComponent from './pages/MapComponent'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/admin' element={<AdminPanel/>}/>
<Route path='/profiles' element={<Profiles/>}/>
<Route path='/userlist' element={<UserList/>}/>
<Route path="/map" element={<MapComponent />} />

      </Routes>
    
    </div>
  )
}

export default App
