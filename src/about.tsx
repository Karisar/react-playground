import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


/*
https://mdbootstrap.com/docs/react/utilities/display/
*/
function About() {


    return (
        <div>
            <div>
                responsive table with bootstrap
            </div>
            <div >
                <br />
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={2} xl={1} className="cell">always visible</Col>
                        <Col sm={12} md={6} lg={2} xl={1} className="cell">always visible</Col>
                        <Col sm={12} md={6} lg={2} xl={1} className="d-none d-md-block cell">hideable on smalls</Col>
                        <Col sm={12} md={6} lg={2} xl={1} className="d-none d-md-block cell">hideable on smalls</Col>
                        <Col sm={12} md={6} lg={2} xl={1} className="d-none d-md-block cell">hideable on smalls</Col>
                        <Col sm={12} md={6} lg={2} xl={1} className="d-none d-md-block cell">hideable on smalls</Col>
                        <Col sm={12} md={6} lg={2} xl={1} className="d-none d-md-block cell">hideable on smalls</Col>
                        <Col sm={12} md={6} lg={2} xl={1} className="d-none d-lg-block cell">hideable on largers</Col>
                        <Col sm={12} md={6} lg={2} xl={1} className="d-none d-lg-block cell">hideable on largers</Col>
                        <Col sm={12} md={6} lg={2} xl={1} className="d-none d-lg-block cell">hideable on largers</Col>
                        <Col sm={12} md={6} lg={2} xl={1} className="d-none d-lg-block cell">hideable on largers</Col>
                        <Col sm={12} md={6} lg={2} xl={1} className="d-none d-lg-block cell">hideable on largers</Col>
                    </Row>

                </Container>

            </div>
        </div>
    );
}

export default About;