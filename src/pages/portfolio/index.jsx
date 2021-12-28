import React from "react";
import { DisplayFlex, PortfolioCard } from "./styles";
import portfolioImage from '../../assets/images/portfolio-1.jpg'

function Portfolio() {

  
  return (
    <PortfolioCard id="portfolio">
      <h1>Portfolio</h1>
      <br />
      <hr />
      <br />
      <br />
      <h2>My Portfolios</h2>
      <br />
      <br />
      <DisplayFlex>
        <div>
          <div>
            <a href="" target="_blank">
              <img  src={portfolioImage} alt="" />
            </a>
          </div>
          <br />
          <div>
            <a href="" target="_blank">
              <img src={portfolioImage} alt="" />
            </a>
          </div>
        </div>
        <div>
          <div>
            <a href="" target="_blank">
              <img src={portfolioImage} alt="" />
            </a>
          </div>
          <br />
          <div>
            <a href="" target="_blank">
              <img src={portfolioImage} alt="" />
            </a>
          </div>
        </div>
        <div>
          <div>
            <a href="" target="_blank">
              <img src={portfolioImage} alt="" />
            </a>
          </div>
          <br />
          <div>
            <a href="" target="_blank">
              <img src={portfolioImage} alt="" />
            </a>
          </div>
        </div>
      </DisplayFlex>
    </PortfolioCard>
  );
}

export default Portfolio;
