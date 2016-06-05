import React from 'react';
import { Component } from 'react';
import NavBar from './navBar';
//walls === website sections for projects && about.me
import Walls from './walls/walls';
import Twitters from './twitters';


export default class Projects extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Walls />
      </div>
    );
  }
}
