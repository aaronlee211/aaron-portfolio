import React from 'react'
import { useState, useEffect } from 'react'
import { Navbar, Container, Nav } from "react-bootstrap"
import { ExternalLink } from 'react-external-link';
import linkedin from '../img/linkedin.svg';
import gitlab from '../img/gitlab.svg';


function NavigationBar() {
    const [ activeLink, setActiveLink ] = useState("home");
    const [ scrolled, setScrolled ] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : "navbar-link"} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className='navbar-text'>
                    <div className='social-icon'>
                        <ExternalLink href="https://www.linkedin.com/in/aaron-lee-1701b3251/"><img src={linkedin} alt="" /></ExternalLink>
                        <ExternalLink href="https://gitlab.com/aaronlee97667"><img src={gitlab} alt="" /></ExternalLink>
                    </div>
                    <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link' : "navbar-link"}>
                        <button className='vvd' onClick={() => onUpdateActiveLink('connect')}>
                            <span>Let's Connect</span>
                        </button>
                    </Nav.Link>
                </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavigationBar;
