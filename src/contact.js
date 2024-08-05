import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import Modal from './modal.js'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase.js';
import { useNavigate, useLocation } from 'react-router-dom';
import { isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink } from 'firebase/auth';
import { Alert } from 'bootstrap';
import AOS from "aos"
import LogIn from './Login.js'
import HomeLogin from './homelogin.js'
import "aos/dist/aos.css"

export function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1200 })
  })
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2m12hsp", "template_6zuwjnn", form.current, {
        publicKey: "UeDMpggyD803eLSSW",
      })
      .then(
        () => {
          alert('Your message has been sent! We would revert back to you soon.')

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  // const [email, setEmail] = useState("");
  // const [loginLoading, setLoginLoading] = useState(false);
  // const [loginError, setLoginError] = useState('');

  // const [infoMsg, setInfoMsg] = useState('');
  
  // const [user] = useAuthState(auth);
  // const navigate = useNavigate();
  // const { search } = useLocation();
  // const [userEmail, setUserEmail] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  // const [errorMessage, setErrorMessage] = useState('');
  // const [infoMessage, setInfoMessage] = useState('');
  // const [initialLoading, setInitialLoading] = useState(false);
  // const [initialError, setInitialError] = useState('');


  // useEffect(() => {
  //   const authenticateUser = async () => {
  //     if (user) {
  //       navigate('/emailauth');
  //       return;
  //     }
  //     if (isSignInWithEmailLink(auth, window.location.href)) {
  //       let emailFromStorage = localStorage.getItem('email');
  //       if (!emailFromStorage) {
  //         emailFromStorage = window.prompt('Please provide your email');
  //       }
  //       setIsLoading(true);
  //       try {
  //         await signInWithEmailLink(auth, emailFromStorage, window.location.href);
  //         localStorage.removeItem('email');
  //         navigate('/emailauth');
  //       } catch (error) {
  //         setErrorMessage(error.message);
  //         navigate('/contact');
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     }
  //   };
  //   authenticateUser();
  // }, [user, search, navigate]);


  // useEffect(() => {
  //   if (user) {
  //     // user is already signed in
  //     navigate('contact');
  //   }
  //   else {
  //     // user is not signed in but the link is valid
  //     if (isSignInWithEmailLink(auth, window.location.href)) {
  //       // now in case user clicks the email link on a different device, we will ask for email confirmation
  //       let email = localStorage.getItem('email');
  //       if (!email) {
  //         email = window.prompt('Please provide your email');
  //       }
  //       // after that we will complete the login process
  //       setInitialLoading(true);
  //       signInWithEmailLink(auth, localStorage.getItem('email'), window.location.href)
  //         .then((result) => {
  //           // we can get the user from result.user but no need in this case
  //           console.log(result.user);
  //           localStorage.removeItem('email');
  //           setInitialLoading(false);
  //           setInitialError('');
  //           navigate('contact');
  //         }).catch((err) => {
  //           setInitialLoading(false);
  //           setInitialError(err.message);
  //           navigate('contact');
  //         })
  //     }
  //     else {
  //       console.log('enter email and sign in');
  //     }
  //   }
  // }, [user, search, navigate]);


  // const handleLogin = async (event) => {
  //   event.preventDefault();
  //   setIsLoading(true);
  //   try {
  //     await sendSignInLinkToEmail(auth, userEmail, {
  //       url: 'http://localhost:3000/emailauth',
  //       handleCodeInApp: true,
  //     });
  //     localStorage.setItem('email', userEmail);
  //     alert('We have sent you an verification email!')
  //   } catch (error) {
  //     setErrorMessage(error.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   setLoginLoading(true);
  //   sendSignInLinkToEmail(auth, email, {
  //     // this is the URL that we will redirect back to after clicking on the link in mailbox
  //     url: 'http://localhost:3000/emailauth',
  //     handleCodeInApp: true,
  //   }).then(() => {
  //     localStorage.setItem('email', email);
  //     setLoginLoading(false);
  //     setLoginError('');
  //     alert('We have sent you an email with a link to sign in');
  //   }).catch(err => {
  //     setLoginLoading(false);
  //     setLoginError(err.message);
  //   })
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   try {
  //     <Modal />
  //   } catch (error) {
  //     setErrorMessage(error.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // const LoginForm = () => (
  //   <form className='form-group custom-form flex flex-col' onSubmit={handleLogin}>
  //     <label className="mb-1">Email</label>
  //     <div className="flex flex-col items-center">
  //       <input
  //         type='email'
  //         autoFocus="autofocus"
  //         placeholder='Enter your Email'
  //         className='form-control'
  //         value={userEmail}
  //         required
  //         onChange={(e) => setUserEmail(e.target.value)}
  //       />
  //       <button type='submit' className='btn btn-success btn-md mt-3 w-1/5'>
  //         {isLoading ? 'Logging you in' : 'Send Email'}
  //       </button>
  //     </div>
  //     {errorMessage && <div className='error-msg'>{errorMessage}</div>}
  //     {infoMessage && <div className='info-msg'>{infoMessage}</div>}
  //   </form>
  // );

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
    <LogIn />
      <div className="relative w-full h-4/5 scroll-smooth">
        <div className="relative isolate z-0 bg-gradient-to-t from-green-300 to-blue-400 px-6 py-6 lg:px-8">
          <div className="relative mx-auto max-w-2xl py-24">
            <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">

            </div>
            <div className="text-center" data-aos="fade-up">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Contact Us!
              </h1>
              <p className="mt-6 text-md leading-8 text-gray-600 text-justify">
                We'd love to hear from you! Whether you have questions, feedback, or need assistance, please reach out. You can type-in your email id and a verification link will be messaged to your email to know our email-id.
              </p>
              
              
              <div className="flex items-center justify-center gap-x-2">
                <div className="space-y-2 items-center justify-center md:flex-row md:space-x-2 md:space-y-0  ">
                  <p className="text-lg text-gray-600 mt-12">-------------------or-------------------</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/20 mx-auto max-w-7xl px-4 items-center rounded-3xl place-items-center justify-center scroll-smooth" data-aos="fade-up">

            <div className="mx-auto max-w-7xl py-8 md:py-24">
              <div className="grid items-center justify-items-center gap-x-4 gap-y-2  lg:grid-cols-2">
                {/* contact from */}
                <div className="flex items-center justify-center">
                  <div className="px-2 md:px-12">
                    <p className="text-2xl font-bold text-black md:text-4xl">Leave a Message</p>
                    <p className="text-sm leading-8 text-gray-600 text-justify"> You can simply fill out the details below in form and we will revert back to you soon.</p>
                    <form action="" className="mt-8 space-y-4" ref={form} onSubmit={sendEmail} >
                      <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                        <div className="grid w-full items-center gap-1.5">
                          <label
                            className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="first_name"
                          >
                            Your Name
                          </label>
                          <input
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-900 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                            type="text"
                            id="first_name"
                            placeholder="First Name"
                            name="user_name"
                            required
                          />
                        </div>

                      </div>
                      <div className="grid w-full  items-center gap-1.5">
                        <label
                          className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-900 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                          type="text"
                          id="email"
                          name="user_mail"
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className="grid w-full  items-center gap-1.5">
                        <label
                          className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          htmlFor="phone_number"
                        >
                          Phone number
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-900 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                          type="tel"
                          id="phone_number"
                          placeholder="Phone number"
                          name="user_phone"
                          required
                        />
                      </div>
                      <div className="grid w-full  items-center gap-1.5">
                        <label
                          className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          htmlFor="phone_number"
                        >
                          Select Query Type
                        </label>
                        <select name="user_query" className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-2 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-900 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900">
                          <option>Consultancy</option>
                          <option>Services</option>
                          <option>Manufacturing</option>
                          <option>Sales</option>
                          <option>Others</option>
                        </select>
                      </div>
                      <div className="grid w-full  items-center gap-1.5">
                        <label
                          className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          htmlFor="message"
                          required
                        >
                          Message
                        </label>
                        <textarea
                          className="flex h-20 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-900 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                          id="message"
                          placeholder="Leave us a message"
                          cols={3}
                          name="user_msg"
                        />
                        <input type="submit" value="Send" className="inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-green-500 w-1/4 mt-2" />
                      </div>
                      {/* <button
                        type="button"
                        className="inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80"
                      >
                        Button Text

                      </button> */}
                    </form>
                  </div>
                </div>
                <img
                  alt="Contact us"
                  className="hidden max-h-80 w-full rounded-lg object-cover lg:block"
                  src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=800&q=80"
                />
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Contact;