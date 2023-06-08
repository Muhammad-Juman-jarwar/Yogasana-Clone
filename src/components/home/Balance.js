import React from 'react';
import { Link } from 'react-router-dom';

const Balance = () => {
  return (
    <React.Fragment>
        <div className="balance">
            <div className="container-fluid">
                <div className="row d_flex">
                <div className="col-md-5 padding_left0">
                    <div className="yoga_img">
                    <figure><img src="images/yoga_mo1.png" alt="/" /></figure>
                    </div>
                </div>
                <div className="col-md-6 offset-md-1">
                    <div className="titlepage">
                    <h2 className="padd_top30">Mind in Balance</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                        labore et dolore magna aliquyam erat, sed diam voluptu</p>
                    <Link className="read_more ye_b5n " to="/"> Read More</Link>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  );
};
export default Balance;