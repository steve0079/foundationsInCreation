import React from 'react';
import Slider from 'infinite-react-carousel';

const CustomSlider = () => {

    const settings = {
        autoplay: true,
        autoplaySpeed: 7000,
        duration: 250,
        pauseOnHover: true,
        arrows: false,
        dots: true
    }


    return (
        <div id='CustomerSlider' className="mainSlider">
            <Slider {...settings}>
                <div className="slide_1">
                    <img src="https://foundationsincreations.s3.amazonaws.com/logoLrgV3.jpg" alt="Foundations in Creation Logo" title="Foundations in Creation" />
                    <h3 className="slide_headline">Welcome to <br/>Foundations in Creation <br/>&amp; 242 Ministries Website</h3>
                    <p className="slide_text">Please take a look around and contact us to let us know how we can assist you on your journey of discovery!</p>
                </div>
                <div className="slide_2">
                    <img src="https://foundationsincreations.s3.amazonaws.com/galTor_dan-1024x600.jpg" alt="Dan with a Galapagos Tortoise" title="Dan Zambrano with a Galapagos Tortoise" />
                    <h3 className="slide_headline">Lovers of God’s Creatures<br/> and His Creation</h3>
                    <p className="slide_text">Specializing in Creation Care<br/> &amp; Stewardship – Gen 1:28-29 </p>
                </div>
                <div className="slide_3">
                    <img src="https://foundationsincreations.s3.amazonaws.com/wordLovers.jpg" alt="Gay Zambrano singing praise and worship" title="Gay Zambrano singing praise and worship" />
                    <h3 className="slide_headline">Lovers of<br/> God’s Word</h3>
                    <p className="slide_text">“Always be prepared to give an answer...<br/> for the hope that you have” – 1 Peter 3:15</p>
                </div>
            </Slider>
        </div >
    )
}

export default CustomSlider;
