import React, { Component } from "react";
import ReactDOM from "react-dom";
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';
import closeButton from '../../public/images/close-button.svg';
import securityLock from '../../public/images/SecurityLock.svg';
import LanguageToggle from './LanguageToggle';
import { withLocalize, Translate, getTranslate } from "react-localize-redux";
import Lottie from 'react-lottie';
import * as logoAnimation from '../../public/animations/smile-button.json';
import homeButton from '../../public/images/HomeButton.svg';
import translations from "../translations/translations.json";
import { renderToStaticMarkup } from "react-dom/server";
import * as emailjs from 'emailjs-com';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import Textarea from 'react-validation/build/textarea';
import validator from 'validator';

const required = (value) => {
  if (!value.toString().trim().length) {
    return <span className="validation-alert">Field is required</span>
  }
};

const email = (value) => {
  if (!validator.isEmail(value)) {
    return <span className="validation-alert">{value} is not a valid email.</span>
  }
};

class Contact extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        boxShow:true,
        confirmationBox:false,
        thankYouBox: false,
        email: '',
        message: '',
        isChecked:false
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleSend = this.handleSend.bind(this);
      this.handleChecked = this.handleChecked.bind(this);
    }

    componentDidMount() {
        $("#cookiesAlert").modal('hide');
        // document.body.style = 'background: #272d33;';
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

    handleSubmit(e){
      e.preventDefault();
      this.setState({ boxShow: false, confirmationBox:true });
    }

    handleChange(e) {
        const { name, value } = e.target;
        console.log(name,value);
        this.setState({ [name]: value });
    }

    handleChecked () {
        this.setState({isChecked: !this.state.isChecked});
    }

    handleSend(e){

      // console.log({
      //   email:this.state.email,
      //   message:this.state.message
      // });

      const params = {
      	name: this.state.email,
      	reply_to: this.state.email,
      	message_html: this.state.message
      }

      emailjs.send('gmail','template_pCtBZwP4', {
      	name: this.state.email,
      	reply_to: this.state.email,
      	message: this.state.message
      },'user_ZNkVB2wox1Sk38Q6uZ235').then((response) => {
        this.setState({ confirmationBox: false, thankYouBox: true })
        //console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        //console.log('FAILED...', err);
      });

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

      const InputEmail = () => (
        <Translate>
          {({ translate }) => { <input className="input" id="email" type="text" name="email" value={this.email} onChange={this.handleChange} placeholder={translate("contact.your_email")} required/> }}
        </Translate>
      );

      const InputMessage = () => (
        <Translate>
          {({ translate }) => <textarea className="input" id="message" name="message" defaultValue={this.message} onChange={this.handleChange} placeholder={translate("contact.compose_message")} required></textarea>}
        </Translate>
      );

      return (

        <div>
          <div className="bg"></div>
          <div className="container">
            <div className="vcenter">

              {
                this.state.boxShow &&
                <Fade>
                  <div className="contactBox">
                    <Form className="validate-form">
                      <div className="close container-contact-form-btn-close" onClick={()=>{this.props.history.push("/welcome");}}><ReactSVG src={closeButton} svgStyle={{ height: 50 }} /></div>
                      <div className="wrap-input validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                        <Input className="input" id="email" type="text" name="email" value={this.email} onChange={this.handleChange} placeholder="Your E-Mail" validations={[required, email]} />
                        <span className="focus-input"></span>
                      </div>
                      <div className="line"></div>
                      <div className="wrap-input-textarea validate-input" data-validate="Message is required">
                        <Textarea className="input" id="message" name="message" onChange={this.handleChange} placeholder="Compose message..." value={this.message} validations={[required]} />
                        <span className="focus-input"></span>
                      </div>
                      <div className="container-contact-form-btn">
                        <div className="row">
                          <div className="col-sm container-contact-form-securityLock">
                            <ReactSVG src={securityLock} svgStyle={{ height: 25 }} />
                          </div>
                          <div className="col-sm container-contact-form-info">
                            <Translate id="contact.your_data" /><br/>
                            <Translate id="contact.with_us" />
                          </div>
                          <div className="col-sm text-right">
                            <Button className="contact-form-btn-next " onClick={this.handleSubmit} ><Translate id="contact.next" /></Button>
                          </div>
                       </div>

                      </div>
                    </Form>
                  </div>
                </Fade>
              }
              {
                this.state.confirmationBox &&
                <Fade>

                    <div className="contactBox">
                      <div className="confirmation">
                        <div className="close container-contact-form-btn-close" onClick={ () => {this.props.history.push("/welcome");}}><ReactSVG src={closeButton} svgStyle={{ height: 50 }} /></div>
                        <div className="title"><Translate id="contact.all_safe" />?</div>
                          <p className="small"><Translate id="contact.privacy_important" /></p>
                          <p className="smaller"><a href="#"><Translate id="contact.find_out_more" /></a> <Translate id="contact.about_privacy" /></p>
                          <div className="wrapper">
                            <div className="round">
                              <input
                                type="checkbox"
                                id="checkbox"
                                onChange={this.handleChecked}
                                defaultChecked={this.state.checked}
                              />
                              <label htmlFor="checkbox"></label>
                              <span className="checkboxLabel"><Translate id="contact.i_accept" /></span>
                            </div>
                            <div className="sslIcon"><ReactSVG src={securityLock} svgStyle={{ height: 25 }} /></div><span className="ssl"><Translate id="contact.connection_secure" /></span>
                          </div>
                          <div className="container-contact-form-btn">
                            {this.state.isChecked &&
                            <button className="contact-form-btn-send" onClick={this.handleSend}><Translate id="contact.send" /></button>
                            }
                          </div>
                      </div>
                    </div>

                </Fade>

              }

              {
                this.state.thankYouBox &&
                <Fade>
                  <div className="contactBox">
                    <div className="confirmation">
                      <div className="close container-contact-form-btn-close" onClick={() => {this.props.history.push("/welcome");}}><ReactSVG src={closeButton} svgStyle={{ height: 50 }} /></div>
                      <div className="title"><Translate id="contact.thank_you" />!</div>
                        <p><Translate id="contact.we_enjoy" /></p>
                        <div className="container-contact-form-btn text-center pt-5">
                          <Lottie options={defaultOptions}
                            height={50}
                            width={50}
                            eventListeners={[{
                              eventName: 'complete',
                              callback: () => { },
                            }]}
                          />
                          <br/>
                          <p><Translate id="contact.done" /></p>
                        </div>
                    </div>
                  </div>
                </Fade>
              }
              {
                !this.state.boxShowConfirmation && <p className="copyright">Konvergenz Studio GmbH, Pacellistr. 8, 80333 Munich<br/> mail@konvergenz.studio</p>
              }

            </div>
          </div>
          <div className="impressum rotate"><Link to="/impressum"><Translate id="main.imprint" /></Link></div>
          <div className="lang rotate"><LanguageToggle /></div>
          <div className="home-button text-center"><Link to="/welcome"><ReactSVG src={homeButton} svgStyle={{ height: 25 }} /></Link></div>
        </div>

      );
    }

};

export default withLocalize(Contact);
