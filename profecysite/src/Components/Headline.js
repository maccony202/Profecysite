import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import doc1 from './images/doc1.jpeg'
import Card from 'react-bootstrap/Card';

const Headline = () => {
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
          <p>Since Bootstrap is developed to be mobile first, 
          we use a handful of media queries to create sensible 
          breakpoints for our layouts and interfaces. These breakpoints are 
          mostly based on minimum viewport widths and allow 
          us to scale up elements as the viewport changes.</p>
          </Card>
        
         <Card className="mx-3">
         <p>Since Bootstrap is developed to be mobile first, 
          we use a handful of media queries to create sensible 
          breakpoints for our layouts and interfaces. These breakpoints are 
          mostly based on minimum viewport widths and allow 
          us to scale up elements as the viewport changes.</p>
         </Card>
         
         <Card className="mx-3">
         <p>Since Bootstrap is developed to be mobile first, 
          we use a handful of media queries to create sensible 
          breakpoints for our layouts and interfaces. These breakpoints are 
          mostly based on minimum viewport widths and allow 
          us to scale up elements as the viewport changes.</p>
         </Card>

         <Card className="mx-3">
         <p>Since Bootstrap is developed to be mobile first, 
          we use a handful of media queries to create sensible 
          breakpoints for our layouts and interfaces. These breakpoints are 
          mostly based on minimum viewport widths and allow 
          us to scale up elements as the viewport changes.</p>
         </Card>
        </div>
        </Col>

      </Container>
   
     </>
    )
}
export default Headline;