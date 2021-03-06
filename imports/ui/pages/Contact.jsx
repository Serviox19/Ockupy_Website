import React, { Component } from 'react';
import Nav from '../components/Nav';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

class Contact extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);

    $('#contact').addClass('active');
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="page-content-wrapper">
          <div className="contact-box">
            <div className="mask bg-animate">
              <h1>contact us</h1>
            </div>
          </div>
          <ContactForm />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
