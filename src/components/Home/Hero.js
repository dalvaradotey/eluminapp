import React from 'react';

import LogoSVG from '../../../assets/e-logo.svg';
import ShadowFrameSVG from '../../../assets/shadow-frame.svg';

import './Hero.scss';

const Hero = () => (
  <div className="yellow--bg tc">
    <div className="Hero-logo">
      <LogoSVG style={{ marginLeft: '-20px' }} />
      <p className="Hero-logo__shadow-frame center">
        <ShadowFrameSVG />
      </p>
      <h1 className="f1 logo-font normal mt0">eluminapp</h1>
    </div>
    <div className="mt2">
      <p className="f3 ma0 mt2">¿Quieres enseñar algo?</p>
      <p className="f4 ma0 mt1">o quizás <span className="b">¿Te gustaría aprender algo?</span></p>
    </div>
  </div>
);

export default Hero;