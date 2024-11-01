import React from 'react'
import CarouselLeft from '../../CarouselAudit/carousel'
import { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

export default function CtaOne() {
    useEffect(() => {
        AOS.init({ duration: 1200 })
    })
    return (
        <section className="bg-gradient-to-t from-green-400 to-sky-500 py-14">
            <div className="mx-auto flex flex-col-reverse sm:flex-col gap-5 lg:flex-row max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className='w-full md:max-w-md flex items-center justify-center rounded-lg' data-aos="fade-up">
                    <CarouselLeft />
                </div>
                <div className="mx-auto w-full text-center md:max-w-2xl backdrop-blur-sm bg-white/30 py-5 rounded-lg" data-aos="fade-up">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        Energy Audit
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-justify leading-relaxed text-gray-600 px-4">
                        To start with energy management you need to have a complete picture of the existing Energy system. To get this we conduct field audits through <b>certified Energy Auditor</b> and collect facts or help in collecting workable data.  These workable data will be the foundation of your Energy Management journey.  The audit helps improve systems.
                        For larger industries it is mandatory, and, smaller industries also benefit as Energy contributes almost 1/8 of total manufacturing cost. Forehand knowledge builds a better understanding in planning and control.

                    </p>
                </div>

            </div>
        </section>
    )
}
