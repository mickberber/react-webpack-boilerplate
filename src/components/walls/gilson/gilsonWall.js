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
        <div className='container'>
          <div className='row'>
            <div className='col-md-2' />
            <div className='col-md-8'>
              <div className='center gilsonText'>
              <i className="fa fa-area-chart fa-5x"></i>Team Rubicon Mobilizer
              </div>
              <img className='center-block' src='https://www.docusign.com/blog/wp-content/uploads/2016/03/Screen-Shot-2016-03-11-at-11.11.05-AM.png'></img>
            </div>
            <div className='col-md-2' />
          </div>
        </div>
      </div>
    )
  }
}

export default GilsonWall;
