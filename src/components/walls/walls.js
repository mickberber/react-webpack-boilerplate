import React, { Component } from 'react';
import LogoWall from './logo/wall';
import GilsonWall from './gilson/gilsonWall';
import ChutteWall from './chutte/chutteWall';
import SocialWall from './social/socialWall';
import TinnrWall from './tinnr/tinnrWall';
import McTestingWall from './mcTesting/mcTestingWall';

class Walls extends Component {
  render() {
    return(
      <div className='container'>
        <LogoWall background='logoBackground' wall='logoStructure' />
        <GilsonWall background='gilsonBackground' wall='gilsonStructure' />
        <McTestingWall background='mcTestingBackground' wall='mcTestingStructure' />
        <TinnrWall background='tinnrBackground' wall='tinnrStructure' />
        <ChutteWall background='chutteBackground' wall='chutteStructure' />
        <SocialWall background='socialBackground' wall='socialStructure' />
      </div>
    )
  }
}

export default Walls;
