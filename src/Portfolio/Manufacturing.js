import React from 'react'
import { useEffect } from 'react'
import AOS from "aos"
import Img1 from './Manufacturing/photo_2024-11-02_14-01-32.jpg'
import Img2 from './Manufacturing/apcd.png'
import Img3 from './Manufacturing/lol(1).png'
import Img4 from './Manufacturing/lol.png'
import "aos/dist/aos.css"

export default function CtaOne() {
    useEffect(() => {
        AOS.init({ duration: 1200 })
    })
    return (
        <section className="py-10 bg-gradient-to-t from-green-400 to-sky-500">
            <div className="mx-auto flex flex-col-reverse sm:flex-col lg:flex-row backdrop-blur-sm bg-white/30 gap-3 rounded-xl max-w-md md:max-w-5xl px-4 sm:px-6 lg:px-8" data-aos="fade-up">
                <div className='md:max-w-sm flex items-center justify-center rounded-lg py-4' >
                    <img src={Img1} className='rounded-lg h-64' />
                </div>

                <div className="mx-auto w-full text-center md:max-w-2xl py-5" >
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-2xl lg:text-4xl">
                        Special Purpose Machines
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-justify leading-relaxed text-gray-600 px-2">
                        Need customized machines to suit your process for increasing accuracy, and efficiency by reducing dependency on human errors.Low-cost automation of your existing machines in a particular process.
                    </p>
                    <p className="mx-auto max-w-xl text-justify leading-relaxed text-gray-600 px-2">
                        Identifying the problem is half job done, designing the machine for that specific solution is done by building Special Purpose Machines ( SPM)
                        We can help you identify the process and provide a solution by customizing and optimizing it to your needs.

                    </p>
                </div>

            </div>




            <div className="mx-auto mt-5 flex flex-col-reverse sm:flex-col lg:flex-row-reverse backdrop-blur-sm bg-white/30 gap-3 rounded-xl max-w-md md:max-w-5xl px-4 sm:px-6 lg:px-8"  data-aos="fade-up">
                <div className='md:max-w-sm flex items-center justify-center rounded-lg py-4'>
                    <img src={Img2} className='rounded-lg h-64' />
                </div>

                <div className="mx-auto w-full text-center md:max-w-2xl py-5" >
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-2xl lg:text-4xl">
                        Air Pollution Control Devices
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-justify leading-relaxed text-gray-600">
                        Industrialization has side effects, and, Air Pollution is one of them. To comply with legal requirements, and, keep the environment safe and healthy there is a need for Pollution Control Devices. Depending upon pollutant type and quantity the solution needs to be worked out. Air Handling is a costly affair, and optimization in operating is a major factor besides pollution control.
                    </p>
                </div>

            </div>



            <div className="mx-auto mt-5 flex flex-col-reverse sm:flex-col lg:flex-row backdrop-blur-sm bg-white/30 gap-3 rounded-xl max-w-md md:max-w-5xl px-4 sm:px-6 lg:px-8" data-aos="fade-up">
                <div className='md:max-w-sm flex items-center justify-center rounded-lg py-4' >
                    <img src={Img4} className='rounded-lg h-64' />
                </div>

                <div className="mx-auto w-full text-center md:max-w-2xl py-5" >
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-2xl lg:text-4xl">
                        Industrial Structure
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-justify leading-relaxed text-gray-600 px-2">
                        Industrial installations need tailor-made Structures to support them besides their accessories and utilities. Suitable designing and fabrication help in optimizing the space, besides, easy installation and ease of access for regular maintenance. These Industrial Structures are very important for ergonomic and aesthetic requirements, and help in increased productivity. We provide suitable matching solutions for your specific needs.
                    </p>
                </div>
            </div>

            <div className="mx-auto mt-5 flex flex-col-reverse sm:flex-col lg:flex-row-reverse backdrop-blur-sm bg-white/30 gap-3 rounded-xl max-w-md md:max-w-5xl px-4 sm:px-6 lg:px-8" data-aos="fade-up">
                <div className='md:max-w-sm flex items-center justify-center rounded-lg py-4' >
                    <img src={Img3} className='rounded-lg h-64' />
                </div>

                <div className="mx-auto w-full text-center md:max-w-2xl py-5" >
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-2xl lg:text-4xl">
                    General Fabrication
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-justify leading-relaxed text-gray-600">
                    Fabrication is a very general activity,  done by many, but of varying Quality, and, this makes the true difference. We specialize in High load Gratings, Storage Tanks, and Stairs. We provide fabrication with suitable accuracy and Quality to fulfill your needs for trouble-free operations.  
                    </p>
                </div>

            </div>

        </section>
    )
}
