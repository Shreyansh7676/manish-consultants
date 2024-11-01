import React from 'react'
import { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

export default function FeatureThree() {
  useEffect(() => {
    AOS.init({ duration: 1200 })
  })
  return (
    <>
      <div className="relative h-4/5 w-full isolate z-0 bg-gradient-to-t from-green-400 to-sky-500 px-6 py-24 lg:px-8 duration-200 scroll-smooth">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div className="mx-auto max-w-5xl text-center backdrop-blur-sm bg-white/30 py-24 rounded-xl px-6" data-aos="fade-up">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Welcome to Shiva Engineering Consultants
            </h2>
            <p className="mt-8 text-base leading-relaxed text-justify text-gray-600">
              At Shiva Engineering Consultants, We are dedicated to providing consulting services in Asset Care, Energy Management, and Valuation Systems that drive growth, efficiency, and success for businesses of all sizes. Our Consultants have vast and in-depth experience of more than 30 years in assorted industries of repute. They have a rich history of delivering customized solutions in Project Management, Maintenance Management, and Energy Management along with Value Engineering and Value Analysis at the Corporate Level as well as Plant Level and obviously to align with our client's unique needs and objectives in tangible and intangible terms.


            </p>
          </div>

          <div className='grid gap-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 mt-16' data-aos="fade-up">
            <div className="mx-auto max-w-3xl text-center  backdrop-blur-sm bg-white/30 py-5 rounded-xl p-4 mt-16" >
              <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl">
                Our Mission
              </h2>
              <p className="mt-4 text-base leading-relaxed text-justify text-gray-600">
                Our mission is to build capacity and integrate systems at all levels in the field of Asset Care - From Conceptualisation to disposal of used assets, with optimum utilization during its life cycle, which empowers businesses with innovative strategies and actionable insights. We strive to be the trusted advisor for our clients for end-to-end solutions, achieve sustainable operations, and navigate complex challenges with ease.
              </p>
            </div>
            <div className="mx-auto max-w-3xl text-center  backdrop-blur-sm bg-white/30 py-5 rounded-xl p-4 mt-16" >
              <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl">
                Our Vision
              </h2>
              <p className="mt-4 text-base leading-relaxed text-justify text-gray-600">
                We envision a world where businesses can unlock their full potential through expert guidance and transformative strategies. Our goal is to be at the forefront of the consulting industry, known for our excellence, integrity, and impact.
              </p>
            </div>
            <div className="mx-auto max-w-3xl text-center  backdrop-blur-sm bg-white/30 py-5 rounded-xl p-4 mt-16" >
              <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl">
                Our Approach
              </h2>
              <p className="mt-4 text-base leading-relaxed text-justify text-gray-600">
                At Shiva Engineering Consultants, we believe in a client-centric approach. Our methodology is based on understanding our client’s unique needs and delivering tailored solutions that drive measurable results. We combine deep industry knowledge with innovative thinking to provide practical, sustainable solutions.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl text-center  backdrop-blur-sm bg-white/30 py-5 rounded-xl p-4 mt-36" data-aos="fade-up">
            <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Why Choose Us

            </h2>
            <p className="mt-4 text-base leading-relaxed text-justify text-gray-600">
              <ul style={{ listStyleType: 'disc' }}>
                <li className='mt-2'><b>Expertise</b>: Our consultant applies a 360 approach to obtain both Tangible and Intangible benefits including  Safety & Ergonomics through working experience in assorted Industries from Engineering, Chemical, FMCG & Battery.

                </li>
                <li className='mt-2'><b>Customization</b>: We tailor our services to meet the specific needs of each client.

                </li>
                <li className='mt-2'><b>Integrity</b>: We uphold the highest standards of professionalism and ethics in all our engagements.

                </li>
                <li className='mt-2'><b>Results-Driven</b>: Our focus is on delivering tangible, positive outcomes for our clients.

                </li>
                <li className='mt-2'><b>Partnership</b>: We view our clients as partners and are committed to their long-term success.
                </li>
              </ul>

            </p>
          </div>
          {/* <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <DollarSign className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">Secured Payments</h3>
          <p className="mt-4 text-sm text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <Zap className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">Fast & Easy to Load</h3>
          <p className="mt-4 text-sm text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <Moon className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">Light & Dark Version</h3>
          <p className="mt-4 text-sm text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit.
          </p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <Filter className="h-9 w-9 text-gray-700" />
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">Filter Blocks</h3>
          <p className="mt-4 text-sm text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit.
          </p>
        </div>
      </div> */}
        </div>
      </div>
    </>
  )
}
