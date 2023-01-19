import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import doc1 from './images/doc1.jpeg'
// import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import WhatWeDo from "./WhatWedo";
import Aos from "aos";
import 'aos/dist/aos.css';

const Headline = () => {
  const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    useEffect(() => {
      Aos.init({duration: 3000})
    },[]);
    return(
      <>
      <Container fluid>
      <Row>
        <Row lg={3} sm={1} md={2} className="justify-content-lg-center mx-0 mt-5 w-100 p-3">
          <img className="rounded-circle mt-5" src={doc1} alt="accra"/>
           <Col data-aos="fade-up" className="mt-5">
             <h3 className="p-3 bg-danger">HOSPITAL PROVIDING</h3>
             <h3>TOTAL <span className="text-danger w-100">HEALTHCARE</span> SOLUTION</h3>
             <p className="text-dark">We at Medicare are always fully focused on helping your to overcame any surgeon procedure with great commitment and easy recovery.</p>
           </Col>
        </Row>
        
      </Row>
      <Col sm={12}>
        <h1 className="text-center pt-5">WHAT WE DO</h1>
        <hr className="line1"/>
        <div data-aos="fade-right" className="d-flex  text-primary p-3 cards">
          <WhatWeDo
            title = "Laboratory Services"
            details = "We run all kinds of lab test at our hospital including sickling" 
          />
          <WhatWeDo
            title = "UltraSound Scan Services"
            details = "We run scan for pregnant women and people with abdominal pain and prostate problems" 
          />
          <WhatWeDo
            title = "Physioterapy"
            details = "We offer high value teraputic programmes for our client" 
          />
          <WhatWeDo
            title = "Machine Treatement"
            details = "We run all kinds of lab test at our hospital including sickling" 
          />
        </div>
        </Col>

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
   
     </>
    )
}
export default Headline;