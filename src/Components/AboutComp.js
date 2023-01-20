import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container,Row } from "react-bootstrap";
import doc1 from './images/doc1.jpeg'

function AboutComponent() {
    return(
        <Container fluid>
            <Row>
            <Row lg={3} sm={1} md={1} className="justify-content-lg-center mx-0 mt-5 w-100 p-3">
           <Col data-aos="fade-up" className="mt-5">
             <h3 className="p-3 bg-danger">About Us</h3>
             <h3>TOTAL <span className="text-danger w-100">HEALTHCARE</span> SOLUTION</h3>
             <p className="text-dark">We at Medicare are always fully focused on helping your to overcame any surgeon procedure with great commitment and easy recovery.</p>
           </Col>
        </Row>
            </Row>
        
      <Row>
        <div className="d-flex px-sm-5 mx-md-0 flex-md-row justify-content-md-center  mt-3">
        <img className="rounded-circle col-xs-1 col-sm-2 col-md-4 awar1" src={doc1} alt="award"/>
        <p className="m-5 text-left w-25">We at Medicare are always fully focused on helping your to overcame any surgeon procedure with great commitment and easy recovery.</p>
        </div>
      </Row>

        </Container>
    )
}
export default AboutComponent;