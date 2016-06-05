import React, { Component } from 'react';


class Twitters extends Component {
  render() {
    return (
      <div className='centerTwit'>
        <a href="https://twitter.com/steedhelix" className="twitter-timeline" data-show-count="false" data-show-screen-name="true">
        </a>
      </div>
    );
  }
}

export default Twitters;
