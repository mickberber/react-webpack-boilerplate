import React, { Component } from 'react';
import LogoWall from './logo/wall';
import GilsonWall from './gilson/gilsonWall';
import ChutteWall from './chutte/chutteWall';
import SocialWall from './social/socialWall';
import TinnrWall from './tinnr/tinnrWall';
import McTestingWall from './mcTesting/mcTestingWall';
import Nav from './../nav';

class Projects extends Component {
  render() {
    return(
      <div>
        <Nav />
        <GilsonWall background='gilsonBackground' wall='gilsonStructure' />
        <McTestingWall background='mcTestingBackground' wall='mcTestingStructure' />
        <TinnrWall background='tinnrBackground' wall='tinnrStructure' />
        <ChutteWall background='chutteBackground' wall='chutteStructure' />
        <SocialWall background='socialBackground' wall='socialStructure' />
        <LogoWall background='logoBackground' wall='logoStructure' />
      </div>
    )
  }
}

export default Projects;
