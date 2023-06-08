import React from 'react';
import { Link } from 'react-router-dom';

const Middle = () => {
  return (
    <React.Fragment>
        <div className="middle">
  <div className="container-fluid">
    <div className="row d_flex">
      <div className="col-md-6">
        <div className="titlepage">
          <h2>The Inner Middle.</h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
            labore et dolore magna aliquyam erat, sed diam voluptu</p>
          <Link className="read_more ye_b5n " to="/"> Read More</Link>
        </div>
      </div>
      <div className="col-md-5 offset-md-1 padding_right0">
        <div className="yoga_img">
          <figure><img src="images/yoga_mo.png" alt="/" /></figure>
        </div>
      </div>
    </div>
  </div>
</div>

    </React.Fragment>
  );
};
export default Middle;