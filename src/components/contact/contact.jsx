import React, { Component } from 'react';
//import NavBar from './../navBar';
import Footer from './../footer';

export default class Contact extends Component {
  render() {
    return (
      <div>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-xs-4'></div>
              <div className='col-xs-4'><div className='center tempDropTop'>mickberber@icloud.com</div></div>
              <div className='col-xs-4'></div>
            </div>
          </div>
        <Footer />
      </div>
    );
  }
}
