import React from 'react';
import Banner from './Banner';
// import NavBar from './NavBar';

const Header = () => {
  return (
    <React.Fragment>
      <header className="full_bg">
        {/* <NavBar /> */}
        <Banner />
      </header>
    </React.Fragment>
  );
};
export default Header;