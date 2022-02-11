import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button, ListGroup, ListGroupItem, Col, Row, CardGroup } from 'react-bootstrap';

const Steps = () => {
    return (
        <Row>
            <Col>
                <Card style={{ width: '12rem', height: '21rem' }}>
                    <Card.Img style={{ width: '12rem' }} variant="top" src="https://cdn1.iconfinder.com/data/icons/ui-5/502/calendar-512.png" />
                    <Card.Body>
                        <Card.Title>Pick a Date</Card.Title>
                        <Card.Text>
                            Pick the date of travel 
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '12rem', height: '21rem' }}>
                    <Card.Img style={{ width: '12rem' }} variant="top" src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-and-lines-1/2/52-512.png" />
                    <Card.Body>
                        <Card.Title>Pick a Destination</Card.Title>
                        <Card.Text>
                            Type in the destination whether it be a city or a country
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '12rem', height: '21rem' }}>
                    <Card.Img style={{ width: '12rem' }} variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Circle-icons-pencil_2.svg/2048px-Circle-icons-pencil_2.svg.png" />
                    <Card.Body>
                        <Card.Title>Fill out your Itinerary</Card.Title>
                        <Card.Text>
                            For morning, afternoon and evening, Create activities, etc.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card style={{ width: '12rem', height: '21rem' }}>
                    <Card.Img style={{ width: '12rem' }} variant="top" src="https://icons.iconarchive.com/icons/martz90/circle-addon2/512/plane-flight-icon.png" />
                    <Card.Body>
                        <Card.Title>Travel</Card.Title>
                        <Card.Text>
                            Last step - head to your destination and begin exploring!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </Row>

        

    );
};


export default Steps;