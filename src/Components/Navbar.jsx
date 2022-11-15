import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsToggleOn, BsToggle2Off } from "react-icons/bs";
import { Link } from "react-scroll";
import { FiSend } from "react-icons/fi";
import Button from "./Button";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleOnclick = () => setNav(!nav);
 
  return (
    <div className=" theme-toggle text-black  fixed md:flex card-container z-20 bg-gray-300 drop-shadow-md hover:drop-shadow-sm justify-between justify-center gap-24 h-auto w-full mx-auto px-10">
      <div className="flex ">
        <h1 className="text-black m-7 text-4xl from-stone-500 font-mono font-bold">
          JOSEPHINE
        </h1>
        <BsToggleOn className=" mt-5 cursor-pointer m-auto  " size={22} />{" "}
        <BsToggle2Off className=" mt-5 cursor-pointer m-auto " size={22} />
        <div
          onClick = {()=> setNav(!nav) } 
          className="block md:hidden md:float-none float-right"
        >
          {!nav ? <BiX size={20} /> : <BiMenu size={20} />}
        </div>
        <div className=" hover-text-white cursor-pointer  focus:outline-none hover-underline ">
          <ul className={`block md:flex pl-[300px]  md:static absolute w-[90%] duration-200 transition-all  ${ nav ? "right-12 opacity-100" : "right-[100px md:opacity-100 opacity-0 "}`}>
         <li onClick={handleOnclick} className="p-10 text-sm justify-between hover:text-blue-800 text-left font-bold float-left">
         <Link  to="home" smooth={true}  duration={500} >
         HOME
        </Link>
         </li> 
        <li onClick={handleOnclick} className="p-10 hover:text-blue-800 text-sm justify-between text-left font-bold float-left">
        <Link to="about" smooth={true}  duration={500} >
        ABOUT 
       </Link>
        </li>
        <li onClick={handleOnclick} className="p-10 hover:text-blue-800 text-sm justify-between text-left font-bold float-left">
        <Link  to="experience" smooth={true}  duration={500} >
         EXPERIENCE
        </Link>
        </li>
       <li onClick={handleOnclick} className="p-10 hover:text-blue-800 text-sm justify-between text-left font-bold float-left">
        <Link  to="project" smooth={true}  duration={500} >
        PROJECT
        </Link>
        </li>
        <li onClick={handleOnclick} className="p-10 hover:text-blue-800 text-sm justify-between text-left font-bold float-left">
        <Link  to="contact" smooth={true}  duration={500} >
        CONTACT
        </Link>
        </li>
          </ul>
        </div>
        <Button buttonstyle={" mt-4 ml-28"} name={"HIRE ME"} iconStyle={"ml-4 "} icon={<FiSend size={18} />}/>
      </div>
    </div>
  );
};

export default Navbar;

