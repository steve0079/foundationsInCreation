import React, { Fragment } from 'react';


const AboutUs = () => {

    return (
        <Fragment>
            <div className="container">
                <h2 className="subhead">About Us</h2>
                <img className="sectionMainImage" src="https://foundationsincreations.s3.amazonaws.com/aboutUsMain.jpg" alt="About Us" title="About Us" />
                <p className="aboutUs"><strong>Veterinarian Dr. Gay Zambrano</strong> and husband, <strong>Dan Zambrano</strong> love to speak and teach on the truth of God’s word and His creation.</p>
                <p className="aboutUs">Both Dan and Gay are Ordained Pastors in the Free Methodist Church. They love teaching and preaching the Word of God to people of ALL AGES. They have worked with students from 4th &amp; 5th graders, through High School, College, and beyond!</p>
                <p className="aboutUs">They have given talks at several Creation Science Groups as well as Youth Groups, Small Groups or Sunday morning sermons. Their teachings have covered such topics as:</p>
                <p className="aboutUsIndent"><strong>“Twelve Biggest Lies”</strong> – used as sermon series for Sunday mornings</p>
                <p className="aboutUsIndent"><strong>“Unlocking the Mysteries of Genesis”</strong> – used as Earth Science and Small Group curriculum</p>
                <div className="bioContainer">
                    <div className="bio1">
                        <img className="bioImage" src="https://foundationsincreations.s3.amazonaws.com/zambranoG.jpg" alt="Dr. Gay Zambrano" title="Dr. Gay Zambrano" />
                        <div className="bioText">
                            <p>Dr. Gay Zambrano is a 1991 graduate of the Ohio State University School of Veterinary Medicine. She fulfilled an externship at the London Zoo.</p>
                            <p>Practicing full-time small animal and exotics medicine in the Long Beach/West Orange County area since 1991. Part-time clinical and consulting positions in laboratory animal medicine for 15 years. Gay has also been an adjunct professor at Bethesda University, teaching Life Science and Earth Science from a young earth biblical creation perspective.</p>
                        </div>
                    </div>
                    <div className="bio2">
                        <img className="bioImage" src="https://foundationsincreations.s3.amazonaws.com/zambranoD.jpg" alt="Dan Zambrano" title="Dan Zambrano" />
                        <div className="bioText">
                            <p>Husband Dan Zambrano has a B.S. in Marine Biology from Cal State Long Beach. He is a Licensed Registered Veterinary Technician. </p>
                            <p>He has worked at Cabrillo Aquarium, the Los Angeles Harbor Dept., California State Fish &amp; Game Dept., and the L.A. Zoo before partnering in the mobile veterinary practice with his wife.  Dan is a certified speaker for the IAC (International Association for Creation). He is currently working on biblical creation based guide book for local zoos in Southern California.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}

export default AboutUs;