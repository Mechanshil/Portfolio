import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am <span className="purple">Mechanshil </span>
                        from <span className="purple"> Manipur, India.</span>
                        <br />
                        I am currently studying Bachelor of Computer Application at National Institute of Electronics and Information Technology, Imphal.
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Playing Games
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Writing Poems
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Travelling
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Learning new skills
                        </li>
                    </ul>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
