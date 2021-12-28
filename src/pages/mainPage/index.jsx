import React from "react";
import About from "../about/index.jsx";
import Home from "../home/index.jsx";
import Navbar from "../../components/navbar/index.jsx";
import Portfolio from "../portfolio/index.jsx";
import Resume from "../resume/index.jsx";
import Skills from "../skills/index.jsx";
import { DisplayFlex } from "./styles.js";

function MainPage() {
  return (
    <div>
      <DisplayFlex>
        <Navbar />
        <div>
          <Home />
          <About />
          <Skills />
          <Resume />
          <Portfolio />
        </div>
      </DisplayFlex>
    </div>
  );
}

export default MainPage;
