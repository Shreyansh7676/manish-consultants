import React from 'react'
import CarouselLeft from './CarouselProject/CarouselLeft'
import { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

export default function CtaOne() {
    useEffect(() => {
        AOS.init({ duration: 1200 })
    })
    return (
        <section className="bg-gradient-to-t from-green-400 to-sky-500 py-16">
            <div className="mx-auto flex flex-col-reverse sm:flex-col gap-5 lg:flex-row max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className='w-full md:max-w-md flex items-center justify-center rounded-lg' data-aos="fade-up">
                    <CarouselLeft />
                </div>
                <div className="mx-auto w-full text-center md:max-w-2xl backdrop-blur-sm bg-white/30 py-5 rounded-lg" data-aos="fade-up">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        Project Management
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-justify leading-relaxed text-gray-600 px-4">
                        Thinking of achieving a goal other than regular work. Unable to get the way forward. Bitter past experience of Cost Overrun, Time Overrun, not achieving the expected result. All is due to unorganised approach. The process needs a systematic approach because every time new problems with assorted set of solutions, risk, and obviously approach. Here comes in Project Management System. Some basic processes to be adopted time and again to establish what suits your organisation better and improve upon those processes to excel in coming days.
                        We will help you establish the Project Management System to suit your organizational requirements.


                    </p>
                </div>

            </div>
        </section>
    )
}
