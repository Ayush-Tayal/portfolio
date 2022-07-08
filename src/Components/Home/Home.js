import React from "react";
import logo from "../../Assests/icon.jpg";
import Typewriter from "typewriter-effect";
import { SiGithub, SiGmail } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HomeContainerWrapper } from "./HomeStyled";

const Home = () => {
  return (
    <HomeContainerWrapper>
      <div id="home">
        <div id="img-icon">
          <img src={logo} alt="my-pic" />
        </div>

        <div id="home-content">
          <div id="greeting">
            <label> Hey There..!! </label>
          </div>

          <div id="name">
            <h1> I'M AYUSH TAYAL </h1>

            <Typewriter
              options={{
                strings: ["Software Engineer", "MERN Stack Developer"],
                autoStart: true,
                delay: 100,
                loop: true,
              }}
            />
          </div>

          <div id="profile-links">
            <SiGithub
              className="home_icons git_icn"
              onClick={() => window.open("https://github.com/Ayush-Tayal")}
            />
            <AiFillLinkedin
              className="home_icons ldn_icn"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/ayush-tayal-4a962b18a/"
                )
              }
            />
            <BsFillTelephoneFill
              className="home_icons ph_icn"
              onClick={() => window.open("tel:+91-817-852-4253")}
            />
            <SiGmail
              className="home_icons mail_icn"
              onClick={() => window.open("mailto:ayushtayal1111@gmail.com")}
            />
          </div>
        </div>
      </div>
    </HomeContainerWrapper>
  );
};

export default Home;
