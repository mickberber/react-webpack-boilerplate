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
      <div>
        <LogoWall class='logoBackground' wall='logoStructure' />
        <GilsonWall class='gilsonBackground' wall='gilsonStructure' />
        <ChutteWall class='chutteBackground' wall='chutteStructure' />
        <SocialWall class='socialBackground' wall='socialStructure' />
        <TinnrWall class='tinnrBackground' wall='tinnrStructure' />
        <McTestingWall class='mcTestingBackground' wall='mcTestingStructure' />
      </div>
    )
  }
}

export default Walls;
