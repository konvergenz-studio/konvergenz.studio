import React, { Component } from "react";
import ReactDOM from "react-dom";
import Fade from 'react-reveal/Fade';


import Lottie from 'react-lottie';
import * as logoAnimation from '../../public/animations/intro-logo-white.json'

class Intro extends React.Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
      document.body.style = 'background: #272d33;';
    }

    render() {

      const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: logoAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      return (
        <div className="container">
          <div className="vcenter">
            <Fade>
              <Lottie options={defaultOptions}
                height={200}
                width={200}
                eventListeners={[{
                  eventName: 'complete',
                  callback: () => { this.props.history.push("/home"); },
                }]}
              />
            </Fade>
          </div>
        </div>
      );
    }

};

export default Intro;
