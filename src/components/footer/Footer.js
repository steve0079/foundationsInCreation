import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <h2 className="subhead">Contact Us</h2>
            <div className="contactContainer">
                <div className="contact1">
                    <div className="contactText">
                        <p><strong>Dr. Gay Zambrano</strong></p>
                        <p><a href="mailto:gmzamb@aol.com">gmzamb@aol.com</a> | <a href="tel:7148636573">714-863-6573</a></p>
                    </div>
                </div>
                <div className="contact2">
                    <div className="contactText">
                        <p><strong>Dan Zambrano</strong></p>
                        <p><a href="mailto:danlz@aol.com">danlz@aol.com</a> | <a href="tel:7144489643">714-448-9643</a></p>

                    </div>
                </div>
            </div>
            <div className="contactSocial">
                <a href="https://www.facebook.com/Foundations-in-Creation-242-Ministries-111429033743578/" target="_self" rel="noopener noreferrer"><i className="fab fa-facebook fa-2x"></i></a>
                <a href="https://twitter.com/gayzambrano" target="_self" rel="noopener noreferrer"><i className="fab fa-twitter fa-2x"></i> </a>
                <a href="https://www.instagram.com/gayzambrano/" target="_self" rel="noopener noreferrer"><i className="fab fa-instagram fa-2x"></i></a>
            </div>
            <p className="copyright">©2020 FIC-242 Ministries</p>
        </div>
    )
}

export default Footer;