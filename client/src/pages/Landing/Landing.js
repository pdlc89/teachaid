import React, { Component } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import './Landing.css';

class Landing extends Component {

  componentDidMount() {
    this.player = videojs(this.videoNode, {
        preload: 'auto',
        autoplay: true,
        loop: true,
        controls: false,
        muted: true,
        sources: [{
            src: '../bg.mp4',
            type: 'video/mp4'
        }, function onPlayerReady() {
          console.log('onPlayerReady', this)
        }]
    });
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  render() {
    return (
        <div className="site-wrapper">
          <div className="video-container" div-vjs-player>
            <video ref={node => this.videoNode = node} className="video-js"></video>
            <div className="site-wrapper-inner">
              <div className="masthead clearfix">
                <div className="inner">
                  <div className="masthead-brand">
                    <a href="/"><img src="images/ableft.png" /><br /></a>
                  </div>
                </div>
              </div>
              <div className="cover-container">
                <div className="inner cover">
                  <h1 className="cover-heading">Teachaid</h1>
                  <p className="lead">This application will provide conflict resolution for nominating students of the month.</p>
                  <p className="lead"><a href="/signup" className="btn btn-lg btn-warning">REGISTER</a></p>
                </div>
                <div className="mastfoot">
                  <div className="inner">
                    <p>Copyright © <a href="/">Teachaid</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default Landing;
