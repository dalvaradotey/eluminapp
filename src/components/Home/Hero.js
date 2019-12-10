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
      <h2 className="fw5 mb2" style={{ marginLeft: '-100px' }}>¿Te gustaría enseñar
        <div class="slidingVertical b">
          <span>Baile?</span>
          <span>Cocina?</span>
          <span>Política?</span>
          <span>Fotografía?</span>
          <span>Idiomas?</span>
        </div>
      </h2>
      <p className="f4 ma0 mt1">o quizás <span className="b">¿Quieres aprender?</span></p>
    </div>
    <div className="mt0">
    </div>
  </div>
);

export default Hero;