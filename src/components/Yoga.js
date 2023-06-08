import React from 'react';
import Headings from './Headings';
import Balance from './home/Balance';
// import Footer from './home/Footer';
// import Loader from './home/Loader';
// import NavBar from './home/NavBar';

const Yoga = () => {
  return (
    <React.Fragment>
        {/* <Loader /> */}
        {/* <NavBar /> */}
        <Headings heading="Yoga"/>
        <Balance />
        {/* <Footer /> */}
    </React.Fragment>
  );
};
export default Yoga;