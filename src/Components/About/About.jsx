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
          <div className="port-ab">
            <div className="ps">Professional Summary:</div>
            <div className="ps-p">I’m a tech enthusiast with a strong passion for building web applications that not only look great but also function seamlessly. As a Full Stack Developer, I’ve worked with technologies like HTML, CSS, JavaScript, React.js, Node.js, Express.js. Through hands-on projects, I’ve gained experience in creating dynamic websites, developing RESTful APIs, and solving real-world coding challenges.
              <br />  
              <br /> </div>
        <div className="ps-p">What excites me the most about development is the problem-solving aspect—figuring out how to make things work efficiently and elegantly. I thrive on learning new things, adapting to challenges, and collaborating with like-minded people. Now, I’m eager to step into the industry, contribute my skills, and grow as a developer in a team that values innovation and creativity.
        </div>
        
        </div>
          
        </div>
      </div>
    </>
  )
}

export default About