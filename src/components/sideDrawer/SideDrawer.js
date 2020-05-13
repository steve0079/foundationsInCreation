import React from 'react';
import { Link } from 'react-router-dom'


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
                    <li><Link to='/#CustomerSlider' className="item">HOME</Link></li>
                    <li><Link to='/#Equipping' className="item">EQUIPPING</Link></li>
                    <li><Link to='/#Evangelism' className="item">EVANGELISM</Link></li>
                    <li><Link to='/#TwoFourTwoMinistries' className="item">242 MINISTRIES</Link></li>
                    <li><Link to='/#AboutUs' className="item">ABOUT US</Link></li>
                    <li><Link to="/#Footer" className="item">CONTACT</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default sideDrawer;