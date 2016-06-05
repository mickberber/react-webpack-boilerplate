import React, { Component } from 'react';
//import NavBar from './../navBar';
import Nav from './../nav';
import HomeWall from './../home/homeWall';

export default class About extends Component {
  render() {
    return (
      <div>
        <Nav textColor='black' />
          <img src='./../../assets/IMG_0925.JPG'/>
          Zlatan, the dog(my dog).
      </div>
    );
  }
}
