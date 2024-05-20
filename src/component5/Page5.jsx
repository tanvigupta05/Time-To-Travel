import React from 'react'

function Page5() {
  return (
    <div className="flex h-[100vh] w-[100vw] justify-center space-evenly bg-gray-100" id="promotions">
        <div className='flex flex-col h-[60vh] w-[30vw] relative top-[120px] right-[150px] gap-[3rem]' id="img1">
            <img src='src\component5\Image (7).png' alt=''/>
            <img src='src\component5\Image (4).png' alt=''/>
        </div>
        <div className='flex flex-col h-[60vh] w-[30vw] relative right-[200px] top-[30px] gap-[3rem]' id='img2'>
            <img src='src\component5\Image (6).png' alt=''/>
            <img src='src\component5\Image (5).png' alt=''/>
        </div>
        <div className='flex flex-col items-center justify-center ml-[-20rem] relative left-[25px]'>
            <h1 className='text-[30px]'>enjoy the</h1>
            <h1 className='text-[30px]'>best places to travel</h1><br/>
            <p>get to know the seasonal offers and promotions</p> <br/>
            <button className='bg-gray-800 border-0 text-white border-black rounded-full text-[20px] w-[13vw] h-[5vh]'>search here</button>
        </div>
    </div>
  )
}

export default Page5