import React from "react";
import "./Skills.css";
import { AiFillHtml5 } from "react-icons/ai";
import {
  SiCss3,
  SiJavascript,
  SiMaterialui,
  SiAntdesign,
  SiRedux,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiBitbucket,
} from "react-icons/si";
import { FaBootstrap, FaReact, FaJira } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { Bounce, Zoom } from "react-reveal";

const Skills = () => {
  return (
    <div id="skills">
      <Bounce>
        <h1 className="skill-heading"> MY SKILLS </h1>
      </Bounce>
      
      <Zoom>
        

      <div id="skill_content">
        <div>
          <AiFillHtml5 className="skill_icon html_icon" />
          <h2> HTML </h2>
        </div>

        <div>
          <SiCss3 className="skill_icon css_icon" />
          <h2> CSS </h2>
        </div>

        <div>
          <FaBootstrap className="skill_icon bootstrap_icon" />
          <h2> Bootstrap </h2>
        </div>

        <div>
          <SiJavascript className="skill_icon js_icon" />
          <h2> JavaScript </h2>
        </div>

        <div>
          <FaReact className="skill_icon react_icon" />
          <h2> ReactJs </h2>
        </div>

        <div>
          <SiMaterialui className="skill_icon mui_icon" />
          <h2> Material-UI </h2>
        </div>

        <div>
          <SiAntdesign className="skill_icon antd_icon" />
          <h2> ANT-Design </h2>
        </div>

        <div>
          <SiRedux className="skill_icon redux_icon" />
          <h2> Redux </h2>
        </div>

        <div>
          <IoLogoNodejs className="skill_icon node_icon" />
          <h2> NodeJs </h2>
        </div>

        <div>
          <SiExpress className="skill_icon express_icon" />
          <h2> ExpressJs </h2>
        </div>

        <div>
          <SiFirebase className="skill_icon firebase_icon" />
          <h2> Firebase </h2>
        </div>

        <div>
          <SiGithub className="skill_icon github_icon" />
          <h2> Github </h2>
        </div>

        <div>
          <SiBitbucket className="skill_icon bit_icon" />
          <h2> BitBucket </h2>
        </div>

        <div>
          <FaJira className="skill_icon jira_icon" />
          <h2> Jira </h2>
        </div>

      </div>
    </Zoom>

    </div>
  );
};

export default Skills;
