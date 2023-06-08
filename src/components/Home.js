import React from 'react';
// import { Outlet } from 'react-router-dom';
import Header from './home/Header';
import Classes from './home/Classes';
import Middle from './home/Middle';
import AboutUsContent from './home/AboutUsContent';
import Balance from './home/Balance';
import Pricing from './home/Pricing';
import Testimonials from './home/Testimonials';
import Contact from './home/Contact';
// import Footer from './home/Footer';
// import Loader from './home/Loader';


const Home = () => {
  return (
    <React.Fragment>
        {/* <Loader /> */}
        <Header />
        <Classes />
        <Middle />
        <AboutUsContent h2="ABOUT US"/>
        <Balance />
        <Pricing />
        <Testimonials />
        <Contact />
        {/* <Footer /> */}
    </React.Fragment>
  );
};
export default Home;