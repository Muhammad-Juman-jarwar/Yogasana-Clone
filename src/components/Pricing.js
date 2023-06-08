import React from 'react';
import Headings from './Headings';
// import Loader from './home/Loader';
// import NavBar from './home/NavBar';
import PricingContent from './home/Pricing';
// import Footer from './home/Footer';

const Pricing = () => {
  return (
    <React.Fragment>
        {/* <Loader /> */}
        {/* <NavBar /> */}
        <Headings heading="PRICING" />
        <PricingContent h2=""/>
        {/* <Footer /> */}
    </React.Fragment>
  );
};
export default Pricing;