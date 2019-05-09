import React from "react";
import { withLocalize } from "react-localize-redux";


import { renderToStaticMarkup } from "react-dom/server";


class LanguageToggle extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      languages: props.languages,
      activeLanguage: props.activeLanguage,
      setActiveLanguage: props.setActiveLanguage,
      active:props.activeLanguage
    }
  }



  componentDidMount() {



  }

  render(){
    return (
      (this.state.active!="de") ? <a href="#" className="pointer" onClick={() => { this.state.setActiveLanguage('de'); this.state.active = "de";} }>DE</a> : <a href="#" className="pointer" onClick={() => { this.state.setActiveLanguage('en'); this.state.active = "en";} }>EN</a>
    );
  }
}

export default withLocalize(LanguageToggle);
