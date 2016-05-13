import React from 'react';
import { Component, Frame } from 'react';

class VideoPlayer extends Component {
  render() {
    const videoSource = 'https://www.youtube.com/watch?v=7_P6H5tIYqs';
    return(
      <div>
        <Frame src={videoSource} />
      </div>
    );
  }
}

export default VideoPlayer;
