import React from 'react';
import { Component } from 'react';
import NavBar from './navBar';
//walls === website sections for projects && about.me
import Walls from './walls/walls';
import Twitters from './twitters';
//not currently used
//import VideoPlayer from './videoPlayer';
//import Jumbo from './jumbo';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Walls />
        <Twitters />
      </div>
    );
  }
}
