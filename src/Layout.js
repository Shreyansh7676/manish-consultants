import React from 'react'
import Navbar from './nabvbar'
import Footer from './footer'
import { Outlet, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
function Layout() {
  const location=useLocation();
  return (
    <>
    <Navbar />
    <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname}/>
    <Outlet />
    </AnimatePresence>
    
    <Footer />
    </>
  )
}

export default Layout
