import React from 'react';
import { Component } from 'react';
import YouTube from 'react-youtube';
import CN from 'classnames';

class VideoPlayer extends Component {
  render() {
    const videoSource = '7_P6H5tIYqs';
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    const classes = CN('iframeCenter');
    return(
      <div className={classes}>
        <YouTube videoId={videoSource} opts={opts}
        onReady={this._onReady} />
      </div>
    );
  }
}

export default VideoPlayer;
