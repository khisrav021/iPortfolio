import React from "react";
import Flip from "react-reveal/Flip";
import { BackgroundImageDiv, Hi } from "./styles";

function Home() {
  return (
    <BackgroundImageDiv id="home">
      <Flip>
        <h1>Abdulazizov Khisrav</h1>
        <br />
        {/* <h2>I'm frontend developer</h2> */}
      </Flip>
      <Hi>
        <div class="content">
          <div class="content__container">
            <p class="content__container__text">I'm</p>

            <ul class="content__container__list">
              <li class="content__container__list__item">developer !</li>
              <li class="content__container__list__item">web frontend developer ! </li>
            </ul>
          </div>
        </div>
      </Hi>
    </BackgroundImageDiv>
  );
}

export default Home;
