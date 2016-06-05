import React, { Component } from 'react';
//import NavBar from './../navBar';
import Footer from './../footer';
import HomeWall from './../home/homeWall';

export default class About extends Component {
  render() {
    return (
      <div>
        <HomeWall background='homeBackground' wall='homeStructure'/>
        <Footer />
      </div>
    );
  }
}
