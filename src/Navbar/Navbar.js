import React from "react";
import { Link } from "react-scroll";
import {FaTimes, FaBars} from "react-icons/fa";

import useToggler from "../hooks/useToggler";

const Navbar = ({updateTitle}) => {
    const [show, handleToggle] = useToggler(true);

    const handleMobileClick = (newTitle) => {
        updateTitle(newTitle);
        handleToggle();
    }

    return (
        <>
        <div className="desktop-nav bg-dark text-white p-4 d-flex justify-content-between align-items-center sticky-top">
        <Link to="home" smooth={true} offset={-100} duration={500} onClick={() => {updateTitle("Home")}}><h1 className="logo m-0 font-weight-bold text-white">Jon Hay</h1></Link>
           <nav className="d-sm-none d-md-none d-lg-none d-none d-xl-flex justify-content-between h3 nav">
                <Link to="home" className="mr-5 nav-link nav-link--desktop" smooth={true} offset={-100} duration={500} onClick={() => {updateTitle("Home")}}>Home</Link>
                <Link to="about" className="mr-5 nav-link nav-link--desktop" smooth={true} offset={-75} duration={500} onClick={() => {updateTitle("About")}}>About</Link>
                <Link to="projects" className="mr-5 nav-link nav-link--desktop" smooth={true} offset={-100} duration={500} onClick={() => {updateTitle("Projects")}}>Projects</Link>
                <Link to="skills" className="mr-5 nav-link nav-link--desktop" smooth={true} offset={-100} duration={500} onClick={() => {updateTitle("Skills")}}>Skills</Link>
                <a href="../JonHayJrResume.pdf" download className="mr-5 nav-link nav-link--desktop" onClick={() => {updateTitle("Resume")}}>Resume</a>
                <Link to="contact" className="nav-link nav-link--desktop" smooth={true} offset={5000} duration={500} onClick={() => {updateTitle("Contact")}}>Contact</Link>
            </nav>
            <div className="mobile-hamburger d-xl-none" onClick={handleToggle}>
                {show ? <FaBars size={30}/> : <FaTimes size={30}/>}
            </div>
        </div>
     
           {!show && <div className="mobile-menu bg-dark text-white d-xl-none flex-column text-center position-fixed top-0 left-0 py-5 nav">
                <Link to="home" className="mb-4 h2 nav-link" smooth={true} offset={-100} duration={500} onClick={() => {handleMobileClick("Home")}}>Home</Link>
                <hr className="nav-divider"/>
                <Link to="about" className="my-4 h2" smooth={true} offset={-100} duration={500} onClick={() => {handleMobileClick("About")}}>About</Link>
                <hr className="nav-divider"/>
                <Link to="projects" className="my-4 h2 nav-link" smooth={true} offset={-100} duration={500} onClick={() => {handleMobileClick("Projects")}}>Projects</Link>
                <hr className="nav-divider"/>
                <Link to="skills" className="my-4 h2 nav-link" smooth={true} offset={-100} duration={500} onClick={() => {handleMobileClick("Skills")}}>Skills</Link>
                <hr className="nav-divider"/>
                <a href="../JonHayJrResume.pdf" download className="my-4 h2 nav-link" onClick={() => {handleMobileClick("Resume")}}>Resume</a>
                <hr className="nav-divider"/>
                <Link to="contact" className="mt-4 h2 nav-link" smooth={true} offset={5000} duration={500}  onClick={() => {handleMobileClick("Contact")}}>Contact</Link>
            </div>}
        </>
    )
}

export default Navbar
