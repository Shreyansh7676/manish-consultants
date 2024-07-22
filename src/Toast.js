import * as React from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function SolidButtons() {
  const notify = () => toast("We have sent you a verification email. Check your Inbox!");
  return (
    <div className="space-y-2 items-center justify-center md:flex-row md:space-x-2 md:space-y-0  ">
      <button
        type="button"
        className="w-[120px] bg-black h-[40px] my-3 flex items-center justify-center  rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]"
        onClick={notify}
      >
        Send OTP
      </button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        style={{zIndex:20000, position:"fixed"}}
      />
    </div>
  )
}

export default SolidButtons;