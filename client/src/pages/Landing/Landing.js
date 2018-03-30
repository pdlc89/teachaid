import React, { Component } from 'react';
import Background from './homebg.jpg';
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
          <div className="video-background-container" div-vjs-player>
            <video ref={node => this.videoNode = node} className="video-js"></video>
            <div className="overlay"/>
            <div className="site-wrapper-inner">
              <div className="masthead clearfix">
                <div className="inner">
                  <h3 className="masthead-brand"><a href="#home"><img src="images/ableft.png"/><br /></a></h3>
                  <nav>
                    <form id="signin" className="navbar-form navbar-right" role="form">
                      <div className="input-group">
                        <input id="email" type="email" className="form-control" name="email" defaultValue placeholder="Email Address" />                                        
                      </div>
                      <div className="input-group">
                        <input id="password" type="password" className="form-control" name="password" defaultValue placeholder="Password" />                                        
                      </div>
                      <button type="submit" className="btn btn-warning">Login</button>
                    </form>
                  </nav>
                </div>
              </div>
              <div className="cover-container">
                <div className="inner cover">
                  <h1 className="cover-heading">Teachaid</h1>
                  <p className="lead">This application will provide conflict resolution for nominating students of the month.</p>
                  <p className="lead"><a href="login.html" className="btn btn-lg btn-warning">REGISTER</a></p>
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
