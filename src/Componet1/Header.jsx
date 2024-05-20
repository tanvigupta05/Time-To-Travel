export default function Header() {
  const fontLato = {
    fontFamily: "Yellowtail",
  };
  return (
    <>
      <div className="header p-11 overflow-hidden">
        <div className="header1-img1 overflow-hidden">
          <img id="texture" src="src\Componet1\Texture@4x.png" alt="" />
        </div>

        <div className="flex justify-center items-center relative bottom-[-3rem] gap-4">
          <span>
            <img src="src\Componet1\icons8-heart-50.png" alt="" />
          </span>
          <span className="text-[30px]">
            <h1>to travel</h1>
          </span>
        </div>

        <div className="flex relative bottom-[-3.2rem] justify-around items-center">
          <div className="mr-8">
            <h1 style={fontLato} className="text-[35px] font-bold relative left-[10vw]">
              Wedding
            </h1>
          </div>

          <div id="destinations">
            <ul className="flex gap-7 text-[12px]">
              <li className="hover:text-lg">
                <a href="#destinations">destinations</a>
              </li>
              <li className="hover:text-lg">
                <a href="#packages">packages</a>
              </li>
              <li className="hover:text-lg">
                <a href="#tours">tours</a>
              </li>
              <li className="hover:text-lg">
                <a href="#promotions">promotions</a>
              </li>
              <li className="hover:text-lg">
                <a href="#gallery">gallery</a>
              </li>
              <li className="hover:text-lg">
                <a href="#contact">contact</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[10px]">Create new account</p>
            <button className="bg-gray-800 border-0 text-white border-black rounded-full text-[20px] w-[8vw] h-[5vh]">
              enter
            </button>
          </div>
        </div>

        <div className="relative bottom-[-7rem] flex flex-col gap-2 p-[2rem] mt-[-2rem]">
          <div>
            <h1 className="text-[20px]">
              your wedding on the best
              <br />
              beaches in the world
            </h1>
          </div>
          <div>
            <button className="bg-gray-800 border-0 text-white border-black rounded-full text-[15px] p-3 w-[16vw]">
              quote your event
            </button>
          </div>
          <div>
            <p className="text-[8px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Dicta praesentium amet hic? Soluta vitae error voluptates,
              <br />
              hic consequatur deserunt numquam ut dolorem maiores
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
