import React, { Component } from 'react';
import { Link } from 'gatsby';
import swal from '@sweetalert/with-react';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing';
import Airtable from 'airtable';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const base = new Airtable({
  apiKey: process.env.GATSBY_AIRTABLE_API_KEY
}).base('appPcTl1DJ253jMIF');

const FormSchema = ({ t }) => (Yup.object().shape({
  email: Yup.string()
    .email('Ingresa un email válido.')
    .required('Ingresa un email'),
}));

class Modal extends Component {
  state = {
    email: '',
    showForm: true,
    isLoading: true,
  };

  onSubmit = (values, actions) => {
    base('Table 1').create({
      "Email": values.email,
    }, (err, record) => {
      if (err) {
        return;
      }

      this.setState({ isLoading: false });

      swal('¡Registro completado!', { icon: 'success'});
    });

    this.setState({ showForm: false });
    
    actions.setSubmitting(false);
  }

  render = () => (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) => (
        <div>
          <div className="tc mt3 mt6-ns">
            <h3 className="f1 logo-font normal mt0">eluminapp</h3>
            <p className="mt1 mb0">Si estás interesado en enseñar o aprender,</p>
            <p className="mt1 mb4">ingresa tu email y te mantendremos informado.</p>
            {this.state.showForm ? (
              <Formik
                initialValues={{
                  name: '',
                  email: ''
                }}
                validationSchema={() => FormSchema({ t: this.props.t })}
                onSubmit={(values, actions) => this.onSubmit(values, actions)}
                render={({ errors, status, touched, isSubmitting }) => (
                  <Form aria-labelledby="cyber-form-title" id="cyber-form" className="mt4 grid-cyber__form">
                    <Field
                      className="mt1 br1 b--light-blue b--solid bw1 pa1"
                      type="text"
                      name="email"
                      id="email"
                      placeholder="ingresa tu email aquí"
                    />
                    <ErrorMessage name="email" component="div" className="mt3 red" />
                    <div>
                      <button
                        className="btn grow br-pill purple--bg bn pv3 ph4 white ma3"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Registrarme
                      </button>
                    </div>
                  </Form>
                )}
              />
            ) : (
              <p className="f4 purple">
                {this.state.isLoading ? (
                  'Registrando tu email...'
                ) : (
                  '¡Gracias por registrarte!'
                )}
              </p>
            )}
            {modal && (
              <Link to={closeTo}>
                Ir al home
              </Link>
            )}
          </div>
        </div>
      )}
    </ModalRoutingContext.Consumer>    
  );
}

export default Modal;
