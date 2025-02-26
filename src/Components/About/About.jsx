import React from 'react'
import './About.css'
import img from '../../Assets/dummy.png'
import { TbDownload } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <div className="about-page">
        <div className="about-page-1">
          <div className="prof-ab">
            <p>Hi there! I'm <span>ADISH</span></p>
              <img className='img-ab' src= {img} alt="" />
              <div className="p-ab">FULL-STACK DEVELOPER</div>

              <button className='cv-ab'>Download CV <TbDownload className='dl-ab'/></button>

              <div className="conn-ab">
                <div className="con-ico-ab">
                  <FaGithub className='ico-con-ab'/>
                  <FaLinkedin className='ico-con-ab'/>
                  <FaWhatsapp className='ico-con-ab'/>
                </div>
                <div className='connect-ab'>
                  Connect !
                </div>
              </div>
          </div>
          <div className="port-ab"></div>
        </div>
      </div>
    </>
  )
}

export default About