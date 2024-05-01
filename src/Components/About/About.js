import React from "react";
import about from "../../Assests/about.png";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Button } from "@mui/material";
import { Bounce, Fade } from "react-reveal";
import { AboutContainerWrapper } from "./AboutStyled";
// import Resume from '../../Assests/resume.pdf'
import { BsCloudArrowDownFill} from "react-icons/bs";


const About = () => {
  return (
    <AboutContainerWrapper>
      <div id="about">
        <div id="about-me">
          <Bounce>
            <h1> ABOUT ME </h1>
          </Bounce>

          <Fade left>
            <p>
              {" "}
              Hey there, I'm Ayush Tayal, a skilled Software Engineer proficient in MERN Stack and modern web tech. I've built e-commerce apps, chat applications, and more, using Redux, Material-UI, Ant Design, and Firebase. My research on the Hyperloop Transportation System was published during my Bachelor's degree. Currently, I'm at Mordor Intelligence, contributing to various projects like IW, Lorien, and Main Website. 
              <br/>
              Let's connect and create innovative web solutions together!
            </p>
          </Fade>

          {/* <div id="download-resume">
            <Button
              variant="contained"
              href=''
              download="Ayush's Resume"
            >
              Download Resume
              <BsCloudArrowDownFill className="download_icon" />
            </Button>
          </div> */}
        </div>

        <div id="about-img">
          <Fade right>
            <img src={about} alt="about" />
          </Fade>
        </div>
      </div>
    </AboutContainerWrapper>
  );
};

export default About;
