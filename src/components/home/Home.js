import React from 'react';

import CustomSlider from '../slider/newSlider'
import Equipping from '../equipping/Equipping';

const Home = () => {

  return (
    <div>
      <CustomSlider />
      <h4 className="missionStatement">
        “To educate,  enlighten &amp; illuminate people
        to the truth of God’s word &amp; His creation”
      </h4>
      <Equipping />
    </div>
  );
}

export default Home;
