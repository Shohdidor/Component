import React from 'react'

function Card({img, h1,p}) {
  return (
    <div className='text-center mt-[50px] sm:w-[30%] sm:text-left border-black border-[1px] sm:p-[35px]'>
        <img src={img} alt="error"  className='m-auto p-[10px] sm:m-0'/>
        <h1 className='mt-[15px] font-bold sm:text-[20px] sm:mt-[25px] sm:mb-[25px]'>{h1}</h1>
        <hr className='mt-[15px] border-[orangered] border-[1px] sm:w-[50px] sm:mt-[-10px] sm:mb-[20px]' />
        <p className='mt-[15px] pb-[15px] text-gray-500 font-bold sm:w-[300px]'>{p}</p>
    </div>
  )
}

export default Card


function Card2 ( { h1 , p }){
  return (
    <div>
      <h1 className='text-[#96BB7C] font-bold text-[45px] sm:text-[70px]'>
        {h1}
      </h1>
      <p className='font-medium text-[20px]'>
        {p}
      </p>
    </div>
  )
}

export { Card2 }

function Card3({img, h1,p,span ,button}) {
  return (
    <div className='text-center mt-[50px] sm:w-[30%] sm:text-left sm:p-[35px] '>
        <img src={img} alt="error"  className='m-auto p-[10px] sm:m-0'/>
        <span className='text-[#96BB7C] font-bold sm:ml-3'>{span}</span>
        <h1 className='mt-[15px] font-bold sm:text-[20px] sm:mt-[25px] sm:mb-[25px] sm:ml-3'>{h1}</h1>
        <p className='mt-[15px] pb-[15px] text-gray-500 font-bold sm:w-[300px] sm:ml-3'>{p}</p>
        <button className='sm:ml-3 text-[#96BB7C] font-bold border-[2px] border-[#96BB7C] p-[10px] rounded-[50px]'> {button} </button>
    </div>
  )
}

export {Card3}