import React from "react";
import "./CSS/Support.css";
import whatsapp from "../assets/whatsapp.svg";
import fb from "../assets/fb.svg";
import twitter from "../assets/twitter.svg";
import messenger from "../assets/messenger.svg";
import visa from "../assets/payment/visa.svg";
import master from "../assets/payment/MasterCard.svg";
import maestro from "../assets/payment/Maestro.svg";
import diners from "../assets/payment/DinersClub.svg";
import skrill from "../assets/payment/Skrill.svg";
import bitcoin from "../assets/payment/Bitcoin.svg";
import qiwi from "../assets/payment/qiwi.svg";
import hsbc from "../assets/payment/hsbc.svg";
import litecoin from "../assets/payment/litecoin.svg";
import logo1 from "../assets/payment/ctv.svg";
import logo2 from "../assets/payment/comodo.svg";

const Support = () => {
  return (
    <div className="support">
      <div className="Supportcontainer">
        <header>
          <div className="first">
            <a href="https://www.whatsapp.com/download//">
              <img className="supportIcon" src={whatsapp} alt="whatsap" />
            </a>
            <div className="supportTexth2">
              Live chat by WhatsApp <h3>Customer Service</h3>
            </div>
          </div>
          <div className="second">
            <a href="https://www.facebook.com/">
              <img className="supportIcon" src={fb} alt="fb" />
            </a>
            <a href="https://twitter.com/">
              <img className="supportIcon" src={twitter} alt="twitter" />
            </a>
            <a href="https://www.messenger.com/">
              <img className="supportIcon" src={messenger} alt="messenger" />
            </a>
          </div>
        </header>
        <div className="SupportContent">
          <section className="one">
            <div className="head">USEFUL LINKS</div>
            <div className="rows">
              <div className="respoRows">
                <div className="rowsA">
                  <a href="#">Home</a>
                  <a href="#">Lottery Results & Winners</a>
                  <a href="#">Lottery Promotions</a>
                  <a href="#">About Us</a>
                  <a href="#">Contact Us</a>
                </div>
                <div className="rowsB">
                  <a href="#">Terms & Conditions</a>
                  <a href="#">Security</a>
                  <a href="#">Privacy Policy</a>
                  <a href="#">Acceptable Use Policy</a>
                  <a href="#">Website Use Policy</a>
                  <a className="specific2" href="#">
                    Affiliate program
                  </a>
                </div>
              </div>

              <a className="specific" href="#">
                Affiliate program
              </a>
            </div>
          </section>
          <section className="two">
            <div className="head">SMARTWINNERS</div>
            <p>
              The trade name SmartWinners and all content on this website is a
              copyright of SmartWinners Limited. All rights reserved. We are an
              independent lottery ticket purchasing service. We are not
              affiliated with nor are we endorsed by any State sanctioned
              lottery organization. We make no claims on our site to be such.
            </p>
            <h5>
              Our registered business address is Unit 6158, PO Box 6945, London,
              W1A 6US, United Kingdom.
            </h5>
          </section>
          <section className="three">
            <div className="threeA">
              <div className="head">PAYMENT METHODS</div>
              <div className="cards">
                <a href="https://usa.visa.com/">
                  <img src={visa} alt="visa" />
                </a>
                <a href="https://www.mastercard.com/global/en.html">
                  <img src={master} alt="mastercard" />
                </a>
                <a href="https://brand.mastercard.com/brandcenter/more-about-our-brands.html/">
                  <img src={maestro} alt="maestro" />
                </a>
                <a href="https://www.dinersclub.com/">
                  <img src={diners} alt="diners" />
                </a>
                <a href="https://www.skrill.com/en/">
                  <img src={skrill} alt="skrill" />
                </a>
                <a href="https://www.bitcoin.com/">
                  <img src={bitcoin} alt="bitcoin" />
                </a>
                <a href="https://qiwi.com/">
                  <img src={qiwi} alt="qiwi" />
                </a>
                <a href="https://www.hsbc.com/">
                  <img src={hsbc} alt="hsbc" />
                </a>
                <a href="https://litecoin.com/en/">
                  <img src={litecoin} alt="litecoin" />
                </a>
              </div>
            </div>
            <div className="threeB">
              <div className="head">SECURITY & TRUST</div>
              <div className="sponsores">
                <a href="https://www.comodo.com/">
                  <img src={logo1} alt="" />
                </a>
                <a href="https://www.pcisecuritystandards.org/">
                  <img src={logo2} alt="" />
                </a>
              </div>
              <div className="threeSecond">
                <a href="https://www.facebook.com/">
                  <img className="supportIcon" src={fb} alt="fb" />
                </a>
                <a href="https://twitter.com/">
                  <img className="supportIcon" src={twitter} alt="twitter" />
                </a>
                <a href="https://www.messenger.com/">
                  <img
                    className="supportIcon"
                    src={messenger}
                    alt="messenger"
                  />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Support;
