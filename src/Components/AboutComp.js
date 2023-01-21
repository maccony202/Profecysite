import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container,Row } from "react-bootstrap";
import doc1 from './images/doc1.jpeg'
import {Link} from 'react-router-dom';

function AboutComponent() {
  const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
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
        <Row data-aos="fade-up" className="footer p-5" sm={1} md={2} lg={4}>
        <div className="text-light">
            <h3>HEALTHCARE</h3>
            <p>Since Bootstrap is developed to be mobile first, 
          we use a handful of media queries to create sensible 
          breakpoints for our layouts and interfaces.</p>
          </div>
          <div className="quicklinks">
            <h3 className="text-light">Quick Links</h3>
            <ul>
            <li className="nav-item">
                <Link to ="/" activeClassName="active" className="nav-links" onClick={handleClick}>
                     Home
                </Link>
                </li>
                <li className="nav-item">
                <Link to ="/about" activeClassName="active" className="nav-links" onClick={handleClick}>
                        About
                </Link>
                </li>
                    <li className="nav-item">
                <Link to ="/products" activeClassName="active" className="nav-links" onClick={handleClick}>
                        Products
                </Link>
                </li>
                    <li className="nav-item">
                <Link to ="/contact" activeClassName="active" className="nav-links" onClick={handleClick}>
                        Contact
                </Link>
                </li>
            </ul>
          </div>
          <div className="social-links text-light">
            <h3>Social Media</h3>
            <ul>
              <li>Facebook</li>
              <li>Facebook</li>
              <li>Facebook</li>
              <li>Facebook</li>
            </ul>
          </div>
          <div className="findus text-light">
            <h3>Find Us</h3>
            <ul>
              <li>Accra</li>
              <li>Kumasi </li>
              <li>Takoradi</li>
            </ul>

          </div>
        </Row>
        <div className="text-center">
          @Copyright All rights reserved, HEALTHCARE
        </div>
        

        </Container>
    )
}
export default AboutComponent;