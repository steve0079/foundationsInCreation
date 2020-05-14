import React from 'react';

import CustomSlider from '../slider/newSlider'
import Equipping from '../equipping/Equipping';
import Evangelism from '../evangelism/Evangelism';
import TwoFourTwoMinistries from '../242Ministries/TwoFourTwoMinistries';
import AboutUs from '../about/AboutUs';
import Footer from '../footer/Footer'

const Home = () => {

  return (
    <div>
      <section id='CustomSlider'><CustomSlider /></section>
      <h4 className="missionStatement">
        “To educate, enlighten &amp; illuminate people
        to the truth of God’s word &amp; His creation”
      </h4>
      <section id='Equipping'><Equipping /></section>
      <section id='Evangelism'><Evangelism /></section>
      <section id='TwoFourTwoMinistries'><TwoFourTwoMinistries /></section>
      <section id='AboutUs'><AboutUs /></section>
      <section id='Footer'><Footer /></section>
    </div>
  );
}

export default Home;
