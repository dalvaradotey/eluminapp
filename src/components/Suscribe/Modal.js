import React, { Component } from 'react';
import { Link } from 'gatsby';
import swal from '@sweetalert/with-react';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import Airtable from 'airtable';

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY
}).base('appPcTl1DJ253jMIF')

class Modal extends Component {
  state = {
    email: '',
  };

  onClick = () => {
    base('Table 1').create({
      "Email": this.state.email
    }, (err, record) => {
      if (err) {
        return;
      }
      swal('Registrado.', { icon: 'success'});
    })
  }

  render = () => (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <div>
          {modal ? (
            <Link to={closeTo}>
              Close
            </Link>
          ) : (
            <header>
              <h1>
                Website Title
              </h1>
            </header>
          )}

          <h2>Modal Page</h2>
          <input type="text" onChange={e => this.setState({ email: e.target.value })} value={this.state.email}/>
          <button onClick={this.onClick}>Enviar</button>
          <Link to="/">Go back to the homepage</Link>
        </div>
      )}
    </ModalRoutingContext.Consumer>    
  );
}

export default Modal;
/*
const Modal = () => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div>
        {modal ? (
          <Link to={closeTo}>
            Close
          </Link>
        ) : (
          <header>
            <h1>
              Website Title
            </h1>
          </header>
        )}

        <h2>Modal Page</h2>

        <Link to="/">Go back to the homepage</Link>
      </div>
    )}
  </ModalRoutingContext.Consumer>
)

export default Modal;
*/
