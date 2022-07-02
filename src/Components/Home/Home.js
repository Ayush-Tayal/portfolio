import React from "react";
import "./Home.css";
import logo from "../../Assests/icon.jpg";
import Typewriter from "typewriter-effect";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";

const Home = () => {
  return (
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
          <SiLinkedin
            className="home_icons ldn_icn"
            onClick={() =>
              window.open("https://www.linkedin.com/in/ayush-tayal-4a962b18a/")
            }
          />
          <BsFillTelephoneFill
            className="home_icons ph_icn"
            onClick={() =>
              window.open(
                "tel:+91-817-852-4253"
              )
            }
          />
          <SiGmail
            className="home_icons mail_icn"
            onClick={() =>
              window.open(
                "mailto:ayushtayal1111@gmail.com"
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
