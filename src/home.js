'use client'

import React from 'react'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import Carousel from './carousel';
import CountUp from "react-countup";
import AOS from "aos"
import { useNavigate } from 'react-router-dom';
import "aos/dist/aos.css"
import { useEffect } from 'react';


export function HeroThree() {
  const navigate=useNavigate();
  const handleAbout=()=>{
    navigate('/about')
  }
  const handleContact=()=>{
    navigate('/contact')
  }
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  useEffect(() => {
    AOS.init({ duration: 1200 })
  })
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <>
      <div className="relative w-full h-4/5">

        <Carousel />

        <div className="relative isolate z-0 bg-gradient-to-t from-green-400 to-sky-500 px-6 py-16 lg:px-8">
          <div className="relative mx-auto max-w-2xl py-24">
            <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">

            </div>
            <div className="text-center max-w-5xl" data-aos="fade-up">
              {/* <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                <CountUp
                  start={0}
                  end={100}
                  duration={3}
                />
              </h1> */}
              <p className="text-2xl max-w-4xl font-semibold text-gray-900 sm:text-2xl">
                We are an engineering consultant group providing service for corporate and plant level improvement of manufacturing facility, other than process, and integrate with your<b> Enterprise Management System</b>

              </p>
              <div className="mt-10 flex items-center justify-center gap-x-2">
                <button
                  type="button"
                  onClick={handleAbout}
                  className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  About Us
                </button>
                <button
                  type="button"
                  className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  onClick={handleContact}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroThree
