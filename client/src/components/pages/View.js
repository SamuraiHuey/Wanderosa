import React from "react";
import Carousels from "../Carousel";
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_ITINERARY } from '../../utils/queries';
import { Card, Container } from 'react-bootstrap';
import { Button, ListGroup, ListGroupItem, Col, Row, CardGroup } from 'react-bootstrap';




const View = () => {
    // const { loading, data } = useQuery(QUERY_ITINERARY);
    // const itinerary = data?.itinerary || [];
    const { loading, data } = useQuery(QUERY_ME)
    const itinerary = data?.me.itinerary || [];
    // console.log(itinerary);
    console.log(itinerary);
    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <Container>
                    <Row>

                        <div>

                            {itinerary &&
                                itinerary.map(itinerary => (
                                    <div key={itinerary._id}>
                                        <Col xs={4}>
                                            <Card >
                                            
                                                <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/001/838/945/small/world-planet-earth-isolated-icon-free-vector.jpg" />
                                                <Card.Body>
                                                    <Card.Title>Date: {itinerary.day}</Card.Title>
                                                    <Card.Text>
                                                        Location: {itinerary.location}
                                                    </Card.Text>
                                                </Card.Body>
                                                <ListGroup className="list-group-flush">
                                                    <ListGroupItem>Morning Plans: {itinerary.morn}</ListGroupItem>
                                                    <ListGroupItem>Noon Plans: {itinerary.noon}</ListGroupItem>
                                                    <ListGroupItem>Evening Plans: {itinerary.eve}</ListGroupItem>
                                                </ListGroup>
                                                
                                            </Card>
                                        </Col>

                                        {/* {itinerary &&
                        itinerary.map(itinerary => (
                            <div key={itinerary._id}>
                                <p>
                                    Date: {itinerary.day}
                                    Location: {itinerary.location}
                                    Morning Plans: {itinerary.morn}
                                    Noon Plans: {itinerary.noon}
                                    Evening Plans: {itinerary.eve}
                        </p>*/}

                                    </div>
                                ))}

                        </div>

                    </Row>
                </Container>
            )
            }


            <Carousels />
        </div >
    )


};

export default View;