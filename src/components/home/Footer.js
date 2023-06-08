import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <React.Fragment>
      <footer>
        <div className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="newslatter">
                  <h4>Subscribe Our Newsletter</h4>
                  <form className="bottom_form">
                    <input className="enter" placeholder="Enter your email" type="text" name="Enter your email" />
                    <button className="sub_btn">subscribe</button>
                  </form>
                </div>
              </div>
              <div className="col-sm-12">
                <div className=" border_top1" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <h3>QUICK LINKS</h3>
                <ul className="link_menu">
                  <li><NavLink className="footlink" to="/">Home</NavLink></li>
                  <li><NavLink className="footlink" to="/about"> About</NavLink></li>
                  <li><NavLink className="footlink" to="/classes">Classes</NavLink></li>
                  <li><NavLink className="footlink" to="/yoga">Yoga</NavLink></li>
                  <li><NavLink className="footlink" to="/pricing">pricing</NavLink></li>
                  <li><NavLink className="footlink" to="/contact">Contact Us</NavLink></li>
                </ul>
              </div>
              <div className=" col-md-3">
                <h3>TOP Yoga</h3>
                <p className="many">
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humou
                </p>
              </div>
              <div className="col-lg-3 offset-mdlg-2     col-md-4 offset-md-1">
                <h3>Contact </h3>
                <ul className="conta">
                  <li><i className="fa fa-map-marker" aria-hidden="true" /> Location</li>
                  <li> <i className="fa fa-envelope" aria-hidden="true" /><Link to="/"> demo@gmail.com</Link></li>
                  <li><i className="fa fa-mobile" aria-hidden="true" /> Call : +01 1234567890</li>
                </ul>
                <ul className="social_icon">
                  <li><Link to="/"><i className="fa fa-facebook" aria-hidden="true" /></Link></li>
                  <li><Link to="/"><i className="fa fa-twitter" aria-hidden="true" /></Link></li>
                  <li><Link to="/"><i className="fa fa-linkedin" aria-hidden="true" /></Link></li>
                  <li><Link to="/"><i className="fa fa-instagram" aria-hidden="true" /></Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  <p>© 2019 All Rights Reserved. Design by <a href="https://html.design/"> Free Html Templates</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
    );
};
export default Footer;