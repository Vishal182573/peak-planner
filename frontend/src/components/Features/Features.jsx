import React from "react";
import "../Features/features.css";

// import feature1 from "../../assets/images/feature/beach-umbrella.png";
// import feature2 from "../../assets/images/feature/deal.png";
// import feature3 from "../../assets/images/feature/location.png";
// import feature4 from "../../assets/images/feature/medal.png";

import feature1 from "../../assets/images/beach-umbrella.png";
import feature2 from "../../assets/images/deal.png";
import feature3 from "../../assets/images/location.png";
import feature4 from "../../assets/images/medal (1).png";

import { Card, Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Features = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay:false,
    autoplaySpeed:1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          prevArrow:false,
          nextArrow:false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow:false,
          nextArrow:false,
        },
      },
    ],
  };

  const featureList = [
    {
      id: 0,
      image: feature1,
      title: "Discover New Trails",
      des: "Explore hundreds of trekking routes across India, from the Himalayas to the Western Ghats.",
    },
    {
      id: 1,
      image: feature2,
      title: "Unbeatable Trekking Deals",
      des: "Find top-rated treks at the best prices, designed to fit your budget and adventure level.",
    },
    {
      id: 2,
      image: feature3,
      title: "Plan Your Trek Effortlessly",
      des: "Book last-minute treks, get real-time updates, and enjoy hassle-free cancellations.",
    },
    {
      id: 3,
      image: feature4,
      title: "Trek with Confidence",
      des: "Read trusted reviews, get expert advice, and enjoy reliable support on every trek.",
    },
  ];    

  return (
    <>
    
      <section className="feature-section">
        <Container>
          <Row>
            <Col md="12">
              <Slider {...settings}>
                {featureList.map((feature, inx) => {
                  return (
                    <Card key={inx}>
                      <Card.Img
                        variant="top"
                        src={feature.image}
                        className="img-fluid"
                        alt={feature.title}
                      />
                      <Card.Title>{feature.title}</Card.Title>
                      <Card.Text>{feature.des}</Card.Text>
                    </Card>
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Features;