import React from 'react';
import { Link } from "react-router-dom";

const AboutUsContent = (props) => {
  return (
    <React.Fragment>
      <div className="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="titlepage">
                <h2>{props.h2}</h2>
                <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                  ut labore et dolore magna aliquyam erat, sed diam voluptu</span>
              </div>
            </div>
            <div className="col-md-12">
              <div className="about_img">
                <figure><img src="images/about.png" alt="/" /></figure>
                <Link className="read_more yoga_btn" to="/"> Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default AboutUsContent;