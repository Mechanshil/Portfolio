import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import travelwithus from "../../Assets/Projects/travelWithUs.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={travelwithus}
                            isBlog={false}
                            title="Travel With Us"
                            description="A website where all the travel enthusiasts can come together and enjoy their moments. It also provides services and guides to the travelers."
                            ghLink="https://github.com/InnocentBoy-007/travelwithus.git"
                            demoLink="https://travel-with-innocentboy.netlify.app/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={travelwithus}
                            isBlog={false}
                            title="Travel With Us"
                            description="A website where all the travel enthusiasts can come together and enjoy their moments. It also provides services and guides to the travelers."
                            ghLink="https://github.com/InnocentBoy-007/travelwithus.git"
                            demoLink="https://travel-with-innocentboy.netlify.app/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={travelwithus}
                            isBlog={false}
                            title="Travel With Us"
                            description="A website where all the travel enthusiasts can come together and enjoy their moments. It also provides services and guides to the travelers."
                            ghLink="https://github.com/InnocentBoy-007/travelwithus.git"
                            demoLink="https://travel-with-innocentboy.netlify.app/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={travelwithus}
                            isBlog={false}
                            title="Travel With Us"
                            description="A website where all the travel enthusiasts can come together and enjoy their moments. It also provides services and guides to the travelers."
                            ghLink="https://github.com/InnocentBoy-007/travelwithus.git"
                            demoLink="https://travel-with-innocentboy.netlify.app/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={travelwithus}
                            isBlog={false}
                            title="Travel With Us"
                            description="A website where all the travel enthusiasts can come together and enjoy their moments. It also provides services and guides to the travelers."
                            ghLink="https://github.com/InnocentBoy-007/travelwithus.git"
                            demoLink="https://travel-with-innocentboy.netlify.app/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={travelwithus}
                            isBlog={false}
                            title="Travel With Us"
                            description="A website where all the travel enthusiasts can come together and enjoy their moments. It also provides services and guides to the travelers."
                            ghLink="https://github.com/InnocentBoy-007/travelwithus.git"
                            demoLink="https://travel-with-innocentboy.netlify.app/"
                        />
                    </Col>


                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
