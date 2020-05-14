import React from 'react';
import Slider from 'infinite-react-carousel'

const CustomSlider = () => {

    const settings = {
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false,
        dots: false,
    }

    return(
        <div id='CustomerSlider' className="mainSlider">
        <Slider {...settings}>
            <div className="slide_1">
                <img src="https://foundationsincreations.s3.amazonaws.com/logoLrgV3.jpg" alt="Foundations in Creation Logo" title="Foundations in Creation"/>
                <h3 className="slide_headline">First Image Headline Goes Here</h3>
                <p className="slide_text">This will be the description text that will go one or two lines.</p>
            </div>
            <div className="slide_2">
                <img src="https://foundationsincreations.s3.amazonaws.com/galTor_dan-1024x600.jpg" alt="Dan with a Galapagos Tortoise" title="Dan Zambrano with a Galapagos Tortoise"/>
                <h3 className="slide_headline">Second Image Headline Goes Here</h3>
                <p className="slide_text">This will be the description text that will go one or two lines.</p>
            </div>
            <div className="slide_3">
                <img src="https://foundationsincreations.s3.amazonaws.com/gaySingV2.jpg" alt="Gay Zambrano singing praise and worship" title="Gay Zambrano singing praise and worship"/>
                <h3 className="slide_headline">Third Image Headline Goes Here</h3>
                <p className="slide_text">This will be the description text that will go one or two lines.</p>
            </div>
        </Slider>
        </div >)
}

export default CustomSlider;
