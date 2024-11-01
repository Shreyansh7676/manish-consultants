import React from 'react'
import CarouselLeft from '../../CarouselValuation/carousel'
import { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

export default function CtaOne() {
    useEffect(() => {
        AOS.init({ duration: 1200 })
    })
    return (
        <section className="bg-gradient-to-t from-green-400 to-sky-500 py-20">
            <div className="mx-auto flex flex-col-reverse sm:flex-col gap-5 lg:flex-row max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className='w-full md:max-w-md flex items-center justify-center rounded-lg' data-aos="fade-up">
                    <CarouselLeft />
                </div>
                <div className="mx-auto w-full text-center md:max-w-2xl backdrop-blur-sm bg-white/30 py-5 rounded-lg" data-aos="fade-up">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        Valuation
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-justify leading-relaxed text-gray-600 px-4">
                        Valuation is a part of compliance as well as the assessment of the financial health of an organization. The manufacturing units have various plants and machinery for production activity. These need to be assessed for productivity,  financial health, and obviously legal reporting. We conduct the Valuation of Plants and Machinery by Approved Valuers to help you leverage your financial planning.
                    </p>
                </div>

            </div>
        </section>
    )
}
