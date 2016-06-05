import React from 'react';
import { Component } from 'react';
import NavBar from './../navBar';
import HomeWall from './homeWall';
import Twitters from './twitters';
import Footer from './../footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <HomeWall background='homeBackground' wall='homeStructure' />
        <Twitters />
        <Footer />
      </div>
    );
  }
}
