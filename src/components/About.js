import React from 'react';
import Headings from './Headings';
// import Loader from './home/Loader';
// import NavBar from './home/NavBar';
import AboutUsContent from './home/AboutUsContent';
// import Footer from './home/Footer';

const About = () => {
  return (
    <React.Fragment>
        {/* <Loader /> */}
        {/* <NavBar /> */}
        <Headings heading="About Us" />
        <AboutUsContent h2=""/>
        {/* <Footer /> */}
    </React.Fragment>
  );
};
export default About;