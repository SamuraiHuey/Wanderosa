import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button, ListGroup, ListGroupItem, Col, Row, CardGroup } from 'react-bootstrap';

const Cards = () => {
    return (
        <Row>
            <Col>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="https://www.tripsavvy.com/thmb/WyXHMMa6o1zwNOUHlcIlQKoXRwQ=/3435x2576/smart/filters:no_upscale()/grand-canal-in-venice--italy-584393947-5a89a0d78023b900374a486b-b2be891e5535465a819696aa318d714a.jpg" />
                    <Card.Body>
                        <Card.Title>ITALY</Card.Title>
                        <Card.Text>
                            Explore Italy's coastline
                        </Card.Text>
                        <Button variant="primary" href="#">Explore Itineraries</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="https://media.istockphoto.com/photos/villefranchesurmer-village-in-france-picture-id1248448159?b=1&k=20&m=1248448159&s=170667a&w=0&h=EUgWR88MMQfy0l5narTsrHg6JgHsFBSYb-PELcU_1S0=" />
                    <Card.Body>
                        <Card.Title>FRANCE</Card.Title>
                        <Card.Text>
                            Travel through the South of France
                        </Card.Text>
                        <Button variant="primary" href="#">Explore Itineraries</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="https://www.planetware.com/photos-large/GR/greece-island-hopping-santorini.jpg" />
                    <Card.Body>
                        <Card.Title>Greece</Card.Title>
                        <Card.Text>
                            Island hop through the islands
                        </Card.Text>
                        <Button variant="primary" href="#">Explore Itineraries</Button>
                    </Card.Body>
                </Card>
            </Col>

        </Row>

        

    );
};


export default Cards;