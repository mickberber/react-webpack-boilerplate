import React, { Component } from 'react';
import CN from 'classnames';

class GilsonWall extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    const classesWall = CN(this.props.wall, this.props.background);;
    return (
      <div className={classesWall}>
          <div className='row'>
            <div className='col-xs-3 col-md-2' />
            <div className='col-xs-12 col-md-8'>
              <div className='dropTopSm'>
                <div className='center gilsonText'>
                  <a style={{color:'white'}} href='https://gilson.herokuapp.com/'><i className="fa fa-area-chart fa-5x"></i>Team Rubicon Mobilizer</a>
                </div>
                <a href='https://www.docusign.com/blog/docusign-and-team-rubicon-join-forces-to-streamline-disaster-relief-efforts-in-hack-for-good/'>
                  <img className='center-block' style={{height: '275px'}} src='https://www.docusign.com/blog/wp-content/uploads/2016/03/Screen-Shot-2016-03-11-at-11.11.05-AM.png'></img>
                </a>
                <div className='center gilsonText'>Grand Prize winning Team Gilsons!
                  <a href='https://github.com/mickberber'><h5>Myself  <img src='./src/assets/github-32.png' /></h5></a>
                  <a href='https://github.com/seanagibson'><h5>Sean Gibson  <img src='./src/assets/github-32.png' /></h5></a>
                  <a href='https://github.com/malekascha'><h5>Malek Ascha  <img src='./src/assets/github-32.png' /></h5></a>
                  <a href='https://github.com/elliotschi'><h5>Elliot Chi  <img src='./src/assets/github-32.png' /></h5></a>
                  <a href='https://github.com/bgoodfliesh'><h5>Brandon Goodfliesh  <img src='./src/assets/github-32.png' /></h5></a>
                </div>
              </div>
            </div>
            <div className='col-xs-3 col-md-2' />
          </div>
      </div>
    )
  }
}

export default GilsonWall;
