import React from "react";
import Zoom from "react-reveal/Zoom";
import { DisplayFlex, SkillsCard, Text } from "./styles";

function Skills() {
  return (
    <SkillsCard>
      <Zoom>
        <h1>Skills</h1>
        <br />
        <hr />
        <br />
      <br />
      <h2>My Skills</h2>
      <br />
      <br />
      </Zoom>
      <DisplayFlex>
        <div>
          <Zoom>
            <Text>
              <b>HTML</b>
            </Text>
            <Text>
              <b>CSS</b>
            </Text>
            <Text>
              <b>SASS / SCSS</b>
            </Text>
            <Text>
              <b>Bootstrap</b>
            </Text>
          </Zoom>
        </div>
        <div>
          <Zoom>
            <Text>
              <b>Styled Components</b>
            </Text>
            <Text>
              <b>JS</b>
            </Text>
            <Text>
              <b>jquery</b>
            </Text>
            <Text>
              <b>React JS</b>
            </Text>
            <Text>
              <b>Redux</b>
            </Text>
          </Zoom>
        </div>
      </DisplayFlex>
    </SkillsCard>
  );
}

export default Skills;
