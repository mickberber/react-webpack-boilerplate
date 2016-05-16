import React from 'react';
import { Component } from 'react';
import NavBar from './navBar';
import Wall from './logo/wall';
import Twitters from './twitters';
//not currently used
//import VideoPlayer from './videoPlayer';
//import Jumbo from './jumbo';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Wall class='logoBackground' wall='logoStructure' />
        <div className='buffer'/>
        <Wall class='gilsonBackground' wall='gilsonStructure' />
        <Wall class='logoBackground' wall='logoStructureSmall' />
        <div className='buffer'/>
        <Wall class='chutteBackground' wall='chutteStructure' />
        <Wall class='logoBackground' wall='logoStructureSmall' />
        <div className='buffer'/>
        <Wall class='socialBackground' wall='socialStructure' />
        <Wall class='logoBackground' wall='logoStructureSmall' />
        <div className='buffer'/>
        <Wall class='tinnrBackground' wall='tinnrStructure' />
        <Wall class='logoBackground' wall='logoStructureSmall' />
        <div className='buffer'/>
        <Wall class='mcTestingBackground' wall='mcTestingStructure' />
        <Wall class='logoBackground' wall='logoStructureSmall' />
        <div className='buffer'/>
        <Twitters />
      </div>
    );
  }
}
