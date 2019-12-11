import React from 'react';

import AppStoreSVG from '../../../assets/app-store.svg';
import PlayStoreSVG from '../../../assets/play-store.svg';

const AvailableOn = () => (
  <div className="tc mt4">
    <p className="f7 ttu b mb3">Pronto disponible en</p>
    <a href="" className="di f6 br-pill black no-underline ba grow pv2 ph3 mr3">
      <AppStoreSVG width="20px" className="mr2" style={{ verticalAlign: 'text-bottom' }} />
      App store
    </a>
    <a href="" className="di f6 br-pill black no-underline ba grow pv2 ph3">
      <PlayStoreSVG width="20px" className="mr2" style={{ verticalAlign: 'text-bottom' }} />
      Play store
    </a>
  </div>
);

export default AvailableOn;