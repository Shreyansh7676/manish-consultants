import React from 'react'
import CarouselLeft from './CarouselValue/Carousel'
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
                        Value Engineering
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-justify leading-relaxed text-gray-600 px-4">
                    Systematic analysis of the functions of various components and materials to lower the cost of goods, products and services with a tolerable loss of performance or functionality. Value, as defined, is the ratio of function to cost. Value can therefore be manipulated by either improving the function or reducing the cost. It is a primary tenet of value engineering that basic functions be preserved and not be reduced as a consequence of pursuing value improvements.The term "value management" is sometimes used as a synonym of "value engineering", and both promote the planning and delivery of projects with improved performance.


                    </p>
                </div>

            </div>
        </section>
    )
}
