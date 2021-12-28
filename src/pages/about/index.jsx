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
            <h2>Frontend developer</h2>
            <DF>
              <p>&#x276D;</p>
              <b>Birthday:</b>
              <p>21 May 2008</p>
            </DF>
            <DF>
              <p>&#x276D;</p>
              <b>Phone:</b>
              <p>+998 99 225 31 05</p>
            </DF>
            <DF>
              <p>&#x276D;</p>
              <b>City:</b>
              <p>Uzbekistan, Angren</p>
            </DF>
            <DF>
              <p>&#x276D;</p>
              <b>Email:</b>
              <p>khisrav021@gmail.com</p>
            </DF>
          </Texts>
        </Rotate>
      </DisplayFlex>
    </AboutCard>
  );
}

export default About;
