import React from "react";
import Container from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";
import Col  from "react-bootstrap/Col";
import { Card } from "react-bootstrap";
import { useState } from "react";
import {Link} from 'react-router-dom';

const ContactComponent = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
         <Container fluid>
            <Row>
            <Row lg={3} sm={1} md={1} className="justify-content-lg-center mx-0 mt-5 w-100 h-25 p-3">
           <Col data-aos="fade-up" className="mt-5">
             <h1 className="p-3 bg-success">Contact Us</h1>
           </Col>
        </Row>
            </Row>

                <div className="con-cards mt-3">
                <Card>
                       <div className="d-flex">
                         <div className="p-2">
                            <strong><p>Call Us</p></strong>
                            <p>0277904690 / 0592952211</p>
                         </div>
                       </div>
                    </Card>
                    <Card>
                       <div className="d-flex">
                         <div className="p-2">
                            <strong><p>Email Us</p></strong>
                            <p>nanastef10@hotmail.com</p>
                         </div>
                       </div>
                    </Card>
                    <Card>
                       <div className="d-flex">
                         <div className="p-2">
                            <strong><p>Find Us</p></strong>
                            <p>P.O.Box 283 Bantama-Ksi</p>
                         </div>
                       </div>
                    </Card>
                </div>
                <Row data-aos="fade-up" className="footer mt-5" sm={1} md={2} lg={4}>
        <div className="text-light pt-5">
            <h3>HEALTHCARE</h3>
            <p>Since Bootstrap is developed to be mobile first, 
          we use a handful of media queries to create sensible 
          breakpoints for our layouts and interfaces.</p>
          </div>
          <div className="quicklinks pt-5">
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
          <div className="social-links text-light pt-5">
            <h3>Social Media</h3>
            <ul>
              <li>Facebook</li>
              <li>Facebook</li>
              <li>Facebook</li>
              <li>Facebook</li>
            </ul>
          </div>
          <div className="findus text-light pt-5">
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

export default ContactComponent;