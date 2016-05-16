import React, { Component } from 'react';
import CN from 'classnames';

class McTestingWall extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const classes = CN(this.props.wall, this.props.background);;
    return (
      <div className={classes}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-2' />
            <div className='col-md-2' />
            <div className='col-md-8'>
              <div className='right'>
                <h3>
                  <a href='https://www.github.com/mickberber/mcTesting'>
                    McTesting.js <img src='./src/assets/GitHub-Mark-32px.png'></img>
                  </a>
                </h3>
                <h3>npm install mc-testing</h3>
                <h4>Simple test suite</h4>
                <h4>I wanted to make my own,</h4>
                <h4>to get a better handle on testing.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default McTestingWall;
