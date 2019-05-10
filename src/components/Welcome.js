import React, { Component } from "react";
import ReactDOM from "react-dom";
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import translations from "../translations/translations.json";
import { withLocalize, Translate } from "react-localize-redux";
import LanguageToggle from './LanguageToggle';
import { renderToStaticMarkup } from "react-dom/server";
import ReactSVG from 'react-svg';
import closeButton from '../../public/images/close-button.svg';
import homeButton from '../../public/images/HomeButton.svg';
import securityLock from '../../public/images/SecurityLock.svg';
import lineBar from '../../public/images/lineBar.svg';
import CookieConsent, { Cookies } from "react-cookie-consent";

import Lottie from 'react-lottie';
import * as logoAnimation from '../../public/animations/smile-button.json';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;



class Welcome extends React.Component {

    constructor(props) {
      super(props);
      this.state = {isStopped: true, isPaused: true};


    }

    componentDidMount() {
        //$("#cookiesAlert").modal('show');

        this.initLanguage();
    }

    initLanguage(){
      if(this.props.languages.length == 0){
        this.props.initialize({
          languages: [
            { name: "English", code: "en" },
            { name: "Deutsch", code: "de" }
          ],
          translation: translations,
          options: { renderToStaticMarkup }
        });
      }
    }

    render() {

      const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: logoAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      return (
        <div>
            <div className="container">
              <div className="vcenter text-center">
                <Fade>
                  <div className="welcome"><Translate id="welcome.welcome_to" /></div>
                </Fade>
                <Fade>
                  <p><span className="kovergenz">Konvergenz</span> <span className="studio">Studio</span></p>
                </Fade>
                <Fade>
                  <p className="welcome-content">
                    <a target="_blank" href="https://medium.com/@konvergenzstudio">
                      <Translate id="welcome.learn_more_about_our" /><br/>
                      <Translate id="welcome.values_and_what" /><br/>
                      <Translate id="welcome.drives_us" />
                    </a>
                  </p>
                </Fade>
                <Fade>
                  <div className="contact-button">
                    <Lottie options={defaultOptions}
                      height={85}
                      width={85}
                      isStopped={this.state.isStopped}
                      isPaused={this.state.isPaused}
                      onMouseEnter={() => {
                        document.body.style.cursor = "pointer";
                        this.onMouseEnter;
                      }}
                      onMouseLeave={() => {
                        document.body.style.cursor = "default";
                      }}
                      eventListeners={[{
                        eventName: 'complete',
                        callback: () => { this.props.history.push("/contact"); },
                      }]}
                    />
                  </div>
                  <p className="contact-text"><Translate id="welcome.contact" /></p>
                </Fade>
              </div>

            </div>

            <CookieConsent
                location="bottom"
                buttonText={<ReactSVG src={closeButton} svgStyle={{ height: 50 }} />}
                cookieName="konvergenzStudio"
                style={{
                  backgroundColor: "rgba(1, 1, 1, 0.6)",
                  width: "380px",
                  height: "80px",
                  left: "50%",
                  zIndex: "999",
                  marginLeft: "-190px",
                  marginBottom:"20px",
                  borderRadius: "10px",
                  paddin:"0"
                }}
                buttonStyle={{ width: "40px",backgroundColor: "transparent",position:"absolute",top:"6px",right:"0",zIndex:"1000" }}
                expires={150}
            >
            <div className="row">
              <div className="securityLock"><ReactSVG src={securityLock} svgStyle={{ height: 25 }} /></div>
              <div className="lineBar"><ReactSVG src={lineBar} svgStyle={{ height: 25 }} /></div>
              <div className="alertMessage"><p className="title"><b><Translate id="welcome.we_use_cookies" /></b></p><p className="text"><Translate id="welcome.find_out_more" /><br/>
              <Translate id="welcome.cookies_and_converging" /> <Link to="/privacy_policy"><Translate id="welcome.here" /></Link>.</p></div>
            </div>
            </CookieConsent>


            <Fade>
              <div className="home-button"><Link to="/welcome"><ReactSVG src={homeButton} svgStyle={{ height: 25 }} /></Link></div>
            </Fade>
              <div className="impressum rotate"><Link to="/impressum"><Translate id="main.imprint" /></Link></div>
              <div className="lang rotate pointer"><LanguageToggle /></div>

            <div className="bg"></div>

        </div>
      );
    }

};

export default withLocalize(Welcome);
