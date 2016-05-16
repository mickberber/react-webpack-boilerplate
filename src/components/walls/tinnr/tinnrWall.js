import React, { Component } from 'react';
import CN from 'classnames';

class TinnrWall extends Component {
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
              <div className='right whiteText'>
                <h3>
                  <a href='https://www.github.com/HomeBrewCrewX/tinnr'>
                    Tinnr++ <img src='./src/assets/GitHub-Mark-32px.png'></img>
                  </a>
                </h3>
                <h3>A web application to help pick recipes</h3>
                <h4>With mobile swiping capability</h4>
                <h4>Via <img style={{height:'50px', width:'100px'}} src='./src/assets/hammer.png'></img></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TinnrWall;
