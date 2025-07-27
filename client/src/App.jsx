import { useState } from 'react'
import './index.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Events from './pages/Events'
import Team from './pages/Team'
import Gallery from './pages/Gallery'
import Layout from './pages/admin/Layout'
import AddEvent from './pages/admin/AddEvent'
import ManageEvents from './pages/admin/ManageEvents'
import { AppContext, useAppContext } from './context/AppContext'
import Login from './components/Login'
import {Toaster} from 'react-hot-toast'
import Content from './pages/Content'
import ManageContent from './pages/admin/ManageContent'
import AddContent from './pages/admin/AddContent'

function App() {

  const {token} = useAppContext(AppContext)
  const isOwnerPath = useLocation().pathname.startsWith('/admin')

  return (
    <div className='bg-primary text-text1'>
      <Toaster/>
      {!isOwnerPath && <Navbar/>}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/team' element={<Team />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/content' element={<Content />} />
        <Route path='/admin' element={token ? <Layout/> : <Login/>}>
            <Route index element={<ManageEvents/>} />
            <Route path='add-event' element={<AddEvent/>} />
            <Route path='add-content' element={<AddContent/>} />
            <Route path='manage-content' element={<ManageContent/>} />
        </Route>      
      </Routes>

      {!isOwnerPath && <Footer/>}
    </div>
  )
}

export default App
