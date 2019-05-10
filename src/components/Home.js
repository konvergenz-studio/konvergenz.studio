import React from 'react';
import Fade from 'react-reveal/Fade';
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize, Translate } from "react-localize-redux";
import { Link } from 'react-router-dom';
import video from '../../public/animations/intro.mp4';
import LanguageToggle from './LanguageToggle';
import locale2 from 'locale2';
import translations from "../translations/translations.json";

const defaultLanguage = (locale2.split("-")[0] == "de") ? "de" : "en";

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.props.initialize({
          languages: [
            { name: "English", code: "en" },
            { name: "Deutsch", code: "de" }
          ],
          translation: translations,
          options: { renderToStaticMarkup }
        });
    }

    componentDidMount() {
       this.initLanguage();
       this.props.setActiveLanguage(defaultLanguage);
    }

    gotoWelcome(){
      this.props.history.push("/welcome");
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

        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false,
          autoplay:true,
          autoplaySpeed:6000
        };

        return (
          <div>

            <div className="container">
              <div className="vcenter">
                <div className="paragraphs">
                  <Fade delay={2000}>
                    <p className="text-center">
                      <Translate id="home.through_science" />
                    </p>
                  </Fade>
                  <Fade delay={4000}>
                    <p className="text-center">
                      <Translate id="home.more_diverse" />
                    </p>
                  </Fade>
                  <Fade delay={6000}>
                    <p className="text-center">
                      <Translate id="home.positive_impact" />
                    </p>
                  </Fade>
                </div>
              </div>
            </div>
            <Fade>
              <div className="fullscreen-bg">
                <video className="fullscreen-bg_video" onEnded={this.gotoWelcome.bind(this)} muted autoPlay playsInline>
                  <source src={video} type="video/mp4" />Your browser does not support the video tag.
                </video>
              </div>
            </Fade>
            <div className="lang rotate"><LanguageToggle /></div>
          </div>
        );
    }
}

export default withLocalize(Home);
