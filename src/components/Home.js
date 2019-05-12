import locale2 from 'locale2';
import React from 'react';
import { renderToStaticMarkup } from "react-dom/server";
import { Translate, withLocalize } from "react-localize-redux";
import Fade from 'react-reveal/Fade';
import video from '../../public/animations/intro.mp4';
import translations from "../translations/translations.json";
import LanguageToggle from './LanguageToggle';
import Stories from './Stories';

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

    gotoWelcome() {
        this.props.history.push("/welcome");
    }

    initLanguage() {
        if (this.props.languages.length == 0) {
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
            arrows: false,
            autoplay: true,
            autoplaySpeed: 6000
        };

        return (
            <div>

                <div className="container">
                    <div className="vcenter">
                        <Stories
                            stories={[
                                <Translate id="home.through_science" />,
                                <Translate id="home.more_diverse" />,
                                <Translate id="home.positive_impact" />
                            ]}
                        />
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
