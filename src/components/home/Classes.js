import React from 'react';
import { Link } from 'react-router-dom';

const Classes = (props) => {
  return (
    <React.Fragment>
        <div className="classes">
  <div className="container">
    <div className="row">
      <div className="col-sm-12">
        <div className="titlepage">
          <h2>{props.h2}</h2>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </span>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 col-sm-6 d_none">
      </div>
      <div className="col-md-4 col-sm-6 margin_bott">
        <div className="our_yoga">
          <figure><img src="images/our_yoga1.png" alt="/" /></figure>
          <h3>HATHA YOGA</h3>
          <span>Lorem ipsum dolor sit amet</span>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 d_none">
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="our_yoga">
          <figure><img src="images/our_yoga2.png" alt="/" /></figure>
          <h3>HATHA YOGA</h3>
          <span>Lorem ipsum dolor sit amet</span>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 d_none">
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="our_yoga">
          <figure><img src="images/our_yoga3.png" alt="/" /></figure>
          <h3>HATHA YOGA</h3>
          <span>Lorem ipsum dolor sit amet</span>
        </div>
      </div>
      <div className="col-md-4 offset-md-4 col-sm-6  margin_top">
        <div className="our_yoga">
          <figure><img src="images/our_yoga4.png" alt="/" /></figure>
          <h3>HATHA YOGA</h3>
          <span>Lorem ipsum dolor sit amet</span>
          <Link className="read_more yoga_btn" to="/"> Read More</Link>
        </div>
      </div>
    </div>
  </div>
</div>

    </React.Fragment>
  );
};
export default Classes;