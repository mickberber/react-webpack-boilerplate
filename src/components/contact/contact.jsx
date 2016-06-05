import React, { Component } from 'react';
//import NavBar from './../navBar';
import Nav from './../nav';

export default class Contact extends Component {
  render() {
    return (
      <div>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-xs-4'></div>
              <div className='col-xs-4'>
                <div className='center tempDropTop'>
                  <a href="mailto:mickberber@icloud.com">
                  mickberber@icloud.com
                  </a>
                </div>
              </div>
              <div className='col-xs-4'></div>
            </div>
          </div>
        <Nav textColor='black' />
      </div>
    );
  }
}
