import React, { Component } from "react";
import ReactDOM from "react-dom";

// import Lottie from 'react-lottie';
// import * as logoAnimation from '../public/animations/lf20_6o3qPG.json'


class Button extends React.Component {

    constructor(props) {
      super(props);
      this.state = {isStopped: false, isPaused: true};
    }


    render() {
      const buttonStyle = {
        display: 'block',
        margin: '10px auto'
      };

      const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: logoAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      return (
        <div className="container">
          <div className="vcenter">
            <Lottie options={defaultOptions}
              height={400}
              width={400}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}
              onMouseEnter={this.onMouseEnter}/>
          </div>
        </div>
      );
    }

};

export default Button;
