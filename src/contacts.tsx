import React from 'react';
import Card from 'react-bootstrap/Card'
import Shake from './img/shake.jpg';
import Dude from './img/dude.jpg';
import Gal from './img/woman.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';

function Contacts() {
    return (
        <div>
            <div>
                <h1>Contacts</h1>
                <br />
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
                                <Card.Img variant="top" src={Gal} height="150" width="300" />
                                <Card.Body>
                                    <Card.Title>Business lady</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional content.{' '}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={6} xl={6}>
                            <Card>
                                <Card.Img variant="top" src={Dude} height="150" width="300" />
                                <Card.Body>
                                    <Card.Title>Business man</Card.Title>
                                    <Card.Text>
                                        This card has supporting text below as a natural lead-in to additional content.{' '}
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