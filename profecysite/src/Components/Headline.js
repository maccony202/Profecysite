import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import doc1 from './images/doc1.jpeg'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

const Headline = () => {
  const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return(
      <>
      <Container fluid>
      <Row>
        <Row lg={3} sm={1} md={2} className="justify-content-lg-center mx-0 mt-5 w-100 p-3">
          <img className="rounded-circle mt-5" src={doc1} alt="accra"/>
           <Col className="mt-5">
             <h3 className="p-3 bg-danger">HOSPITAL PROVIDING</h3>
             <h3>TOTAL <span className="text-danger w-100">HEALTHCARE</span> SOLUTION</h3>
             <p className="text-dark">We at Medicare are always fully focused on helping your to overcame any surgeon procedure with great commitment and easy recovery.</p>
           </Col>
        </Row>
        
      </Row>
      <Col sm={12}>
        <h1 className="text-center pt-5">WHAT WE DO</h1>
        <hr className="line1"/>
        <div className="d-flex  text-primary p-3 cards">
          <Card className="mx-3">
            <strong className="text-dark text-center fs-4 p-1">Laboratory Services</strong>
            <hr/>
          <p className="p-2">Since Bootstrap is developed to be mobile first, 
          we use a handful of media queries to create sensible 
          breakpoints for our layouts and interfaces. These breakpoints are 
          mostly based on minimum viewport widths and allow 
          us to scale up elements as the viewport changes.</p>
          </Card>
        
         <Card className="mx-3">
         <strong className="text-dark text-center fs-4 p-1">UltraSound Scan Services</strong>
            <hr/>
         <p className="p-2">Since Bootstrap is developed to be mobile first, 
          we use a handful of media queries to create sensible 
          breakpoints for our layouts and interfaces. These breakpoints are 
          mostly based on minimum viewport widths and allow 
          us to scale up elements as the viewport changes.</p>
         </Card>
         
         <Card className="mx-3">
         <strong className="text-dark text-center fs-4 p-1">Physioterapy</strong>
            <hr/>
         <p className="p-2">Since Bootstrap is developed to be mobile first, 
          we use a handful of media queries to create sensible 
          breakpoints for our layouts and interfaces. These breakpoints are 
          mostly based on minimum viewport widths and allow 
          us to scale up elements as the viewport changes.</p>
         </Card>

         <Card className="mx-3">
         <strong className="text-dark text-center fs-4 p-1">Machine Treatement</strong>
            <hr/>
         <p className="p-2">Since Bootstrap is developed to be mobile first, 
          we use a handful of media queries to create sensible 
          breakpoints for our layouts and interfaces. These breakpoints are 
          mostly based on minimum viewport widths and allow 
          us to scale up elements as the viewport changes.</p>
         </Card>
        </div>
        </Col>

        <Row className="footer p-5" sm={1} md={2} lg={4}>
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