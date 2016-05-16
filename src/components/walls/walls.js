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
        <LogoWall class='logoBackground' wall='logoStructureSmall' />
        <ChutteWall class='chutteBackground' wall='chutteStructure' />
        <LogoWall class='logoBackground' wall='logoStructureSmall' />
        <SocialWall class='socialBackground' wall='socialStructure' />
        <LogoWall class='logoBackground' wall='logoStructureSmall' />
        <TinnrWall class='tinnrBackground' wall='tinnrStructure' />
        <LogoWall class='logoBackground' wall='logoStructureSmall' />
        <McTestingWall class='mcTestingBackground' wall='mcTestingStructure' />
        <LogoWall class='logoBackground' wall='logoStructureSmall' />
      </div>
    )
  }
}

export default Walls;
