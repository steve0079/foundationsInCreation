import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import DrawerToggleButton from '../sideDrawer/DrawerToggleButton'

const Navbar = props => (



    <header className='toolbar'>
        <nav className='toolbar_navigation'>
        <div className='toolbar_toggle-button'>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo">
                <div className="logoImage" />
                <p className="logoType">Foundations in Creation</p>
            </div>
            <div className="spacer"></div>
            <div className='toolbar_navigation_items'>
                <div className="social">
                    <a href="https://www.facebook.com/Foundations-in-Creation-242-Ministries-111429033743578/" target="_self" rel="noopener noreferrer"><i className="fab fa-facebook fa-2x"></i></a>
                    <a href="https://twitter.com/gayzambrano" target="_self" rel="noopener noreferrer"><i className="fab fa-twitter fa-2x"></i> </a>
                    <a href="https://www.instagram.com/gayzambrano/" target="_self" rel="noopener noreferrer"><i className="fab fa-instagram fa-2x"></i></a>
                </div>
                <div className="navItems">
                    <AnchorLink  offset='100' href='#CustomerSlider' className="item">HOME</AnchorLink>
                    <AnchorLink  offset='80' href='#Equipping' className="item">EQUIPPING</AnchorLink>
                    <AnchorLink  offset='80' href='#Evangelism' className="item">EVANGELISM</AnchorLink>
                    <AnchorLink  offset='80' href='#TwoFourTwoMinistries' className="item">242 MINISTRIES</AnchorLink>
                    <AnchorLink  offset='80' href='#AboutUs' className="item">ABOUT US</AnchorLink>
                    <AnchorLink  offset='80' href="#Footer" className="item">CONTACT</AnchorLink>
                </div>
            </div>
        </nav>
    </header>
);

export default Navbar;