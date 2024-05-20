import React from "react";

function Page8() {
  return (
    <div className="flex flex-col h-[190vh] bg-white ">
      <div className="wedding flex h-[125vh] w-[100vw] p-10">
        <div className="flex flex-col w-[50vw] gap-[1rem] relative top-[8rem] left-[90px] space-evenly">
          <h1 className="text-[22px]">
            sign up for a wedding <br />
            newsletter and learn about the
            <br /> best destinations to celebrate
            <br /> your wedding
          </h1>
          <button className="border-2  border-black rounded-full text-[14px] p-2 w-[22vw]">
            name
          </button>
          <button className="border-2  border-black rounded-full text-[14px] p-2 w-[22vw]">
            email
          </button>
          <button className="border-2  bg-gray-800 border-black rounded-full text-[14px] p-2 w-[22vw] text-white">
            sign up
          </button>
          <p className="text-[12px] w-[32vw]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem
            dolor sit amet.Fugit commodi optio, inventore sunt et corrupti
            perspiciatis temporibus assumenda rerum architecto?
          </p>
          <button className="bg-blue-400 rounded-t-lg text-[20px] relative top-[210px] left-[20px] h-[40px] w-[200px]">
            Contact an advisor
          </button>
        </div>
        <div className="couple relative left-[24px]">
          <img src="src\component8\Image (12).png" alt="" />
        </div>
      </div>


      <div className="list h-[65vh] w-[90vw] bg-gray-200 flex mx-auto justify-evenly">
        <div className="flex flex-col justify-center items-center gap-8" id="contact">
          <ul className>
            <li className="pb-5">Packages</li>
            <li className="pb-5">Destinations</li>
            <li className="pb-5">Tours</li>
            <li className="pb-5">Promotions</li>
            <li className="pb-5">Gallery</li>
            <li className="pb-5">Contact</li>
          </ul>
        </div>
        <div className="relative top-[50px]">
          <img src="src\component8\Shape .png" alt="" />
        </div>

        <div className="flex flex-col justify-center iems-center gap-[1rem] w-[240px]">
          <div className="footer flex items-center">
            <span>
              <img src="src\Componet1\icons8-heart-50.png" alt="" />
            </span>
            <span className="text-[30px]">
              <h1>to travel</h1>
            </span>
          </div>
          <div className="items-center">
            <button className="border-2 bg-gray-800 border-black rounded-full text-[14px] p-2 w-[10vw] text-white">enter</button>
          </div>
          <p className="text-[10px] relative bottom-[8px] left-[12px]">create new account</p>
          <p className="text-[10px]">Lorem ipsum dolor sit amet quasi voluptatum nulla placeat. Esse deleniti eveniet libero mollitia voluptatem, qui, repudiandae facere rem quasi molestiae adipisci repellendus doloremque.</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-[1rem] ">
            <h1>Subscribe to <br/> our newsletter</h1>
            <button className="border-2  border-black rounded-full text-[14px] p-2 w-[18vw]">email</button>
            <button className="border-2  bg-gray-800 border-black rounded-full text-[14px] p-2 w-[18vw] text-white">sign up</button>
            <p className="text-[10px] w-[140px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde ipsa distinctio aliquam perferendis! Quam, fugiat.</p>
        </div>
      </div>
    </div>
  );
}

export default Page8;
