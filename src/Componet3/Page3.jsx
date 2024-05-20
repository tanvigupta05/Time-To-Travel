export default function Page3() {
  const fontLato = {
    fontFamily: 'Yellowtail'
};
    return (
      <>
        <div className="bg-gray-100 h-[100vh] w-[100vw] flex overflow-y-hidden">
          <div className="page3" id="tours"></div>
          <div className="flex flex-col relative left-[-15rem] top-[10rem]">
            <div className="flex gap-2">
              <span className="flex justify-center items-center">
                <img src="src\Componet3\icons8-heart-50.png" alt="" />
              </span>
              <span className="text-[40px]">
                <h1 className="text-[40px]">to travel</h1>
              </span>
            </div>
            <div>
              <u>
                quote your honeymoon <br />
                airplane and stay for guests <br />
                package for bride and groom
              </u>
            </div>
          </div>
  
  
          <div className="flex gap-3 flex-col relative left-[-7rem] top-[5rem]">
            <span className="text-[23px]">travel on your wedding</span>
  
  
            <div className="flex flex-col text-start gap-2">
              <button className=" border-2  border-black rounded-full text-[14px] p-2 w-[22vw]">destination </button>
              <button className=" border-2  border-black rounded-full text-[14px] p-2 w-[22vw]">travel on your wedding</button>
              <button className=" border-2  border-black rounded-full text-[14px] p-2 w-[22vw]">number of guests </button>
              <button className=" border-2  border-black rounded-full text-[14px] p-2 w-[22vw]">days of stay </button>
            </div>
  
  
            <button  className="bg-gray-800 border-0 text-white border-black rounded-full text-[20px] w-[22vw]">find the best options</button>
  
  
            <p className=" text-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />Dicta praesentium
              amet hic? Soluta vitae error voluptates,<br />hic consequatur deserunt numquam ut dolorem maiores.<br />
            </p>
  
  
            <div className="relative top-[15vh]">
              <button className="bg-blue-200 rounded-t-lg text-[24px] p-3 relative top-[38px]">contact an advisor</button>
            </div>
  
  
          </div>
        </div>
      </>
    );
  }
  