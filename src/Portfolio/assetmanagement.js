import React from 'react'
import { useEffect } from 'react'
import AOS from "aos"
import CarouselLeft from '../CarouselAsset/Carouselleft'
import "aos/dist/aos.css"

export default function CtaOne() {
  useEffect(() => {
    AOS.init({ duration: 1200 })
  })
  return (
    <section className="py-10 bg-gradient-to-t from-green-400 to-sky-500">
      {/* <div className="mx-auto grid md:grid-cols-1 lg:grid-cols-2 max-w-7xl px-4 sm:px-6 lg:px-8 sm:flex-row"> */}
      <div className="mx-auto flex flex-col-reverse sm:flex-col lg:flex-row gap-5 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className='w-full md:max-w-md flex items-center justify-center rounded-lg' data-aos="fade-up">
          <CarouselLeft />
        </div>

        <div className="mx-auto w-full text-center md:max-w-2xl backdrop-blur-sm bg-white/30 py-5 rounded-lg" data-aos="fade-up">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Asset Management
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-justify leading-relaxed text-gray-600 px-4">
            Asset management is a systematic approach to the governance and realization of values. It requires establishment, implementation, operation, maintenance and improvement of management. This need has been identified and Standards have been issued by ISO. The latest version has been issued as ISO 55000-2024.
            To maximize Asset Sweating a structured approach right from Cradle ( Project conceptualization) to Grave ( Asset Disposal)  is required as it involves various stakeholders from Engineering to Operations Finance and many more.
            Each organization has some uniqueness due to its Values, Mission, Approach  Size, and Operation. So, the same methodology can’t be implemented for all and needs to be tweaked to suit your organization.

          </p>
          <p className="mx-auto max-w-xl text-justify leading-relaxed text-gray-600 px-4">
            We can help you identify suitable <b> compatible Asset Management methodology </b> in conjunction with available Tools for your Business ERP.


          </p>
        </div>

      </div>
    </section>
  )
}
