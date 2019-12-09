import React from 'react';
import { Link } from 'gatsby';

const KnowMore = () => (
  <div className="mt4">
    <p className="mb2">Estamos trabajando en algo que te gustará.</p>
    <Link
      to="/suscribe/"
      state={{
        modal: true
      }}
    >
      <button className="btn grow br-pill purple--bg bn pv3 ph4 white">
        Mantenme informad@
      </button>
    </Link>
  </div>
);

export default KnowMore;