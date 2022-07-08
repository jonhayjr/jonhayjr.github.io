import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import {FaTimes, FaBars} from "react-icons/fa";

import useToggler from "../hooks/useToggler";

const Navbar = () => {
    const [show, handleClick] = useToggler(true);

    return (
        <>
        <div className="desktop-nav bg-dark text-white p-4 d-flex justify-content-between align-items-center sticky-top">
        <a href="/"><h1 className="logo m-0 font-weight-bold text-white">Jon Hay</h1></a>
           <nav className="d-sm-none d-md-none d-none d-lg-flex justify-content-between h3 nav">
                <Link to="home" className="mr-5 nav-link" activeClass="active" smooth={true} offset={-100} duration={500}>Home</Link>
                <Link to="about" className="mr-5 nav-link" activeClass="active" smooth={true} offset={-75} duration={500}>About</Link>
                <Link to="projects" className="mr-5 nav-link" activeClass="active" smooth={true} offset={-100} duration={500}>Projects</Link>
                <Link to="skills" className="mr-5 nav-link" activeClass="active" smooth={true} offset={-100} duration={500}>Skills</Link>
                <a href="../JonHayJrResume.pdf" download className="mr-5 nav-link">Resume</a>
                <Link to="contact" className="nav-link" activeClass="active" offset={500} smooth={true} duration={500}>Contact</Link>
            </nav>
            <div className="mobile-hamburger d-lg-none" onClick={handleClick}>
                {show ? <FaBars size={30}/> : <FaTimes size={30}/>}
            </div>
        </div>
     
           {!show && <div className="mobile-menu bg-dark text-white d-lg-none flex-column text-center position-fixed top-0 left-0 py-5 nav">
                <a href="/#home" className="mb-4 h1" onClick={handleClick}>Home</a>
                <hr className="nav-divider"/>
                <a href="/#about" className="my-4 h1" onClick={handleClick}>About</a>
                <hr className="nav-divider"/>
                <a href="/#projects" className="my-4 h1" onClick={handleClick}>Projects</a>
                <hr className="nav-divider"/>
                <a href="/#skills" className="my-4 h1" onClick={handleClick}>Skills</a>
                <hr className="nav-divider"/>
                <a href="../JonHayJrResume.pdf" download className="my-4 h1" onClick={handleClick}>Resume</a>
                <hr className="nav-divider"/>
                <a href="/contact" className="mt-4 h1" onClick={handleClick}>Contact</a>
            </div>}
        </>
    )
}

export default Navbar
