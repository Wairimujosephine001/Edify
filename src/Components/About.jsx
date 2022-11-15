import React from 'react'
import Cards from './Cards';
import image from './img/image.jpg';

function About() {
  return (
    <div id='about'>
    <div className=' w-full flex card-container bg-gray-200  h-[400px]'>
    <div className='  flex p-36 '>
    <div className='m-8 card-container bg-gray-300 drop-shadow-md hover:drop-shadow-lg w-[200px] p-5  '>
    <img src={image} className='m-auto '/>
    </div>
    <div className=' text text-black text-3xl content-evenly font-mono font-bold '>ABOUT ME
    <p className=' text-lg text-gray-900 mt-10'>Hi, my name is Josephine  Wairimu
    I am a Fullstack Web developer at Apprentice Cloud, and a Product Designer.
    Get my Services and book today!
    </p>
    </div>
    </div>
    </div>
    <div className=' flex -mt-60 ' >
    <Cards  name={"Lorem ipsum dolor sit amet consectetur adipisicing elit Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum"} />
    <Cards name={"Lorem ipsum dolor sit amet consectetur adipisicing elit Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum"} />
    <Cards name={"Lorem ipsum dolor sit amet consectetur adipisicing elit Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum"} />
    <div/>
    </div>
    </div>
  )
}

export default About;