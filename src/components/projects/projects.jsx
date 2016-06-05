import React, { Component } from 'react';
import NavBar from './../navBar';
import LogoWall from './logo/wall';
import GilsonWall from './gilson/gilsonWall';
import ChutteWall from './chutte/chutteWall';
import SocialWall from './social/socialWall';
import TinnrWall from './tinnr/tinnrWall';
import McTestingWall from './mcTesting/mcTestingWall';
import ProjectFooter from './footer';

class Projects extends Component {
  render() {
    return(
      <div>
        <GilsonWall background='gilsonBackground' wall='gilsonStructure' />
        <McTestingWall background='mcTestingBackground' wall='mcTestingStructure' />
        <TinnrWall background='tinnrBackground' wall='tinnrStructure' />
        <ChutteWall background='chutteBackground' wall='chutteStructure' />
        <SocialWall background='socialBackground' wall='socialStructure' />
        <LogoWall background='logoBackground' wall='logoStructure' />
        <ProjectFooter />
      </div>
    )
  }
}

export default Projects;
