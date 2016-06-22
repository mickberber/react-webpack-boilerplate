import React from 'react';
import { Component } from 'react';
import HomeWall from './homeWall';
import Nav from './../nav';

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav textColor='black' />
        <HomeWall background='homeBackground' wall='homeStructure' />
      </div>
    );
  }
}
