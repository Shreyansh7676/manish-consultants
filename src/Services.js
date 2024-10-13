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
                    Terms of Service
                    </h2>
                    <h2 className="text-md mt-3 font-normal leading-tight text-gray-700 sm:text-sm lg:text-sm">
                        Effective Date: 1Aug 2024
                    </h2>
                    <ol className="mt-4">
                        <li className="mx-auto mt-4 max-w-3xl text-justify leading-relaxed text-gray-600 px-4"><b>1. Acceptance of Terms</b>
                            <br />
                            By accessing and using the services of Shiva Consulting Engineers thru this website you agree to comply with and be bound by these Terms of Service. If you do not agree to these Terms, please do not use our services.
                        </li>
                        <li className="mx-auto mt-4 max-w-3xl text-justify leading-relaxed text-gray-600 px-4"><b>2. Services</b>
                            <br />
                            We provide  services as mentioned in the Portfolio tab and it’s sub heading. The scope of our services will be defined in the specific  service agreement or proposal provided to you.

                        </li>
                        <li className="mx-auto mt-4 max-w-3xl text-justify leading-relaxed text-gray-600 px-4"><b>3. Fees and Payment</b>
                            <br />
                            a. Fees

                            <br />

                            Our fees for consulting services will be against the Scope of Services described in the service agreement or proposal provided to you. All fees are exclusive of any applicable taxes, which you agree to pay in addition to the fees.


                        </li>
                        <li className="mx-auto mt-2 max-w-3xl text-justify leading-relaxed text-gray-600 px-4">b. Payment Terms

                            <br />
                            Payments are due  as per the Proposal  and subsequent Agreement If payments are not made by the due date, we reserve the right to suspend or terminate our services until payment is received.


                        </li>
                        <li className="mx-auto mt-4 max-w-3xl text-justify leading-relaxed text-gray-600 px-4"><b>4. Confidentiality</b>
                            <br />
                            a. Client Information
                            <br />
                            We acknowledge that we may receive confidential and proprietary information from you during the course of our engagement. We agree to keep such information confidential and use it only for the purpose of providing our services. If required suitable NDA may be discussed and agreed. 
                        </li>
                        <li className="mx-auto mt-2 max-w-3xl text-justify leading-relaxed text-gray-600 px-4">b. Company Information

                            <br />
                            You agree to keep confidential any proprietary information about our business, methodologies, and any other confidential information we provide to you.
                        </li>
                        <li className="mx-auto mt-4 max-w-3xl text-justify leading-relaxed text-gray-600 px-4"><b>5. Intellectual Property
                        </b>


                            <br />
                            All materials, methodologies, tools, and deliverables developed or provided by us in connection with our services are and remain our intellectual property. You are granted a non-exclusive, non-transferable license to use the deliverables for your internal business purposes only.



                        </li>
                        <li className="mx-auto mt-4 max-w-3xl text-justify leading-relaxed text-gray-600 px-4"><b>6. Limitation of Liability
                        </b>

                            <br />
                            To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from 
                            <ol type="lower-roman" style={{ listStyleType: 'lower-roman' }}>
                                <li>your use of our services;
                                </li>
                                <li>any unauthorized access to or use of our servers and/or any personal information stored therein;

                                </li>
                                <li>any interruption or cessation of transmission to or from our services;
                                </li>
                                <li>any bugs, viruses, trojan horses, or the like that may be transmitted to or through our services by any third party;
                                </li>
                                <li>any errors or omissions in any content or for any loss or damage incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available through our services.


                                </li>
                            </ol>



                        </li>
                        <li className="mx-auto mt-4 max-w-3xl text-justify leading-relaxed text-gray-600 px-4"><b>7. Indemnification
                        </b>

                            <br />
                            You agree to indemnify, defend, and hold harmless Shiva Consulting Engineers  its officers, directors,its affiliates, employees, agents, and subcontractors from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys’ fees) that they may incur as a result of or arising from your
                            <ol type="lower-roman" style={{ listStyleType: 'lower-roman' }}>
                                <li>use of the Services,
                                </li>
                                <li> violation of these Terms,

                                </li>
                                <li>violation of any rights of a third party, or
                                </li>
                                <li>violation of any applicable law.
                                </li>
                            </ol>
                        </li>
                        <li className="mx-auto mt-4 max-w-3xl text-justify leading-relaxed text-gray-600 px-4"><b>8. Dispute Resolution</b>


                            <br />
                            Any disputes arising out of or relating to these Terms or the Services will be resolved through binding arbitration in accordance with the rules, except that either party may seek injunctive or other equitable relief in any court of competent jurisdiction.


                        </li>
                        

                    </ol>
                </div>

            </div>
        </section>
    )
}
