import React from 'react';
import { Component } from 'react';
import NavBar from './navBar';
import HomeWall from './homeWall';
import Twitters from './twitters';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <HomeWall background='logoBackground' wall='logoStructure' />
        <Twitters />
      </div>
    );
  }
}
