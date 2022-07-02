import React from 'react'
import './About.css'
import about from '../../Assests/about.png'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Button } from '@mui/material'
import { Flip } from 'react-reveal';

const About = () => {
  return (
    <div id='about'>
      <div id='about-me'>
        <Flip>
          <h1> ABOUT ME </h1>
        </Flip>
          
        
        <p> Hi, Ayush Tayal this side from Delhi, completed my graduation in Bachelor degree. Beside this, I am 
          trained in Web Development and love to code using MERN Stack.Currently I'm working as a Software 
          Engineer at Mordor Intelligence and a type of person who is positive in every aspect of life.
        </p>

        <div id='download-resume'>
          <Button 
            variant='contained' 
            href='../../Assests/resume.pdf'
            download 
          > 
            Download Resume 
            <FileDownloadIcon/> 
          </Button>
          
        </div>

      </div>
      
      <div id='about-img'>
        <img src={about} alt='about' />
      </div>
    </div>

  )
}

export default About