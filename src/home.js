'use client'

import React from 'react'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import Carousel from './carousel';
import CountUp from "react-countup";
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';


export function HeroThree() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  useEffect(()=>{
    AOS.init({duration:1200})
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
          <div className="text-center" data-aos="fade-up">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            <CountUp
                    start={0}
                    end={100}
                    duration={3}
                />
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
              commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-2">
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                View Docs
              </button>
              <button
                type="button"
                className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Get Started
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
