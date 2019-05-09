import React, { Component } from "react";
import ReactDOM from "react-dom";
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import ReactSVG from 'react-svg';
import backButton from '../../public/images/BackButton.svg';
import { withRouter } from 'react-router-dom';

class Impressum extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    document.body.style = 'background: #ffffff;';
  }

  render() {


    return (
      <div className="container pt-3">
        <div className="pt-3 pb-3">
          <a href="#" onClick={()=>{this.props.history.goBack();}}><ReactSVG src={backButton} svgStyle={{ height: 50 }} /></a>
        </div>
        <Fade>
          <h4>The following information (Impressum) is required under German law.</h4>
          <br/>
          <h4>Impressum</h4>
          <h5>Angaben gemäß § 5 TMG</h5>
          <br/>
          <p>Konvergenz Studio GmbH<br/>
          Pacellistr. 8<br/>
          80333 München</p>
          <br/>
          <p>Handelsregister: HRB 213312<br/>
          Registergericht: Amtsgericht München</p>
          <br/>
          <h5>Vertreten durch die Geschäftsführer:</h5>
          <p>Marius Bauer<br/>
          Saša Milinković</p>
          <br/>
          <h5>Kontakt:</h5>
          <p>Telefon: +49 (0) 176 456 999 75<br/>
              E-Mail: mail@konvergenz.studio</p>
          <br/>
          <h5>Umsatzsteuer-ID</h5>
          <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE296112542</p>
          <br/>
          <h5>Streitschlichtung</h5>
          <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          <br/>
          <p>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</p>
          <p>Marius Bauer<br/>
          Pacellistr. 8<br/>
          80333 München</p>
          <br/>
          <h5>Haftung für Inhalte</h5>
          <br/>
          <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
          <br/>
          <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
          <br/>
          <h5>Haftung für Links</h5>
          <br/>
          <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
          <br/>
          <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
          <br/>
          <h5>Urheberrecht</h5>
          <br/>
          <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
          <br/>
          <p>Quelle:<br/>
            e-recht24.de</p>
        </Fade>
      </div>
    );
  }

};
export default withRouter(Impressum);
