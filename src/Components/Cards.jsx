import React from 'react'
import { ImQuotesLeft } from "react-icons/im";


const Cards = ({name, style}) => {
  
    return (
        <div style={style}  className=' z-10 grid p-36 gap-6 lg:grid-cols-2 xl:grid-cols-3'>
            <div className='card-container bg-gray-300 drop-shadow-md hover:drop-shadow-xl w-[200px] p-9 mt-8  '>
            <ImQuotesLeft className=" mt-1 opacity-50 " size={22}/>
                    {name}
            </div>
        </div>
    )
}

export default Cards;
