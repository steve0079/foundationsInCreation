import React, { Fragment } from 'react';


const AboutUs = () => {

    return (
        <Fragment>
            <div className="containerGold">
                <h2 className="subhead">About Us</h2>
                <img className="sectionMainImage" src="https://foundationsincreations.s3.amazonaws.com/aboutUsMain_v3.jpg" alt="About Us" title="About Us" />
                <div className="aboutUs">
                    <p><strong>Veterinarian Dr. Gay Zambrano</strong> and husband, <strong>Dan Zambrano</strong> love to speak and teach on the truth of God’s word and His creation.</p>
                    <p>Both Dan and Gay are Ordained Pastors in the Free Methodist Church. They love teaching and preaching the Word of God to people of ALL AGES. They have worked with students from 4th &amp; 5th graders, through High School, College, and beyond!</p>
                    <p>They have given talks at several Creation Science Groups as well as Youth Groups, Small Groups or Sunday morning sermons.</p>
                </div>
                <div className="bioContainer">
                    <div className="bio1">
                        <img className="bioImage1" src="https://foundationsincreations.s3.amazonaws.com/zambranoG.jpg" alt="Dr. Gay Zambrano" title="Dr. Gay Zambrano" />
                        <div className="bioText">
                            <p><strong>Dr. Gay Zambrano</strong> is a 1991 graduate of the Ohio State University School of Veterinary Medicine. She fulfilled an externship at the London Zoo.</p>
                            <p>Currently practicing full-time small animal and exotics medicine in the Long Beach / West Orange County area since 1991, she did part-time clinical and consulting positions in laboratory animal medicine for 15 years. Gay has also been an Adjunct Professor at Bethesda University, teaching Life Science and Earth Science from a young earth biblical creation perspective.</p>
                        </div>
                    </div>
                    <div className="bio2">
                        <img className="bioImage2" src="https://foundationsincreations.s3.amazonaws.com/zambranoD.jpg" alt="Dan Zambrano" title="Dan Zambrano" />
                        <div className="bioText">
                            <p>Husband <strong>Dan Zambrano</strong> has a B.S. in Marine Biology from California State University Long Beach. He is a Licensed Registered Veterinary Technician. </p>
                            <p>He has worked at Cabrillo Aquarium, the Los Angeles Harbor Department, California State Fish &amp; Game Department, and the Los Angeles Zoo before partnering in the mobile veterinary practice with his wife. Dan is a certified speaker for the IAC (International Association for Creation). He is currently working on biblical creation based guide book for local zoos in Southern California.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}

export default AboutUs;