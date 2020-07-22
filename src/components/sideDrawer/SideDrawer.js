import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'


import './sideDrawer.css';

const sideDrawer = props => {

    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <div onClick={props.drawerClickHandler}>
            <nav className={drawerClasses}>
                <ul>
                    <li><AnchorLink offset='80' href='#CustomerSlider' className="item">HOME</AnchorLink></li>
                    <li><AnchorLink offset='60' href='#AboutUs' className="item">ABOUT US</AnchorLink></li>
                    <li><AnchorLink offset='60' href='#Equipping' className="item">EQUIPPING</AnchorLink></li>
                    <li><AnchorLink offset='60' href='#Evangelism' className="item">EVENT SPEAKING</AnchorLink></li>
                    <li><AnchorLink offset='60' href='#TwoFourTwoMinistries' className="item">242 MINISTRIES</AnchorLink></li>
                    <li><AnchorLink offset='60' href="#Footer" className="item">CONTACT</AnchorLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default sideDrawer;