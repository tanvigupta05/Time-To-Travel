import { useState } from "react";
import "./App.css";
import Header from "./Componet1/Header";
import Page2 from "./Componet2/Page2";
import Page3 from "./Componet3/Page3";
import Page4 from "./Componet4/Page";
import Page5 from "./component5/Page5";
import Page6 from "./component6/Page6";
import Page7 from "./component7/Page7";
import Page8 from "./component8/Page8";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Header></Header>
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        <Page8 />
      </div>
    </>
  );
}

export default App;
