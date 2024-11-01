import React from 'react'
import { useEffect } from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

export default function CtaOne() {
    useEffect(() => {
        AOS.init({ duration: 1200 })
    })
    return (
        <section className="bg-gradient-to-t from-green-400 to-sky-500 py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto w-full text-center md:max-w-4xl backdrop-blur-sm bg-white/30 py-5 rounded-lg" data-aos="fade-up">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        Privacy Policy
                    </h2>
                    <h2 className="text-md mt-3 font-normal leading-tight text-gray-700 sm:text-sm lg:text-sm">
                        Effective Date: Oct 1, 2024
                    </h2>
                    <ol className="mt-4">
                        <li className="mx-auto mt-4 max-w-3xl text-justify leading-relaxed text-gray-600 px-4"><b>1. Introduction</b>
                            <br />
                            Welcome to Shiva Engineering Consultants. We are committed to protecting your privacy and ensuring you have a positive experience on our website and in using our services. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website www.shivatechconsultant.in, use our Service, or interact with us.
                        </li>
                        <li className="mx-auto mt-4 max-w-3xl text-justify leading-relaxed text-gray-600 px-4"><b>2. Information We Collect</b>
                            <br />
                            a. Personal Information
                            <br />

                            We may collect personal information that can identify you directly or indirectly, such as your name, email address and  phone number.

                        </li>
                        <li className="mx-auto mt-2 max-w-3xl text-justify leading-relaxed text-gray-600 px-4">b. Non-Personal Information

                            <br />
                            We do not collect non-personal information about you whenever you interact with our website

                        </li>
                        <li className="mx-auto mt-2 max-w-3xl text-justify leading-relaxed text-gray-600 px-4">c. Cookies and Tracking Technologies

                            <br />
                            We are not using  cookies and similar tracking technologies to track the activity on our website and hold certain information. We do not use cookies and you may enjoy our complete site without any restrictions.

                        </li>
                        <li className="mx-auto mt-4 max-w-3xl text-justify leading-relaxed text-gray-600 px-4"><b>3. How We Use Your Information
                        </b>

                            <br />
                            We may use the information we collect from you in the following ways:
                            <ul style={{ listStyleType: 'disc' }}>
                                <li>To personalize your experience and to allow us to deliver the type of content and product offerings in which you are most interested.
                                </li>
                                <li>To improve our website in order to better serve you.

                                </li>
                                <li>To allow us to better service you in responding to your customer service requests.
                                </li>
                                <li>To process your transactions quickly.
                                </li>
                                <li>To send periodic emails regarding your order or other products and services.

                                </li>
                            </ul>



                        </li>
                        <li className="mx-auto mt-4 max-w-3xl text-justify leading-relaxed text-gray-600 px-4"><b>4. Sharing Your Information</b>


                            <br />
                            We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when it’s release is appropriate to comply with the law, enforce our site policies, or protect ours or others’ rights, property, or safety.


                        </li>
                        <li className="mx-auto mt-4 max-w-3xl text-justify leading-relaxed text-gray-600 px-4"><b>5. Security of Your Information
                        </b>


                            <br />
                            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.


                        </li>
                        <li className="mx-auto mt-4 max-w-3xl text-justify leading-relaxed text-gray-600 px-4"><b>6. Third-Party Services</b>
                            <br />
                            Our website may contain links to third-party websites and services that are not owned or controlled by us. We are not responsible for the privacy practices or the content of these third-party websites and services. We encourage you to read the privacy policies of each and every website and service with which you may interact.
                        </li>
                        <li className="mx-auto mt-4 max-w-3xl text-justify leading-relaxed text-gray-600 px-4"><b>7. Children’s Privacy</b>
                            <br />
                            Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us. If we become aware that we have collected personal information from children without verification of parental consent, please feel free to call for removal. 

                        </li>
                    </ol>
                </div>

            </div>
        </section>
    )
}
