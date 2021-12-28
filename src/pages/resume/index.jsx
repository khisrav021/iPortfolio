import React from "react";
import Bounce from "react-reveal/Bounce";
import { ResumeCard, Texts } from "./styles";

function Resume() {
  return (
    <Bounce>
      <ResumeCard id="resume">
        <h1>Resume</h1>
        <br />
        <hr />
        <br />
        <h2>Education</h2>
        <br />
        <Texts>
          <div>
            <div className="BorderRadius"></div>
            <hr />
          </div>
          <div>
            <h4>IBS School</h4>
            <br />
            <div>
              <b>2021 29-april - 1-october</b>
            </div>
            <br />
            <small>
              Uzbekistan, Angren <br />
              <a href="https://ibs-school.uz/" target="_blank">
                link
              </a>
            </small>
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              officiis eum pariatur <br /> excepturi voluptatum deleniti
              eligendi harum accusamus omnis et, sit labore magni provident
              doloremque iste sint odio. Suscipit, esse. excepturi voluptatum
              deleniti eligendi harum accusamus omnis et, sit labore magni
              provident doloremque iste sint odio. Suscipit, esse.
            </p>
          </div>
        </Texts>
      </ResumeCard>
    </Bounce>
  );
}

export default Resume;
