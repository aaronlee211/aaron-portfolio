import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import react from '../skill-icons/react.svg'
import fastapi from '../skill-icons/fastapi.svg'
import mongodb from '../skill-icons/mongodb.svg'
import postgres from '../skill-icons/postgres.svg'
import docker from '../skill-icons/docker.svg'
import python from '../skill-icons/python.svg'
import django from '../skill-icons/django.svg'
import nodejs from '../skill-icons/nodejs.svg'
import tailwindcss from '../skill-icons/tailwindcss.svg'
import javascript from '../skill-icons/javascript.svg'
import html from '../skill-icons/html.svg'
import css from '../skill-icons/css.svg'
import typescript from '../skill-icons/typescript.svg'
import git from '../skill-icons/git.svg'
import colorSharp from "../assets/img/color-sharp.png"

function Skills() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>
                                Skills
                            </h2>
                            <p>Placeholder Text</p>
                            <Carousel responsive={responsive} autoPlay={true} infinite={true} autoPlaySpeed={1000} removeArrowOnDeviceType={["tablet", "mobile", "desktop"]} className='skill-slider'>
                                <div className='item'>
                                    <img src={postgres} alt="Image" />
                                    <h5>PostgresSQL</h5>
                                </div>
                                <div className='item'>
                                    <img src={react} alt="Image" />
                                    <h5>React.js</h5>
                                </div>
                                <div className='item'>
                                    <img src={mongodb} alt="Image" />
                                    <h5>MongoDB</h5>
                                </div>
                                <div className='item'>
                                    <img src={fastapi} alt="Image" />
                                    <h5>FastAPI</h5>
                                </div>

                                <div className='item'>
                                    <img src={python} alt="Image" />
                                    <h5>Python</h5>
                                </div>
                                <div className='item'>
                                    <img src={docker} alt="Image" />
                                    <h5>Docker</h5>
                                </div>
                                <div className='item'>
                                    <img src={django} alt="Image" />
                                    <h5>Django</h5>
                                </div>
                                <div className='item'>
                                    <img src={nodejs} alt="Image" />
                                    <h5>Node.js</h5>
                                </div>
                                <div className='item'>
                                    <img src={tailwindcss} alt="Image" />
                                    <h5>Tailwind CSS</h5>
                                </div>
                                <div className='item'>
                                    <img src={javascript} alt="Image" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className='item'>
                                    <img src={html} alt="Image" />
                                    <h5>HTML</h5>
                                </div>
                                <div className='item'>
                                    <img src={css} alt="Image" />
                                    <h5>CSS</h5>
                                </div>
                                <div className='item'>
                                    <img src={typescript} alt="Image" />
                                    <h5>TypeScript</h5>
                                </div>
                                <div className='item'>
                                    <img src={git} alt="Image" />
                                    <h5>Git</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} />
        </section>
    )
}

export default Skills
