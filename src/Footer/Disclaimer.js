import React from 'react'
import { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

export default function FeatureThree() {
  useEffect(()=>{
    AOS.init({duration:1200})
  })
  return (
    <>
      <div className="relative h-4/5 w-full isolate z-0 bg-gradient-to-t from-green-400 to-sky-500 px-6 py-20 lg:px-8 duration-200 scroll-smooth">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div className="mx-auto max-w-4xl text-center  backdrop-blur-sm bg-white/30 py-16 rounded-xl px-4" data-aos="fade-up">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Disclaimer
            </h2>
            <p className="mt-8 text-base leading-relaxed text-justify text-gray-600">
            All trademarks, service marks, trade names, product names, logos, and brands appearing on this site are the property of their respective owners. Any use of these marks, names, or brands does not imply endorsement. [Shiva Engineering Consultants] is not affiliated with, sponsored by, or endorsed by any of the trademark owners unless explicitly stated.
            </p>
            <p className="mt-8 text-base leading-relaxed text-justify text-gray-600">
            Use of this website will be at the sole risk of the user. Use of any service will not create any lawyer-client relationship. Shiva Consulting Engineers  will not be liable for any consequence of any action taken by the user relying on information or services provided under this website. In cases where the user has any legal issues, he/she in all cases must seek independent legal advice.

            </p>
          </div>

        </div>
      </div>
    </>
  )
}
