import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import accra from './images/accra.jpeg'




const Headline = () => {
    return(
      <>
      <Container fluid>
      <Row>
        <Row lg={3} sm={1} md={2} className="justify-content-lg-center">
          <img src={accra} alt="sema"/>
        <p>Since Bootstrap is developed to be mobile first, 
          we use a handful of media queries to create sensible 
          breakpoints for our layouts and interfaces. These breakpoints are 
          mostly based on minimum viewport widths and allow 
          us to scale up elements as the viewport changes.</p>
          
        </Row>
        <Col className="justify-content-sm-center">
        <p>Since Bootstrap is developed to be mobile first, 
          we use a handful of media queries to create sensible 
          breakpoints for our layouts and interfaces. These breakpoints are 
          mostly based on minimum viewport widths and allow 
          us to scale up elements as the viewport changes.</p>

          <p>Since Bootstrap is developed to be mobile first, 
          we use a handful of media queries to create sensible 
          breakpoints for our layouts and interfaces. These breakpoints are 
          mostly based on minimum viewport widths and allow 
          us to scale up elements as the viewport changes.</p>
        </Col>
      </Row>

      </Container>
   
     </>
    )
}
export default Headline;