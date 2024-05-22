export default function Page4() {
  const Yellowtail = {
    fontFamily: "Yellowtail",
  };
  return (
    <>
      <div className="page4" id="destinations">
        <div>
          <div className="page4ve max-sm:bg-none">
            <div className="relative left-[35vw] flex flex-col justify-center top-[5rem] ">
              <div className="heading">
                <h1 style={Yellowtail} className="text-[35px] relative left-[80px] max-sm:left-[-120px] max-sm:text-white">Your Wedding</h1>
              </div>
              <div>
                <p className="text-[35px] relative max-sm:text-[30px] max-sm:left-[-190px] max-sm:text-white">on the best beaches</p>
              </div>
              <div className="flex relative left-[10vw] top-[2rem] max-sm:left-[-50px]">
                <img src="src\Componet4\icons8-heart-50.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
