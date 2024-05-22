import React from 'react'

function Page5() {
  return (
    <div className="flex h-[100vh] w-[100vw] justify-center space-evenly bg-gray-100 max-sm:flex-col max-sm:h-[120vh]" id="gallery">
        <div className='flex flex-col h-[60vh] w-[30vw] relative top-[120px] right-[150px] gap-[3rem] max-sm:left-[90px] max-sm:flex-row' id="img1">
            <img className='max-sm:w-[15vw] relative max-sm:top-[-15vh]' src='src\component5\Image (7).png' alt=''/>
            <img className='max-sm:w-[15vw] relative max-sm:top-[-15vh]' src='src\component5\Image (4).png' alt=''/>
        </div>
        <div className='flex flex-col h-[60vh] w-[30vw] relative right-[200px] top-[30px] gap-[3rem] max-sm:left-[90px] max-sm:flex-row max-sm:top-[10vh]' id='img2'>
            <img className='relative' src='src\component5\Image (6).png' alt=''/>
            <img src='src\component5\Image (5).png' alt=''/>
        </div>
        <div className='flex flex-col items-center justify-center ml-[-20rem] relative left-[25px] max-sm:left-[140px] top-[59px]'>
            <h1 className='text-[30px]'>enjoy the</h1>
            <h1 className='text-[30px]'>best places to travel</h1><br/>
            <p className='max-sm:text-[13px] max-sm:mt-[-9px]'>get to know the seasonal offers and promotions</p> <br/>
            <button className='bg-gray-800 border-0 text-white border-black rounded-full text-[20px] w-[13vw] h-[5vh] max-sm:mb-[4rem] max-sm:w-[35vw]'>search here</button>
        </div>
    </div>
  )
}

export default Page5