import React, { Component } from 'react';
import Wall from './wall';

class Backgrounds extends Component {
  render() {
    const wallClasses = ['wallBackground', 'wallBackground2'];
    const walls = wallClasses.map((wallClass) => {
      return (
        <Wall wallClass={wallClass} />
      )
    })
    console.log(walls)
    return (
      <div>
        {walls}
      </div>
    )
  }
}

export default Backgrounds;
