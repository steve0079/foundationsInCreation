import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const ControlledCarousel = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    const settings = {
        controls: false,
        fade: true,
        fadeSpeed: 1000,
        interval: 3500,
        keyboard: true,
        pause: "hover",
        touch: true,
    }

    return (
        <div id='CustomerSlider' className="mainSlider">
            <Carousel {...settings} activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://foundationsincreations.s3.amazonaws.com/logoLrgV3.jpg" alt="Foundations in Creation Logo" title="Foundations in Creation" />
                    <Carousel.Caption>
                        <h3  className="slide1_headline">First Image Headline Goes Here</h3>
                        <p className="slide1_text">This will be the description text that will go one or two lines.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://foundationsincreations.s3.amazonaws.com/galTor_dan-1024x600.jpg" alt="Dan with a Galapagos Tortoise" title="Dan Zambrano with a Galapagos Tortoise" />
                    <Carousel.Caption>
                        <h3  className="slide2_headline">Second Image Headline Goes Here</h3>
                        <p className="slide2_text">This will be the description text that will go one or two lines.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://foundationsincreations.s3.amazonaws.com/gaySingV2.jpg" alt="Gay Zambrano singing praise and worship" title="Gay Zambrano singing praise and worship" />
                    <Carousel.Caption>
                        <h3  className="slide3_headline">Third Image Headline Goes Here</h3>
                        <p className="slide3_text">This will be the description text that will go one or two lines.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ControlledCarousel;
