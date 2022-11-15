import React from "react";
import image from "./img/html.png";
import bootsrap from "./img/bootstrap.png";
import css from "./img/css.png";
import dsa from "./img/dsa.png";
import javascript from "./img/javascript.png";
import node from "./img/node.png";
import react from "./img/react.png";
import tailwind from "./img/tailwind.png";

const Skill = () => {
  return (
    <div id="experience" name="skills" className="bg-white text-black">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-3xl font-bold  border-b-4 "> Experience</p>
          <p className="py-4"> These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8">
          <div className=" shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={image} alt="Html icon" />
            <p className=" my-4">HTML</p>
          </div>
          <div className=" shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-28 mt-6 mx-auto" src={react} alt="react icon" />
            <p className=" my-4">REACT</p>
          </div>
          <div className=" shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mt-3 mx-auto" src={javascript} alt="javascript icon" />
            <p className=" my-4">JAVASCRIPT</p>
          </div>
          <div className=" shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-28 mt-4 mx-auto" src={dsa} alt="dsa icon" />
            <p className=" my-4">DSA</p>
          </div>
          <div className=" shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-28 mt-10 mx-auto" src={bootsrap} alt="bootsrap icon" />
            <p className=" my-4">BOOTSTAP</p>
          </div>
          <div className=" shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-20 mt-2 mx-auto" src={css} alt="css icon" />
            <p className=" my-4">CSS</p>
          </div>
          <div className=" shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-28 mt-10 mx-auto" src={node} alt="node icon" />
            <p className=" my-4">NODE</p>
          </div>
          <div className=" shadow-md shadow-black hover:scale-110 duration-500">
            <img className="w-36 mt-10 mx-auto" src={tailwind} alt="tailwind icon" />
            <p className=" my-4">TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skill;
