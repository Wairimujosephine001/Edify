import React from 'react';
import Button from "./Button";
import { FiSend } from "react-icons/fi";


const Contact = () => {
  return (
    <div name="contact" className="bg-white w-full h-full justify-center text-black flex item-center p-4 ">
        <form method='POST' action='https://getform.io/f/202f0d80-16e2-45ab-adff-1ea596ab44ce' className=" flex flex-col mx-auto p-4 justify-center w-[600px] ">
          <div className=''>
            <p className="text-3xl font-bold  border-b-4 "> CONTACT ME</p>
          </div>
          <input className=' my-4 p-2 bg-[#ccd6f6]' type='text' placeholder='Name' name='name' />
         <input className=' my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email'/>
         <textarea className='bg-[#ccd6f6] p-2' name='message' rows='10' placeholder='Message'></textarea>
         <Button buttonstyle={"ml-[500px] mt-[20px]"} name={"SEND"} iconStyle={"ml-4 "} icon={<FiSend size={18} />}/>
         </form>
         </div>
  )
}

export default Contact;