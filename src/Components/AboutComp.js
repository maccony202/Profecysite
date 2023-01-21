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
        
        <section>
        <div>
        <h2 className="text-center text-dark fs-20 fw-500">Achievements</h2>
         <hr className="w-100"/>
        </div>
      <div>
      <div data-aos="fade-left" className="d-flex justify-content-center">
        <img className="rounded-circle awar1" src={doc1} alt="award"/>
        <p className="w-25 mx-3 my-5">We at Medicare are always fully focused on helping your to overcame any surgeon procedure with great commitment and easy recovery.</p>
        </div>
        <div data-aos="fade-right" className="d-flex justify-content-center">
        <img className="rounded-circle awar1" src={doc1} alt="award"/>
        <p className="w-25 mx-3 my-5">We at Medicare are always fully focused on helping your to overcame any surgeon procedure with great commitment and easy recovery.</p>
        </div>
        <div data-aos="fade-down" className="d-flex justify-content-center">
        <img className="rounded-circle awar1" src={doc1} alt="award"/>
        <p className="w-25 mx-3 my-5">We at Medicare are always fully focused on helping your to overcame any surgeon procedure with great commitment and easy recovery.</p>
        </div>
        <div data-aos="fade" className="d-flex justify-content-center">
        <img className="rounded-circle awar1" src={doc1} alt="award"/>
        <p className="w-25 mx-3 my-5">We at Medicare are always fully focused on helping your to overcame any surgeon procedure with great commitment and easy recovery.</p>
        </div>
      </div>
      
        
        </section>
        

        </Container>
    )
}
export default AboutComponent;