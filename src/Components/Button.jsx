import React from 'react'
import { icons } from 'react-icons';

const Button = ({ name, icon, onClick, iconStyle, buttonstyle }) => {

    return (
        <button onClick={onClick} className={`px-4 py-2 w-fit h-[40px] space-x-4 flex items-center text-sm text-blue-800 font-semibold rounded-md border border-gray-900 hover:text-black hover:bg-blue-800 mt-60 ${buttonstyle ? buttonstyle : ""}`}>
        { name }
        <span className={`${ iconStyle ? iconStyle : "" }`}>{icon}</span>
        </button>             
    )
}

export default Button;
