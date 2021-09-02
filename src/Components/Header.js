import React from "react";
import banner from "../images/banner.jpg";
import dowload from "../images/en_badge_web_generic.png";


const Header = () => {
  return (
    <div>
      <div className="topBar">
        <div className='maxwidth'>
          <a className="first" href="./">
            WiMouse
          </a>
          <a href="./#FAQs">FAQs</a>
          <a href="./#download">Download</a>
          <a href="./#features">Features</a>
        </div>
        </div>
        <header className="App-header">
          <div className="header-wrapper">
            <a href="./">
              <img src={banner} className="banner" alt="logo" />{" "}
            </a>
            <div className="right">
              <h4>Use your phone as a wireless keyboard, mouse and media controller</h4>
              <a href="#download" className="downloadLink">
                GET NOW
              </a>
            </div>

          </div>

        </header>
      
    </div>
  );
};

export default Header;
