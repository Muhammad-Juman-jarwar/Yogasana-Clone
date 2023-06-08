import React from 'react';
// import Loader from './home/Loader';
// import NavBar from './home/NavBar';
import Headings from './Headings';
import ClassesContent from './home/Classes';
// import Footer from './home/Footer';

const Classes = () => {
  return (
    <React.Fragment>
        {/* <Loader /> */}
        {/* <NavBar /> */}
        <Headings  heading="Our Classes"/>
        <ClassesContent h2="" />
        {/* <Footer /> */}
    </React.Fragment>
  );
};
export default Classes;