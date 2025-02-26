import React from 'react'
import "./Navbar.css"
import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
    <div className="pf-nb">
       <div className='navbar'>
          <div className='pf'>
            <span className='P'>P</span>ort<span className='P'>F</span>olio
          </div>
          <div className='nb'>
            <h3 className='h3'>Home</h3>
            <h3 className='h3'>About</h3>
            <h3 className='h3'>Works</h3>
            <h3 className='h3'>Contact</h3>
          </div>
          <div className='lt'>   
            <button className='btn-1'>Let's talk <div className="arr-ico"><FaArrowRightLong /></div></button>
          </div>
      </div>
    </div>
    </>
  )
}

export default Navbar