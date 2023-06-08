import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = (props) => {
  return (
    <React.Fragment>
        <div className="pricing_main">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="titlepage">
          <h2>{props.h2}</h2>
          <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy </span>
        </div>
      </div>
      <div className="col-md-4">
        <div className="pricing">
          <h4>STARTER PLAN</h4>
          <h3><span>$</span>60</h3>
          <p>Unlimited access to content Fully Secure online backup One Year round the clock support FREE
            complimentary lanyard</p>
          <Link className="read_more dark_bg" to="/"> Starte Now</Link>
        </div> 
      </div>
      <div className="col-md-4 ho_bor">
        <div className="pricing ">
          <h4>STARTER PLAN</h4>
          <h3><span>$</span>60</h3>
          <p>Unlimited access to content Fully Secure online backup One Year round the clock support FREE
            complimentary lanyard</p>
          <Link className="read_more dark_bg" to="/"> Starte Now</Link>
        </div>
      </div>
      <div className="col-md-4">
        <div className="pricing">
          <h4>STARTER PLAN</h4>
          <h3><span>$</span>60</h3>
          <p>Unlimited access to content Fully Secure online backup One Year round the clock support FREE
            complimentary lanyard</p>
          <Link className="read_more dark_bg" to="/"> Starte Now</Link>
        </div>
      </div>
    </div>
  </div>
</div>

    </React.Fragment>
  );
};
export default Pricing;