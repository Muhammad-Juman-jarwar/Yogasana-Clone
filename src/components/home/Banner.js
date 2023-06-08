import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <React.Fragment>
      <section className="banner_main">
        <div id="myCarousel" className="carousel slide banner" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to={0} className="active" />
            <li data-target="#myCarousel" data-slide-to={1} />
            <li data-target="#myCarousel" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="carousel-caption  banner_po">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="yo_img">
                        <figure><img src="images/yo_img.png" alt="/" /></figure>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="yoga_box">
                        <span>Now started</span>
                        <h1> <strong>Y</strong> O <strong>G</strong> A</h1>
                        <Link className="read_more yoga_btn" to="/contact" role="button">Contact us</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="carousel-caption banner_po">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="yo_img">
                        <figure><img src="images/yo_img.png" alt="/" /></figure>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="yoga_box">
                        <span>Now started</span>
                        <h1> <strong>Y</strong> O <strong>G</strong> A</h1>
                        <Link className="read_more yoga_btn" to="/contact" role="button">Contact us</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="carousel-caption banner_po">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="yo_img">
                        <figure><img src="images/yo_img.png" alt="/" /></figure>
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="yoga_box">
                        <span>Now started</span>
                        <h1> <strong>Y</strong> O <strong>G</strong> A</h1>
                        <Link className="read_more yoga_btn " to="/contact" role="button">Contact us</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <i className="fa fa-arrow-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <i className="fa fa-arrow-right" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a> 
        </div>
      </section>
    </React.Fragment>
  );
};
export default Banner;