import React from "react";
import image from "./img/calc.png";
import Akhan from "./img/akhan.png";
import Shoes from "./img/shoes.png";
import AppTodo from "./img/todo.png";
import { TbUnlink } from "react-icons/tb";


const Project = () => {
    return (
      <div name="project" className="bg-white text-black">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-3xl font-bold  border-b-4 "> PROJECTS</p>
            <p className="py-4"> My Projects</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
          <div className=" relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-ro-r from-[#565ie5] to-black">
          <img className="  rounded-xl group-hover:opacity-40" src={ image} alt='/'/>
          <div className=" hidden group-hover:block absolute top-[50%] translate-x-[-50%] translate-y-[-50%] ">
          <h3 className="text-3xl font-bold trackng-wider text-center"  >Calculator Project</h3>
          <p className="  pb-4 pt-2 text-center">HTML , JavaScript and Css</p>
          <a href='https://wairimujosephine001.github.io/calculator1/'>
          {<TbUnlink size={20} className='item-center'/>}
          </a>
          </div>
          </div>
          <div className=" relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-ro-r from-[#565ie5] to-black">
          <img className="  rounded-xl group-hover:opacity-40" src={ Shoes} alt='/'/>
          <div className=" hidden group-hover:block absolute top-[50%] translate-x-[-50%] translate-y-[-50%] ">
          <h3 className="text-3xl font-bold trackng-wider text-center" >Phine's Collection</h3>
          <p className=" pb-4 pt-2 text-center">Figma Design</p>
          <a href='https://www.figma.com/file/vajJ4DZVHkxxO7Ss4NOzl9/JOSIE-Figma-Tutorial?node-id=0%3A1'>
          {<TbUnlink size={20} className='item-center'/>}
          </a>
          </div>
          </div>
          <div className=" relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-ro-r from-[#565ie5] to-black">
          <img className="  rounded-xl group-hover:opacity-40" src={ Akhan} alt='/'/>
          <div className=" hidden group-hover:block absolute top-[50%] translate-x-[-50%] translate-y-[-50%] p-14">
          <h3 className="text-3xl font-bold trackng-wider text-center" >Akhan Project</h3>
          <p className=" pb-4 pt-2 text-center">HTML , JavaScript and Css</p>
          <a href='https://wairimujosephine001.github.io/Akan-Names/'>
          {<TbUnlink size={20} className='item-center'/>}
          </a>
          </div>
          </div>
          <div className=" relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-ro-r from-[#565ie5] to-black">
          <img className="  rounded-xl group-hover:opacity-40" src={ AppTodo} alt='/'/>
          <div className=" hidden group-hover:block absolute top-[50%] translate-x-[-50%] translate-y-[-50%] p-14 ">
          <h3 className="text-3xl font-bold trackng-wider text-center" >TODO Project</h3>
          <p className=" pb-4 pt-2 text-center">React and Tailwind Css</p>
          <a href='https://wairimujosephine001.github.io/AppTodo/'>
          {<TbUnlink size={20} className='item-center'/>}
          </a>
          </div>
          </div>
          </div>
          </div>
          </div>
          );
        };
        export default Project;