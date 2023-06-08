import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const NavBar = () => {
  return (
    <React.Fragment>
        <div className="header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                <div className="full">
                  <div className="center-desk">
                    <div className="logo">
                      <Link to="/"><img src="images/logo.png" alt="/" /></Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                <nav className="navigation navbar navbar-expand-md navbar-dark ">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarsExample04">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item ">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About Us</NavLink>
                      </li>
                      <li className="nav-item">
                      <NavLink className="nav-link" to="/classes">Classes</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/yoga">yoga</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/pricing">pricing</NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <Outlet />
    </React.Fragment>
  );
};
export default NavBar;