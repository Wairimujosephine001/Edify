import React from 'react';
import { BsWhatsapp,BsGithub, BsLinkedin } from "react-icons/bs";
import {GiCrown } from "react-icons/gi";


const footer = () => {
  return (
    <div>
    <footer className='px-5 py-[20px] pl-[50px] w-auto '>
    <div className='mb-10 md:flex md:items-center md:justify-between'>
    <h2 className='text-4xl mb-2 flex'> My Portfolio <GiCrown className=' ' size={18}/></h2>    
    <p >my social media accounts for more;</p>
    </div>
    <div className='flex flex-col-reverse md:flex-row md:justify-between'>
    <p>&copy; copyright MyPortfolio, 2022 All  Rights Reserved</p>
    <ul className=' flex mb-2'>
    <a href='https://github.com/Wairimujosephine001'>
    <li className='mx-2 text-2xl'>
    <BsGithub/>
    </li></a>
   <a href='https://www.linkedin.com/in/josephinewairimu/'>
   <li className='mx-2 text-2xl'>
   <BsLinkedin/>
   </li>
   </a>
   <a href=''>
   <li className='mx-2 text-2xl'>
    <BsWhatsapp/>
    </li>
   </a>
    </ul>
    </div>
    </footer>
    </div>
  )
}

export default footer;