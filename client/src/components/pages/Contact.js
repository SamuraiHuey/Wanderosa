import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ContactForm from '../pages/ContactForm';
import { FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";
//import '../../App.css';
import Plane from '../../assets/images/plane.jpg';

function Contact() {
    return (
        <div className='container'>
            <div className='card-body'>
                <div className="row ">
                    <img className='contactHero' src={Plane} />
                </div>
            </div>
            <Container fluid className="shadow bg-light mb-5">
                <Container className="p-4">
                    <Row>
                        <Col>
                            <Container>
                                <h4>Contact Info</h4>
                                <p>
                                    <a href="mailto:info@wanderosa.com">
                                        <span className="pr-3">
                                            <FaEnvelope />
                                        </span>
                                        info@wanderosa.com
                                    </a>
                                </p>

                                <p>
                                    <a href="https://www.facebook.com" target='_blank'>
                                        <span className="pr-3">
                                            <FaFacebook />
                                        </span>
                                        Wanderosa
                                    </a>
                                </p>
                                <p>
                                    <a href="https://www.linkedin.com" target='_blank'>
                                        <span className="pr-3">
                                            <FaLinkedin />
                                        </span>
                                        Wanderosa
                                    </a>
                                </p>
                            </Container>
                        </Col>

                        <Col sm={12} md={6} lg={8} className="pt-sm-4 pt-lg-0">
                            <Container>
                                <h4 style={{ color: "#6667AB" }}>Need Help? Send Us a Message!</h4>
                                <ContactForm />
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Contact;