import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            I am an aspiring backend engineer with a strong focus on Node.js, and I plan to expand my expertise by learning Golang in the future. I have built a solid foundation in backend technologies, with hands-on experience in CRUD operations, JWT authentication, OAuth, password hashing with bcrypt, and OTP verification. I work extensively with Mongoose for database interactions and use Postman to test API endpoints across devices on the same network.

                            <br />
                            <br />

                            On the frontend, I have experience with React, effectively managing state across components and handling build outputs in the dist directory. My experience includes developing and maintaining admin panel websites that manage product databases and client-side orders, ensuring seamless order processing with OTP verification and efficient backend request handling.

                            <br />
                            <br />

                            I am proactive in enhancing my skill set and have set up essential development tools such as Nodemon for automatic server restarts and Nodemailer for email services. I have also explored Linux by installing Ubuntu within my Windows environment to broaden my technical knowledge.

                            <br />
                            <br />

                            I am passionate about backend development and continuously strive to improve my skills, aiming to become a proficient and versatile backend engineer.
                            <br />

                            <br />
                            My field of Interest's are building new &nbsp;
                            <i>
                                <b className="purple">cutting edge Web Technologies and Products </b> and
                                also in areas related to{" "}
                                <b className="purple">
                                    Artificial Intelligence.
                                </b>
                            </i>
                            <br />
                            <br />
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/InnocentBoy-007"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://x.com/InnocentBoys29"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/innocent-boys-0b35ba340/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.instagram.com/innocentboy_1234567/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillInstagram />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;
