import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import '../App.css';

const Carousels = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block carousel"
                    src="https://media.istockphoto.com/photos/thai-traditional-wooden-longtail-boat-and-beautiful-sand-beach-picture-id1011241694?k=20&m=1011241694&s=612x612&w=0&h=446sIeEjnmAgRGjWenj2KVbIqGYhotwHgEPw74bruLw="
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Explore Asia</h3>
                    <p>Pictured: Thailand</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block carousel"
                    src="https://newsaf.cgtn.com/news/2020-09-26/Egypt-launches-campaign-to-promote-natural-reserves-ecotourism-U6KIJRavYs/img/fd84e5ce55b94c7fb2ce396095dd87fd/fd84e5ce55b94c7fb2ce396095dd87fd.jpeg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Explore Africa</h3>
                    <p>Pictured: Egypt</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block carousel"
                    src="https://bestlifeonline.com/wp-content/uploads/sites/3/2019/03/denali-national-park.jpg?quality=82&strip=1&resize=640%2C360"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Explore North America</h3>
                    <p>Pictured: Alaska</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
};


export default Carousels;