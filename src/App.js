import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Row, Col, Card, Button } from "react-bootstrap";

const destinations = [
  {
    city: "Paris",
    country: "France",
    description: "The Eiffel Tower, the Louvre and long walks along the Seine.",
    price: 450,
  },
  {
    city: "Marrakech",
    country: "Morocco",
    description: "Colorful souks, beautiful riads and the Jemaa el-Fna square at night.",
    price: 380,
  },
  {
    city: "Tokyo",
    country: "Japan",
    description: "Temples, neon streets and the best sushi you will ever eat.",
    price: 1200,
  },
];

function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">TravelGo</Navbar.Brand>
            <Navbar.Toggle aria-controls="main-navbar" />
            <Navbar.Collapse id="main-navbar">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#destinations">Destinations</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="py-5">
          <h1 className="text-center mb-2">Find your next trip</h1>
          <p className="text-center text-muted mb-5">
            Here are our three favorite destinations of the month.
          </p>

          <Row id="destinations" className="g-4">
            {destinations.map((destination) => (
              <Col key={destination.city} md={4}>
                <Card className="h-100 shadow-sm">
                  <Card.Header>{destination.country}</Card.Header>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{destination.city}</Card.Title>
                    <Card.Text>{destination.description}</Card.Text>
                    <Card.Text className="fw-bold mt-auto">From ${destination.price}</Card.Text>
                    <Button variant="primary">Book now</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
