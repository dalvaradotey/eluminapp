import React, { Fragment } from "react";
import { Helmet } from 'react-helmet';

import Hero from '../components/Home/Hero';
import KnowMore from '../components/Home/KnowMore';
import AvailableOn from '../components/Home/AvailableOn';

import ClipSVG from '../../assets/clip.svg'

const IndexPage = () => (
  <Fragment>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Noto+Sans:400,700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Pacifico&display=swap" rel="stylesheet"></link>
    </Helmet>
    <div className="yellow--bg tc pt5 pb4" style={{ clipPath: "url(#tsClipPath)" }}>
      <Hero />
      <KnowMore />
      <AvailableOn />
    </div>
    <ClipSVG />
  </Fragment>
)

export default IndexPage;
