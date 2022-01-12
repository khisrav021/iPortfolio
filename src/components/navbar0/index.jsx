import React from "react";
import Bounce from "react-reveal/Bounce";
import avatarIPortfolio from "../../assets/images/avatarIPortfolio.jpg";
import { NavbarCard } from "./styles";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as AboutIcon } from "../../assets/icons/about.svg";
import { ReactComponent as ResumeIcon } from "../../assets/icons/resume.svg";
import { ReactComponent as PortfolioIcon } from "../../assets/icons/portfolio.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/icons/linkedin.svg";
import { ReactComponent as TelegramIcon } from "../../assets/icons/telegram.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram.svg";
import Home from "../../pages/home/index.jsx";
import About from "../../pages/about/index.jsx";
import Resume from "../../pages/resume/index.jsx";
import Portfolio from "../../pages/portfolio/index.jsx";

function Navbars() {
  return (
    <NavbarCard>
      
      {/* <Bounce left>
        <ImageDiv>
          <img src={avatarIPortfolio} alt="avatar" />
          <br />
          <br />
          <h1>
            <b>
              Abdulazizov <br /> Khisrav
            </b>
          </h1>
          <br />
          <br />
        </ImageDiv>
        <Links>
          <a
            href="https://www.facebook.com/profile.php?id=100072122118742"
            target="_blank"
          >
            <div>
              <p>
                <FacebookIcon />
              </p>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/khisrav-%D1%85%D0%B8%D1%81%D1%80%D0%B0%D0%B2-59527921b/"
            target="_blank"
          >
            <div>
              <p>
                <LinkedInIcon />
              </p>
            </div>
          </a>
          <a href="https://t.me/Khisrav21" target="_blank">
            <div>
              <p>
                <TelegramIcon />
              </p>
            </div>
          </a>
          <a href="https://www.instagram.com/khisrav021/" target="_blank">
            <div>
              <p>
                <InstagramIcon />
              </p>
            </div>
          </a>
        </Links>
      </Bounce>
      <br />
      <br />
      <Bounce right>
        <ID>
          <a href="#home">
            <HomeIcon />
            <b>Home</b>
          </a>
        </ID>
        
        <ID>
          <a href="#about">
            <AboutIcon />
            <b>About</b>
          </a>
        </ID>
        
        <ID>
          <a href="#resume">
            <ResumeIcon />
            <b>Resume</b>
          </a>
        </ID>
        
        <ID>
          <a href="#portfolio">
            <PortfolioIcon />
            <b>Portfolio</b>
          </a>
        </ID>
      </Bounce> */}
    </NavbarCard>
  );
}

export default Navbars;
