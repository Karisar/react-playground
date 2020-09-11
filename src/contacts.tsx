import React from 'react';
import Card from 'react-bootstrap/Card'
import Shake from './img/shake.jpg';
import Dude from './img/dude.jpg';
import Gal from './img/woman.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { faHome, faPhone, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.css';

function Contacts() {
    return (
        <div>
            <div>
                <h1>Contacts</h1>
                <p>
                    Two different Card components in a responsive table. On the small screen both cards take all the space, but when the screen is any larger than "sm",
                    we can fit two cards per row.
                </p>
                <br />
            </div>
            <div>
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={6} xl={6}>
                            <Card>
                                <Card.Img variant="top" src={Gal} height="150" width="250" />
                                <Card.Body>
                                    <Card.Title><h2>Business lady</h2></Card.Title>
                                    <Card.Text>
                                        <FontAwesomeIcon icon={faHome} /> Officestreet 12, 90088 City
                                        <br />
                                        <FontAwesomeIcon icon={faPhone} /> +358 45 000000
                                        <br />
                                        <FontAwesomeIcon icon={faEnvelopeOpen} /> business.lady@nowhe.re
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={6} xl={6}>
                            <Card>
                                <Card.Img variant="top" src={Dude} height="150" width="250" />
                                <Card.Body>
                                    <Card.Title><h2>Business man</h2></Card.Title>
                                    <Card.Text>
                                        <FontAwesomeIcon icon={faHome} /> Officestreet 12, 90088 City
                                        <br />
                                        <FontAwesomeIcon icon={faPhone} /> +358 45 000000
                                        <br />
                                        <FontAwesomeIcon icon={faEnvelopeOpen} /> business.dude@nowhe.re
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
        </div >
    );
}

export default Contacts;