import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark py-3 sticky-top" id="navbar">
            <div className="container-fluid">
                <a className="navbar-brand justify-content-md-start" href="/">Jon Hay</a>
                <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-toggleable-xs justify-content-md-end text-center" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-3">
                            <a className="nav-link text-white" aria-current="page" href="/#home">Home</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link text-white" href="/#about">About</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link text-white" href="/#projects">Projects</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link text-white" href="/#skills">Skills</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link text-white" href="../JonHayJrResume.pdf" download>Resume</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link text-white" href="/#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
