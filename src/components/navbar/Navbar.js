import React from 'react'
import { Link } from 'react-router-dom'
import DrawerToggleButton from '../sideDrawer/DrawerToggleButton'
import './navbar.css'

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
                    <Link to='/' className="item">HOME</Link>
                    <Link to='/equipping' className="item">EQUIPPING</Link>
                    <Link to='/evangelism' className="item">EVANGELISM</Link>
                    <Link to='/242_ministries' className="item">242 MINISTRIES</Link>
                    <Link to='/about' className="item">ABOUT</Link>
                    <Link to="/contact" className="item">CONTACT</Link>
                </div>
            </div>
        </nav>
    </header>
);

export default Navbar;