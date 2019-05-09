import React, { Component } from "react";
import ReactDOM from "react-dom";
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
              <div className="welcome"><Translate id="welcome.welcome_to" /></div>
              <p><span className="kovergenz">Konvergenz</span> <span className="studio">Studio</span></p>
              <p className="welcome-content">
                <Translate id="welcome.learn_more_about_our" /><br/>
                <Translate id="welcome.values_and_what" /><br/>
                <Translate id="welcome.drives_us" />
              </p>
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

            </div>

          </div>

          <div id="cookiesAlert" className="modal fade" role="dialog"  data-backdrop="true" data-keyboard="false">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="modalContent">
                  <div className="securityLock"><ReactSVG src={securityLock} svgStyle={{ height: 25 }} /></div><div className="lineBar"><ReactSVG src={lineBar} svgStyle={{ height: 25 }} /></div><div className="alertMessage"><p className="title"><b><Translate id="welcome.we_use_cookies" /></b></p><p className="text"><Translate id="welcome.find_out_more" /><br/> <Translate id="welcome.cookies_and_converging" /> <Link to="/privacy_policy"         onClick={()=>{$("#cookiesAlert").modal('hide');}}><Translate id="welcome.here" /></Link>.</p></div><div className="close" data-dismiss="modal"><ReactSVG src={closeButton} svgStyle={{ height: 50 }} /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-button"><Link to="/welcome"><ReactSVG src={homeButton} svgStyle={{ height: 25 }} /></Link></div>
          <div className="impressum rotate"><Link to="/impressum"><Translate id="main.imprint" /></Link></div>
          <div className="lang rotate pointer"><LanguageToggle /></div>
          <div className="bg"></div>
        </div>
      );
    }

};

export default withLocalize(Welcome);
