import React from 'react'

function Page6() {
  return (
    <div className="flex h-[100vh] w-[100vw] space-evenly bg-gray-100 p-[2rem] max-sm:overflow-x-hidden" id='Page6'>
        <div className='relative top-[60px]'>
            <h1 className='text-[30px] relative top-[110px] max-sm:text-[25px] max-sm:top-[170px]'>airfare and accomodation <br/>
             packages for you guests</h1>
        </div>
        <div className='centerImg h-[90vh] relative right-[180px] max-sm:right-[230px] max-sm:w-[80%] max-sm:top-[50px]'>
            <img src='src\component6\Image (9).png' alt=''/>
        </div>
        <div className='flex flex-col gap-[2rem] w-[80px] ml-[-8rem] relative max-sm:right-[60px]'>
            <img src='src\component6\icons8-heart-50.png' alt=''/>
            <p className='text-[10px] w-[170px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis quidem laudantium fuga, eligendi cum sequi excepturi et saepe doloribus consectetur tempora.</p>
            <button className='bg-gray-800 border-0 text-white border-black rounded-full text-[20px] w-[10vw] h-[5vh] max-sm:w-[25vw]'>Search</button>
            <p className='text-[]12px w-[170px] underline'>Lorem ipsum dolor, amet consectetur. Voluptatem rem placeat aliquid illo quo totam.</p>
        </div>
        <div>
            <img className='relative left-[135px] h-[80vh] max-sm:hidden' src='src\component6\Untitled_design__5_-removebg-preview.png' alt=''/>
        </div>   
    </div>
  )
}

export default Page6