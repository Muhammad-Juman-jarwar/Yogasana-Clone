import React from 'react';
// import Loader from './home/Loader';
// import NavBar from './home/NavBar';
import Headings from './Headings';
import ContactUsContent from './home/Contact';
// import Footer from './home/Footer';

const Contact = () => {
  return (
    <React.Fragment>
        {/* <Loader /> */}
        {/* <NavBar /> */}
        <Headings heading="Contact Us" />
        <ContactUsContent h2=""/>
        {/* <Footer /> */}
    </React.Fragment>
  );
};
export default Contact;