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
                    <li><AnchorLink href='#CustomerSlider' className="item">HOME</AnchorLink></li>
                    <li><AnchorLink href='#Equipping' className="item">EQUIPPING</AnchorLink></li>
                    <li><AnchorLink href='#Evangelism' className="item">EVANGELISM</AnchorLink></li>
                    <li><AnchorLink href='#TwoFourTwoMinistries' className="item">242 MINISTRIES</AnchorLink></li>
                    <li><AnchorLink href='#AboutUs' className="item">ABOUT US</AnchorLink></li>
                    <li><AnchorLink href="#Footer" className="item">CONTACT</AnchorLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default sideDrawer;