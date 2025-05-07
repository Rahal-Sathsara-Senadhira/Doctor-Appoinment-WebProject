import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import MyAppoinments from './pages/MyAppoinments'
import Doctor from './pages/Doctors'
import Appoinment from './pages/Appoinment'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import About from './pages/About'
import Footer from './components/Footer'

function App() {
 

  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/MyProfile' element={<MyProfile/>}/>
        <Route path='/MyAppoinments' element={<MyAppoinments/>}/>
        <Route path='/appoinment/:docId' element={<Appoinment/>}/>
        <Route path='/Doctors' element={<Doctor/>}/>
        <Route path='/Doctors/:speciality' element={<Doctor/>}/>

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
