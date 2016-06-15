import React, { Component } from 'react';
import CN from 'classnames';

class TinnrWall extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const classesWall = CN(this.props.wall, this.props.background);
    return (
      <div className={classesWall}>
          <div className='row'>
            <div className='col-xs-3 col-md-2' />
            <div className='col-xs-3 col-md-2' />
            <div className='col-xs-12 col-md-8'>
              <div className='right' style={{marginTop: '65px', color: 'grey'}}>
                <h3>
                  <a href='http://www.tinnrplusplus.herokuapp.com'>
                    Tinnr <i className="fa fa-plus-circle" aria-hidden="true"></i>
                  </a>
                </h3>
                <h3>A web application to help pick recipes</h3>
                <h4>With mobile swiping capability</h4>
                <h4>Via <img style={{height:'50px', width:'100px'}} src='./src/assets/hammer.png'></img></h4>
                <div className='right'>MiddleOutHomeBrewCrew
                  <a href='https://github.com/mickberber'><h5>Myself  <img src='./src/assets/GitHub-Mark-32px.png'></img></h5></a>
                  <a href='https://github.com/ycube'><h5>Yale Yuen  <img src='./src/assets/GitHub-Mark-32px.png'></img></h5></a>
                  <a href='https://github.com/abibbs'><h5>Anthony Bibbs  <img src='./src/assets/GitHub-Mark-32px.png'></img></h5></a>
                  <a href='https://github.com/spiterman'><h5>Sergey Piterman  <img src='./src/assets/GitHub-Mark-32px.png'></img></h5></a>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default TinnrWall;
