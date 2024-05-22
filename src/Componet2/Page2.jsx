export default function Page2() {
  const yellowTail= {
    fontFamily: 'Yellowtail'
};
  return (
    <>
      <div className="flex h-[100vh] w-[100vw] justify-center items-center gap-[3rem]">
        <div className="main" id="packages"></div>
        <div className="h-[90vh] w-[45vw]">
          <img className="max-sm:hidden" src="src\Componet2\Image.png" alt=""/>
        </div>
        <div className="flex justify-center items-start flex-col gap-3 relative bottom-[2rem] max-sm:right-[100px] max-sm:text-center">
          <h1 style={yellowTail} className="text-[28px] font-bold max-sm:ml-10 relative max-sm:left-[25px] max-sm:top-[15px]">Wedding</h1>
          <p className="text-[20px] max-sm:w-[100%] max-sm:h-[100%]">
            amazing places to 
            <br/>
            celebrate your
            <br />
            wedding
          </p>
          <br />
          <div className="text-[15px]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br /> Dicta praesentium amet hic? Soluta vitae error voluptates,
              <br /> hic consequatur deserunt numquam ut dolorem m aiores
              <br />
            </p>
          </div>
          <div className="relative max-sm:left-[60px]"> 
            <button className="bg-gray-800 border-0 text-white border-black rounded-full text-[15px] h-[5vh] w-[8vw] max-sm:w-[20vw] sm:text-[10px]">
              Search
            </button>
          </div>
          <div>
            <u> <p className=" text-[15px]">
              Lorem ipsum dolor <br /> sit amet, consectetur adipiscing <br />
              sed do eiusmod tempor <br /> incididunt ut labore et{" "}
            </p>
            </u>
          </div>
        </div>
      </div>
    </>
  );
}