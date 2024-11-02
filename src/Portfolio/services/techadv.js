import React from 'react'
import CarouselLeft from '../../CarouselAdv/carousel'
import { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

export default function CtaOne() {
    useEffect(() => {
        AOS.init({ duration: 1200 })
    })
    return (
        <section className="bg-gradient-to-t from-green-400 to-sky-500 py-10">
            <div className="mx-auto flex flex-col-reverse sm:flex-col gap-5 lg:flex-row max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className='w-full md:max-w-md flex items-center justify-center rounded-lg' data-aos="fade-up">
                    <CarouselLeft />
                </div>
                <div className="mx-auto w-full text-center md:max-w-3xl backdrop-blur-sm bg-white/30 py-5 rounded-lg" data-aos="fade-up">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        Technical Advisory
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-justify leading-relaxed text-gray-600 px-4">
                        <b>Well planned is half done</b> is a famous saying.  Planning plays an important role in any activity. To run a successful business as an entrepreneur you need to systematise the complete operation right from selecting to establishing and sustaining.  Due diligence Value Analysis and linking activities with productivity are the major steps in the Layout of the plant.
                    </p>
                    <p className="mx-auto max-w-3xl text-justify leading-relaxed text-gray-600 px-4">
                        Layout with suitable equipment helps in various management aspects namely
                        <ol type="lower-roman" style={{ listStyleType: 'decimal' }} className='mt-2 flex flex-col text-start justify-start'>
                            <li>Energy Management</li>
                            <li>Asset Management</li>
                            <li>Project Management</li>
                        </ol>
                    </p>
                    <p className="mx-auto max-w-3xl text-justify leading-relaxed text-gray-600 px-4">
                        The early planning of the systems will produce tangible as well as Intangible results. We are experienced in integrating Engineering with Finance and help you leverage and run your business more effectively, and, the same will be reflected in your most loved document the Balance Sheet.

                    </p>
                </div>

            </div>
        </section>
    )
}
