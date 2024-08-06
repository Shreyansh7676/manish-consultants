import React from 'react'
import { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

export default function CtaOne() {
    useEffect(()=>{
        AOS.init({duration:1200})
      })
    return (
        <section className="bg-gradient-to-t from-green-300 to-blue-400 py-7">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto w-full text-center md:max-w-4xl backdrop-blur-sm bg-white/30 py-5 rounded-lg" data-aos="fade-up">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl w-full">
                        Energy Management
                    </h2>
                    <p className="mx-auto mt-4 max-w-4xl text-justify leading-relaxed text-gray-600 px-4">
                        Energy management is a process that involves optimization of energy use for the best possible outcomes and taking steps for its conservation. It also includes planning related to the production of energy and its storage for future usage.
                        Energy Saved is Energy Produced is an old saying and is always relevant. Demand of Energy is continuously pushing the cost northwards, hence any saving in energy is tangible. Energy Management also helps in achieving ESG/ SDG goals,
                        Energy  Management not only saves the cost but also achieve complete environmental sustainability, overall is loved by the investors. We are there to join you in this journey and help you achieve you goals.
                        Value Engineering
                        Systematic analysis of the functions of various components and materials to lower the cost of goods, products and services with a tolerable loss of performance or functionality. Value, as defined, is the ratio of function to cost. Value can therefore be manipulated by either improving the function or reducing the cost. It is a primary tenet of value engineering that basic functions be preserved and not be reduced as a consequence of pursuing value improvements.[3] The term "value management" is sometimes used as a synonym of "value engineering", and both promote the planning and delivery of projects with improved performance.[4]
                    </p>
                </div>

            </div>
        </section>
    )
}
