export default function Header() {
  const fontLato = {
    fontFamily: "Yellowtail",
  };
  return (
    <header className="header p-8 sm:p-11 overflow-hidden">
      <div className="header1-img1 overflow-hidden">
        <img id="texture" src="src/Component1/Texture@4x.png" alt="Texture" />
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center relative bottom-[-3rem] gap-4">
        <span>
          <img src="src\Componet1\icons8-heart-50.png" alt="Heart Icon" />
        </span>
        <span className="text-[20px] sm:text-[30px]">
          <h1>to travel</h1>
        </span>
      </div>

      <div className="flex flex-col sm:flex-row relative bottom-[-3.2rem] justify-around items-center">
        <div className="mb-4 sm:mb-0 sm:mr-8">
          <h1 style={fontLato} className="text-[25px] sm:text-[35px] font-bold relative sm:left-[10vw]">
            Wedding
          </h1>
        </div>

        <nav>
          <ul className="flex flex-wrap justify-center sm:gap-7 text-[10px] sm:text-[12px]">
            <li className="hover:text-lg mx-2 sm:mx-0">
              <a href="#destinations">destinations</a>
            </li>
            <li className="hover:text-lg mx-2 sm:mx-0">
              <a href="#packages">packages</a>
            </li>
            <li className="hover:text-lg mx-2 sm:mx-0">
              <a href="#tours">tours</a>
            </li>
            <li className="hover:text-lg mx-2 sm:mx-0">
              <a href="#promotions">promotions</a>
            </li>
            <li className="hover:text-lg mx-2 sm:mx-0">
              <a href="#gallery">gallery</a>
            </li>
            <li className="hover:text-lg mx-2 sm:mx-0">
              <a href="#contact">contact</a>
            </li>
          </ul>
        </nav>

        <div className="text-center mt-4 sm:mt-0">
          <p className="text-[10px]">Create new account</p>
          <button className="bg-gray-800 text-white rounded-full text-[15px] sm:text-[20px] w-[40vw] sm:w-[8vw] h-[5vh]">
            enter
          </button>
        </div>
      </div>

      <div className="relative bottom-[-7rem] flex flex-col gap-2 p-[1rem] sm:p-[2rem] mt-[-2rem]">
        <div>
          <h1 className="text-[15px] sm:text-[20px] max-sm:text-center">
            your wedding on the best
            <br />
            beaches in the world
          </h1>
        </div>
        <div>
          <button className="bg-gray-800 text-white rounded-full text-[12px] sm:text-[15px] p-2 sm:p-3 w-[40vw] sm:w-[16vw] max-sm:ml-20">
            quote your event
          </button>
        </div>
        <div>
          <p className="text-[8px] sm:text-[10px] max-sm:w-[100%] max-sm:h-[100%] max-sm:text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br className="max-sm:hidden" />
            Dicta praesentium amet hic? Soluta vitae error voluptates,
            <br  className="max-sm:hidden"  />
            hic consequatur deserunt numquam ut dolorem maiores.
          </p>
        </div>
      </div>
    </header>
  );
}
