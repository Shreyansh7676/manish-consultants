import React from 'react'
import { useEffect } from 'react'
import AOS from "aos"
import CarouselLeft from '../CarouselEnergy/Carousel'
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
                        Energy Management
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-justify leading-relaxed text-gray-600 px-4">
                        Energy management is a process that involves optimization of energy use for the best possible outcomes and taking steps for its conservation. It also includes planning related to the production of energy and its storage for future usage.
                        Energy Saved is Energy Produced is an old saying and is always relevant. Demand of Energy is continuously pushing the cost northwards, hence any saving in energy is tangible. Energy Management also helps in achieving ESG/ SDG goals,
                        Energy  Management not only saves costs but also achieves complete environmental sustainability, and overall is loved by investors.
                    </p>
                    <p className="mx-auto max-w-xl text-justify leading-relaxed text-gray-600 px-4">
                        We are here to join you in the<b> Energy Management journey </b>and help you achieve your goals.
                    </p>
                </div>

            </div>
        </section>
    )
}
