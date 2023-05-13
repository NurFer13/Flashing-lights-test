import React from "react"
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//create your first component
const Home = () => {
	return (
		<>
		<Navbar expand="lg" variant="dark" bg="dark">
		<Container>
		  <Navbar.Brand href="#">star wars </Navbar.Brand>
		  <button className='glowing-btn'><span className='glowing-txt'>FA<span className='faulty-letter'>VOR</span>ITES</span></button>
		</Container>
	  </Navbar>
	    <Container>
		<Row>
		  <Col sm>sm=true</Col>
		  <Col sm>sm=true</Col>
		  <Col sm>sm=true</Col>
		</Row>
	  </Container>
	  </>
		
		
	);
};

export default Home;
