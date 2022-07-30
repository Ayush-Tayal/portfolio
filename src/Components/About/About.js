import React from "react";
import about from "../../Assests/about.png";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Button } from "@mui/material";
import { Bounce, Fade } from "react-reveal";
import { AboutContainerWrapper } from "./AboutStyled";
import Resume from '../../Assests/resume.pdf'
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
              Hi, Ayush Tayal this side from Delhi, completed my graduation in
              Bachelor degree. Besides this, I am trained in Web Development and
              love to code using MERN Stack. Currently, I'm working as a
              Software Engineer at Mordor Intelligence and am the type of person
              who is positive in every aspect of life.
            </p>
          </Fade>

          <div id="download-resume">
            <Button
              variant="contained"
              href={Resume}
              download="Ayush's Resume"
            >
              Download Resume
              <BsCloudArrowDownFill className="download_icon" />
            </Button>
          </div>
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
