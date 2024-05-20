export default function Page4() {
  const Yellowtail = {
    fontFamily: "Yellowtail",
  };
  return (
    <>
      <div className="page4" id="gallery">
        <div>
          <div className="page4ve">
            <div className="relative left-[35vw] flex flex-col justify-center top-[5rem] ">
              <div className="heading">
                <h1 style={Yellowtail} className="text-[35px] relative left-[80px]">Your Wedding</h1>
              </div>
              <div>
                <p className="text-[35px]">on the best beachs</p>
              </div>
              <div className="flex relative left-[10vw] top-[2rem]">
                <img src="src\Componet4\icons8-heart-50.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
