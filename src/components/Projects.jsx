import React from 'react'
import ProjectCards from './ProjectCards'
import { ExternalLink } from 'react-external-link';
import { Col, Container, Tab, Row, Nav } from 'react-bootstrap'
import hom1 from "../img/hom1.jpg"
import vit2 from "../img/vit2.jpg"
import vit3 from "../img/vit3.jpg"
import inv1 from "../img/inventory1.png"
import inv2 from "../img/inventory2.png"
import inv3 from "../img/inventory3.png"

import colorSharp2 from '../assets/img/color-sharp2.png'

function Projects() {
    const project1 = [
        {
            title: "Landing Page",
            description: "Displays various background splash images on a carousel and cards with hover effects displaying details for the web application.",
            imgUrl: hom1,
        },
        {
            title: "Detail Page",
            description: "Displays workout details for the given date, while dynamically rendering a video with a third party API tailored to the saved exercise",
            imgUrl: vit2,
        },
        {
            title: "Workout Creation Page",
            description: "Utilized third party API to list exercises given the input of muscle type.  Saves workout to the database to track progress.",
            imgUrl: vit3,
        }
    ];

    const project2 = [
        {
            title: "Landing Page",
            description: "The home page displays a video running the background with cards that'll rerender the page with the appropriate react component.",
            imgUrl: inv1,
        },
        {
            title: "Detail Page",
            description: "Filters table display based on salesperson, to oversee worker productivity in company setting.",
            imgUrl: inv3,
        },
        {
            title: "Appointment Creation Page",
            description: "Form to create and save appointments to the database for ease of tracking appointment dates.",
            imgUrl: inv2,
        }
    ];

    const project3 = [
        {
            title: "Landing Page",
            description: "Displays various background splash images on a carousel and cards with hover effects displaying details for the web application.",
            imgUrl: hom1,
        },
        {
            title: "Detail Page",
            description: "Displays workout details for the given date, while dynamically rendering a video with a third party API tailored to the saved exercise",
            imgUrl: vit2,
        },
        {
            title: "Workout Creation Page",
            description: "Utilized third party API to list exercises given the input of muscle type.  Saves workout to the database to track progress.",
            imgUrl: vit3,
        }
    ];

  return (
    <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" defaultActiveKey='/home' className='nav-pills mb-5 justify-content-center align-items-center' id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Vitality Fitness</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Inventory & Sales Management</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row className='pane-row'>
                                    {project1.map((project, index) => {
                                        return (
                                            <ProjectCards
                                            key={index}
                                            title={project.title}
                                            description={project.description}
                                            imgUrl={project.imgUrl}
                                            />
                                        )
                                    })}
                                    <div>
                                        <ExternalLink href="https://tbb257.gitlab.io/vitality-fitness/"><button className='project-buttons'>Deployed Site</button></ExternalLink>
                                        <ExternalLink href="https://gitlab.com/tbb257/vitality-fitness"><button className='project-buttons'>GitLab</button></ExternalLink>
                                    </div>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row>
                                    {project2.map((project, index) => {
                                        return (
                                            <ProjectCards
                                            key={index}
                                            title={project.title}
                                            description={project.description}
                                            imgUrl={project.imgUrl}
                                            />
                                        )
                                    })}
                                    <ExternalLink href="https://gitlab.com/aaronlee97667/inventory-and-sales-management"><button className='single-project-buttons'>GitLab</button></ExternalLink>
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt="img"></img>
    </section>
  )
}

export default Projects
