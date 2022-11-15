import React, { useState } from "react";
import Typed from "react-typed";
import Button from "./Button";
import { FiSend } from "react-icons/fi";
import { GoCloudDownload } from "react-icons/go";
import image from "./img/face.png";
import { BsWhatsapp,BsGithub, BsLinkedin } from "react-icons/bs";
import Resume from "./cv.pdf";
import { Link } from "react-scroll";


function Home() {
  const [nav, setOnclick] = useState(false);

  const handleOnclick = () => {
    setOnclick(!onclick);
  };

  return (
    <div id="home">
      <div className="flex">
        <div className="p-[40px] max-w-[600px] place-item-start grid  h-[85opx] text-center flex-col justify-center">
          <h1 className="text-black mt-60 mb-8  text-4xl font-bold">
            Hi? I'm a FULLSTACK SOFTWARE DEVELOPER and UI/UX DESIGNER
          </h1>
          <div>
            <Typed
              className=" sm:text-3xl text-2xl font-serif pl-2 md:pl-4 "
              strings={[
                "Fullstack Software developer who writes clean , elegant and efficient code.",
                "product designer Specialising in UI design systems",
              ]}
              typeSpeed={120}
              backspeed={140}
              loop
            />
          </div>
          <div className="flex gap-[50px] p-[10px]">
          <li className="-mt-6" onClick={handleOnclick}>
        <Link  to="contact" smooth={true}  duration={500} >
            <Button
              name={"GET IN TOUCH"}
              onClick={handleOnclick}
              iconStyle={"ml-4 "}
              icon={<FiSend size={18} />}
            />
            </Link>
        </li>
            <a href={Resume} download>
              <Button
                name={"DOWNLOAD CV"}
                onClick={handleOnclick}
                iconStyle={"ml-4"}
                icon={<GoCloudDownload size={18} />}
              />{" "}
            </a>
          </div>
        </div>
        <img src={image} className=" mt-16 ml-48 "size={30} />
      </div>
      <div className=" flex ml-[1200px] fixed bg-gray flex-col  t0p-[35%] mt-[-300px] left-1 ">
        <ul>
          <li className="w-[80px] h-[30px] flex   justify-between hover:-[10px] duration-300 bg-[#66696C] items-center shadow-lg shadow-gray-400  cursor-pointer">
            {" "}
            <a target="_blank" className="flex justify-between items-center w-full text-black" href="https://github.com/Wairimujosephine001">
              {" "}
            <BsGithub size={20}/>Github 
              </a>
          </li>
          <li className="w-[80px] h-[30px] flex justify-between hover:-[10px] duration-300 bg-[#204970] items-center    shadow-lg shadow-gray-400  cursor-pointer">
            {" "}
            <a target="_blank"  className="flex justify-between items-center w-full text-black" href="https://www.linkedin.com/in/josephinewairimu/">
              {" "}
              <BsLinkedin size={20}/> Linkedin
            </a>
          </li>
          <li className="w-[80px] h-[30px] flex justify-between hover:-[10px] duration-300 bg-[#66F98F] items-center shadow-lg shadow-gray-400  cursor-pointer">
            {" "}
            <a target="_blank" className="flex justify-between items-center w-full text-black" href="">
              {" "}
           <BsWhatsapp size={20}/> Whatsapp
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
