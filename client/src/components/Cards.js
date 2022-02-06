import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button, ListGroup, ListGroupItem, Col, Row, CardGroup } from 'react-bootstrap';


const Cards = () => {
    const cardInfo = [
        { image: "", title: "Italy", text: "Travel Italy's Coastline", list1: "Sorrento", list2: "Sandinia", list3: "Clinque Terre" },
        { image: "", title: "France", text: "Explore the South of France", list1: "Marseille", list2: "Cannes", list3: "Nice" },
        { image: "", title: "Greece", text: "Island Hop Around Greece", list1: "Santorini", list2: "Naxos", list3: "Ios" },
    
    ];
    const renderCard = (card, index) => {
        return (

            <Card style={{ width: '18rem' }} key={index} className="box">
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" src={card.image} />
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>
                        {card.text}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>{card.list1}</ListGroupItem>
                    <ListGroupItem>{card.list2}</ListGroupItem>
                    <ListGroupItem>{card.list3}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>

        );
    };

    return <div className="grid">
        {cardInfo.map(renderCard)}
    </div>
};


export default Cards;