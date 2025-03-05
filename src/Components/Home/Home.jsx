import React from 'react'
import './Home.css'
import img from '../../Assets/dummy.png'
import { TbDownload } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { BsPersonWorkspace } from "react-icons/bs";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoNodejs } from "react-icons/io5";
import { SiCoronarenderer } from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";
import { TiSocialDribbble } from "react-icons/ti";
import { FaGraduationCap } from "react-icons/fa6";


const Home = () => {
  return (
    <>
      {/* <Navbar/> */}
    <div className="home1">
      <div className="home">
        <div className="prof">
          <p>Hey there! I'm <span>ADISH</span></p>
            <img className='img' src= {img} alt="" />
            <div className="p">FULL-STACK DEVELOPER</div>

            <button className='cv'>Download CV <TbDownload className='dl'/></button>

            <div className="conn">
              <div className="con-ico">
                <FaGithub className='ico-con'/>
                <FaLinkedin className='ico-con'/>
                <FaWhatsapp className='ico-con'/>
              </div>
              <div className='connect'>
                Connect !
              </div>
            </div>
        </div>
        <div className="port">
            <div className="about">
              <div className="ab">
                <div className='ab-ico'><CgProfile /></div>
                <div className="abou">About</div>
              </div>
              <div className="work">
                <div className="work-ico"><BsPersonWorkspace /></div>
                <div className="works">Works</div>
              </div>
            </div>
            <div className="skills">
              <div className="skills-ico">
               <span><IoLogoHtml5 /></span>
               <span><IoLogoCss3 /></span>
               <span><IoLogoJavascript /></span>
               <span><IoLogoReact /></span>
               <span><IoLogoNodejs /></span>
               <span><FaGithub /></span>
               <span><SiCoronarenderer /></span>
               <span><BiLogoNetlify /></span>
               <span><IoLogoHtml5 /></span>
               <span><IoLogoCss3 /></span>
               <span><IoLogoJavascript /></span>
               <span><IoLogoReact /></span>
               <span><IoLogoNodejs /></span>
               <span><FaGithub /></span>
               <span><SiCoronarenderer /></span>
               <span><BiLogoNetlify /></span>
               <span><IoLogoHtml5 /></span>
               <span><IoLogoCss3 /></span>
               <span><IoLogoJavascript /></span>
               <span><IoLogoReact /></span>
               <span><IoLogoNodejs /></span>
               <span><FaGithub /></span>
               <span><SiCoronarenderer /></span>
               <span><BiLogoNetlify /></span>
               <span><IoLogoHtml5 /></span>
               <span><IoLogoCss3 /></span>
               <span><IoLogoJavascript /></span>
               <span><IoLogoReact /></span>
               <span><IoLogoNodejs /></span>
               <span><FaGithub /></span>
               <span><SiCoronarenderer /></span>
               <span><BiLogoNetlify /></span>
              </div>
              <div className="con"><h2>SKILLS</h2></div>
              <div className="skills-ico-1">
                  <span>Netlify</span>
                  <span>Render</span>
                  <span>Git</span>
                  <span>NodeJS</span>
                  <span>ReactJS</span>
                  <span>JavaScript</span> 
                  <span>CSS</span>
                  <span>HTML</span>
                  <span>Netlify</span>
                  <span>Render</span>
                  <span>Git</span>
                  <span>NodeJS</span>
                  <span>ReactJS</span>
                  <span>JavaScript</span> 
                  <span>CSS</span>
                  <span>HTML</span>
                  <span>Netlify</span>
                  <span>Render</span>
                  <span>Git</span>
                  <span>NodeJS</span>
                  <span>ReactJS</span>
                  <span>JavaScript</span> 
                  <span>CSS</span>
                  <span>HTML</span>
                  <span>Netlify</span>
                  <span>Render</span>
                  <span>Git</span>
                  <span>NodeJS</span>
                  <span>ReactJS</span>
                  <span>JavaScript</span> 
                  <span>CSS</span>
                  <span>HTML</span>
              </div>
            </div>
            <div className="education">
                <div className="profi">
                  <div className='profi-ico'><TiSocialDribbble /></div>
                  <div className="profil">Profile</div>
                </div>
                <div className="edu">
                  <div className="edu-ico"><FaGraduationCap /></div>
                  <div className="educ">Education</div>
                </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home