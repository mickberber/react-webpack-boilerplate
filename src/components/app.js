import React from 'react';
import { Component } from 'react';
import NavBar from './navBar';
import Jumbo from './jumbo';
import Wall from './wall';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Jumbo />
        <Wall />
      </div>
    );
  }
}
