export default function Page2() {
  const fontLato = {
    fontFamily: 'Yellowtail'
};
  return (
    <>
      <div className="flex h-[100vh] w-[100vw] justify-center items-center gap-[3rem]">
        <div className="main" id="packages"></div>
        <div className="flex justify-center items-start flex-col gap-3 relative bottom-[2rem]">
          <h1 style={fontLato} className="text-[30px] font-bold">Wedding</h1>
          <p className="text-[25px]">
            amazing places
            <br />
            to celebrate your
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
          <div>
            <button className="bg-gray-800 border-0 text-white border-black rounded-full text-[15px] h-[5vh] w-[8vw]">
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
