import { useState, useEffect, useRef } from 'react'
import './index.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);
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
import VotingPage from './pages/VotingPage'
import AdminDashboard from './pages/admin/AdminDashboard'
import {Analytics} from '@vercel/analytics/react'
import FloatingSprinkles from './components/FloatingSprinkles'

function App() {

  const {token} = useAppContext(AppContext)
  const location = useLocation()
  const isOwnerPath = location.pathname.startsWith('/admin')
  const lenisRef = useRef(null)

  const [scrollDisabled, setScrollDisabled] = useState(() => {
    return window.location.pathname === '/'
  })
  const scrollDisabledRef = useRef(scrollDisabled)

  useEffect(() => {
    scrollDisabledRef.current = scrollDisabled
  }, [scrollDisabled])

  useEffect(() => {
    if (scrollDisabled) {
      if (lenisRef.current) {
        lenisRef.current.stop()
      }
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      if (lenisRef.current) {
        lenisRef.current.start()
      }
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
  }, [scrollDisabled])

  useEffect(() => {
    const handleDisableScroll = () => setScrollDisabled(true)
    const handleEnableScroll = () => setScrollDisabled(false)

    window.addEventListener("disableScroll", handleDisableScroll)
    window.addEventListener("enableScroll", handleEnableScroll)

    return () => {
      window.removeEventListener("disableScroll", handleDisableScroll)
      window.removeEventListener("enableScroll", handleEnableScroll)
    };
  }, [])

  useEffect(() => {
    if (location.pathname !== '/' || window.homeAnimationPlayedGlobal) {
      setScrollDisabled(false)
    } else {
      setScrollDisabled(true)
    }
  }, [location.pathname])

  useEffect(() => {
    if (isOwnerPath) {
      if (lenisRef.current) {
        lenisRef.current.destroy()
        lenisRef.current = null
      }
      return
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
    })

    lenisRef.current = lenis

    if (scrollDisabledRef.current) {
      lenis.stop()
    }

    lenis.on('scroll', ScrollTrigger.update)

    const updateTicker = (time) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(updateTicker)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(updateTicker)
      lenisRef.current = null
    }
  }, [isOwnerPath])

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname])

  return (
    <div className='bg-primary text-text1 relative min-h-screen'>
      <Toaster/>
      <Analytics />
      {!isOwnerPath && <Navbar/>}
      {!isOwnerPath && <FloatingSprinkles />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/team' element={<Team />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/content' element={<Content />} />

        {/* <Route path='/votingPage' element={<VotingPage />} />
        <Route path='/votingResults' element={<AdminDashboard />} /> */}
        

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
