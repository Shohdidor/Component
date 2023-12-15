import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/component/Card'
import { Card2 } from './assets/component/Card'
import { Card3 } from './assets/component/Card'

import Laptop from "/img/Laptop.png"
import Baby from "/img/col-md-6.png"

import Photo1 from "/img/circle sec-.png"
import Photo2 from "/img/circle sec- (1).png"
import Photo3 from "/img/circle sec- (2).png"


import Image1 from "/img/fixed-height.png"
import Image2 from "/img/fixed-height2.png"
import Image3 from "/img/fixed-height3.png"

import Adres from "/img/social media sec-.png"
import Col4 from '/img/col-md-4.png';

import Bad from "/img/breaking bad 1_2.jpg"
import Bad2 from "/img/Без названия (4).jpg"
import Bad3 from "/img/Без названия (5).jpg"
import Bad4 from "/img/Без названия (6).jpg"



function App({img}) {

  return (
    <>
    <div className='overflow-hidden'>

    <div className='flex justify-around mt-[10px]'>
      <h1 className='text-[25px] font-bold'>
      Your School
      </h1>
      <ul className='hidden w-[350px] ml-[-250px] font-bold text-gray-500 items-center sm:block sm:flex sm:justify-between'>
        <li>Home</li>
        <li>Product</li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>
      <div className='w-[150px] ml-[50px] flex justify-between sm:w-[200px]'>
        <button className='font-bold text-[#96BB7C]'>Login</button>
        <button className='bg-[#96BB7C] rounded-[5px] p-[10px] font-medium text-white'>JOIN US →</button>
      </div>
    </div>

    <div className='sm:flex sm:justify-evenly sm:mt-[110px]'>
      <div className='text-center mt-[50px]'>

        <h3 className='font-medium text-[#96BB7C] text-left ml-[17px] sm:font-bold sm:ml-[5px]'>
        Join Us
        </h3>
        
        <h1 className='text-[#252B42] text-[50px] font-bold mb-[20px] sm:text-[60px] sm:w-[550px] sm:text-left'>
        25K+ STUDENTS TRUST US
        </h1>

        <p className='text-gray-500 font-bold text-[14px] mb-[50px] sm:text-[20px] sm:w-[420px] sm:text-left'>Every day brings with it a fresh set of learning possibilities.</p>

        <div className='w-[350px] flex justify-evenly m-auto sm:ml-[-37px]'>
          <button className='border-[#96BB7C] border-[1px] rounded-[5px] p-[10px] font-medium text-[#96BB7C]'>Get Quote Now</button>
          <button className='bg-[#96BB7C] rounded-[5px] p-[10px] font-medium text-white'>Learn More</button>
        </div>

      </div>
      <div>
        <img src={Laptop} alt="error" />
      </div>
    </div>


    <div className='block gap-5 p-[3%] sm:flex  sm:justify-evenly'>
    <Card img={Photo1} h1={"Expert instruction"} p={"The gradual accumulation of information about atomic and small-scale behaviour..."} />
    <Card img={Photo2} h1={"Training Courses"}  p={"The gradual accumulation of information about atomic and small-scale behaviour..."} />
    <Card img={Photo3} h1={"Expert instruction"}  p={"The gradual accumulation of information about atomic and small-scale behaviour..."} />
    </div>

    <div className='text-center sm:flex sm:justify-around sm:mt-[35px]'>

      <div className='mb-[25px] mt-[35px] sm:mt-[0]'>
      <Card2 h1={"15K"}/>
      <Card2 p={"Happy Customers"}/>
      </div>

      <div  className='mb-[25px]'>
      <Card2 h1={"150K"}/>
      <Card2 p={"Monthly Visitors"}/>
      </div>

      <div  className='mb-[25px]'>
      <Card2 h1={"15"}/>
      <Card2 p={"Countries  Worldwide"}/>
      </div>


      <div  className='mb-[25px]'>
      <Card2 h1={"100+"}/>
      <Card2 p={"Top Partners"}/>
      </div>

    </div>


    
    <div className='sm:flex sm:justify-evenly sm:mt-[110px]'>
      <div className='text-center mt-[50px]'>
        <hr className='border-[orangered] border-[3px] w-[50px] m-auto sm:m-[0] sm:w-[70px]' />
        <h1 className='text-[#252B42] text-[50px] font-bold mb-[20px] sm:text-[60px] sm:w-[550px] sm:text-left'>
        Every Client Matters        
        </h1>

        <p className='text-gray-500 font-bold text-[14px] mb-[50px] sm:text-[20px] sm:w-[420px] sm:text-left'>Problems trying to resolve the conflict between 
the two major realms of Classical physics: 
Newtonian mechanics </p>

        <div className='w-[350px] flex justify-evenly m-auto sm:ml-[-37px]'>
          <button className='rounded-[5px] p-[10px] font-medium text-[#96BB7C]'>Learn More →</button>
        </div>

      </div>
      <div>
        <img src={Baby} alt="error" />
      </div>
    </div>

    <div>
    <div className='text-center mt-[50px] sm:mt-[150px] sm:ml-[520px]'>
      <h3 className='font-medium text-[#96BB7C] text-left ml-[67px] sm:font-bold sm:ml-[5px] sm:w-[550px]'>
      Practice Advice
        </h3>
        <h1 className='text-[#252B42] text-[50px] font-bold mb-[20px] sm:text-[60px] sm:w-[750px] sm:text-left'>
        Our Experts Teacher
          </h1>
          <p className='text-gray-500 font-bold text-[14px] mb-[50px] sm:text-[20px] sm:w-[500px] sm:text-left'>Every day brings with it a fresh set of learning possibilities.</p>
    </div>
    
    <div className='block gap-5 p-[3%] sm:flex  sm:justify-evenly'>
    <Card3 img={Image1} span={"Training Courses"} h1={"Expert instruction"} p={"The gradual accumulation of information about atomic and small-scale behaviour..."} button={"Learn More >"} />
    <Card3 img={Image2} span={"2,769 online courses	"} h1={"Training Courses"}  p={"The gradual accumulation of information about atomic and small-scale behaviour..."} button={"Learn More >"} />
    <Card3 img={Image3} span={"Expert instruction"} h1={"Expert instruction"}  p={"The gradual accumulation of information about atomic and small-scale behaviour..."} button={"Learn More >"} />
    </div>

    </div>

    <div>
    <div className='text-center mt-[50px] sm:mt-[150px] sm:ml-[520px]'>
      <h3 className='font-medium text-[#96BB7C] text-left ml-[67px] sm:font-bold sm:ml-[5px] sm:w-[550px]'>
      Practice Advice
        </h3>
        <h1 className='text-[#252B42] text-[50px] font-bold mb-[20px] sm:text-[60px] sm:w-[750px] sm:text-left'>
        Every Client Matters
          </h1>
          <p className='text-gray-500 font-bold text-[14px] mb-[50px] sm:text-[20px] sm:w-[500px] sm:text-left'>Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics </p>
    </div>
    
    <div className='block gap-5 p-[3%] sm:flex  sm:justify-evenly'>
    <Card3 img={Col4} /><hr className='border-[orangered] mt-[50px] border-[2px]'/>
    <Card3 img={Col4} /><hr className='border-[orangered] mt-[50px] border-[2px]'/>
    <Card3 img={Col4} /><hr className='border-[orangered] mt-[50px] border-[2px]'/>
    </div>
    </div>

    <div>
    <div className='text-center mt-[50px] sm:mt-[150px] sm:ml-[520px]'>
      <h3 className='font-medium text-[#96BB7C] text-left ml-[67px] sm:font-bold sm:ml-[5px] sm:w-[550px]'>
      Practice Advice
        </h3>
        <h1 className='text-[#252B42] text-[50px] font-bold mb-[20px] sm:text-[60px] sm:w-[750px] sm:text-left'>
        Every Client Matters
          </h1>
          <p className='text-gray-500 font-bold text-[14px] mb-[50px] sm:text-[20px] sm:w-[500px] sm:text-left'>Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics </p>
    </div>
    
    <div className='block p-[2%] sm:flex  sm:justify-evenly'>
    <Card3 img={Bad2} h1={"Jessy Pickman"} p={"Profession"}/>
    <Card3 img={Bad3}  h1={"Wallter White"} p={"Profession"}/>
    <Card3 img={Bad}  h1={"Jessy Pickman"} p={"Profession"}/>
    <Card3 img={Bad4}  h1={"Wallter White"} p={"Profession"}/>
    </div>
    </div>

    </div>

    </>
  )
}

export default App
