import React from "react";
import Rotate from "react-reveal/Rotate";
import { AboutCard, DF, DisplayFlex, ImageDiv, Texts } from "./styles";
import avatarIPortfolio from "../../assets/images/avatarIPortfolio.jpg";

function About() {
  return (
    <AboutCard id="about">
      <Rotate top left>
        <h1>About</h1>
        <br />
        <hr />
      </Rotate>
      <br />
      <br />
      <DisplayFlex>
        <Rotate top left>
          <ImageDiv>
            <img src={avatarIPortfolio} alt="" />
          </ImageDiv>
        </Rotate>
        <Rotate bottom right>
          <Texts>
            <h2>frontend developer</h2>
            <DF>
              <p>&#x276D;</p>
              <b>Birthday:</b>
              <p>21 May 2008</p>
            </DF>
            <DF>
              <p>&#x276D;</p>
              <b>Phone:</b>
              <p><a href="tel:+998992253105">+998 (99) 225-31-05</a></p>
            </DF>
            <DF>
              <p>&#x276D;</p>
              <b>City:</b>
              <p><a href="https://www.google.com/maps/place/%D0%90%D0%BD%D0%B3%D1%80%D0%B5%D0%BD,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.0338259,70.0683514,35m/data=!3m1!1e3!4m5!3m4!1s0x38afea197cfe7713:0x47b4829ac085712e!8m2!3d41.0335968!4d70.0683658" target="_blank">Uzbekistan, Angren</a></p>
            </DF>
            <DF>
              <p>&#x276D;</p>
              <b>Email:</b>
              <p><a href="mailto:khisrav021@gmail.com">khisrav021@gmail.com</a></p>
            </DF>
          </Texts>
        </Rotate>
      </DisplayFlex>
    </AboutCard>
  );
}

export default About;
