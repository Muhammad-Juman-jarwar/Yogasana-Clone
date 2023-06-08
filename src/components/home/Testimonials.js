import React from 'react';

const Testimonials = () => {
  return (
    <React.Fragment>
        <div className="pepole">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="titlepage">
          <h2>What Says Pepole</h2>
          <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy </span>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <div className="testimo_ban_bg">
          <div id="testimo" className="carousel slide testimo_ban" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#testimo" data-slide-to={0} className="active" />
              <li data-target="#testimo" data-slide-to={1} />
              <li data-target="#testimo" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container parile0">
                  <div className="carousel-caption relative2">
                    <div className="row d_flex">
                      <div className="col-md-12">
                        <i><img className="qusright" src="images/t.png" alt="/" /><img src="images/tes.png" alt="/" /><img className="qusleft" src="images/t.png" alt="/" /></i>
                        <div className="aliq">
                          <span>Aliqua</span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container parile0">
                  <div className="carousel-caption relative2">
                    <div className="row d_flex">
                      <div className="col-md-12">
                        <i><img className="qusright" src="images/t.png" alt="/" /><img src="images/tes.png" alt="/" /><img className="qusleft" src="images/t.png" alt="/" /></i>
                        <div className="aliq">
                          <span>Aliqua</span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container parile0">
                  <div className="carousel-caption relative2">
                    <div className="row d_flex">
                      <div className="col-md-12">
                        <i><img className="qusright" src="images/t.png" alt="/" /><img src="images/tes.png" alt="/" /><img className="qusleft" src="images/t.png" alt="/" /></i>
                        <div className="aliq">
                          <span>Aliqua</span>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#testimo" role="button" data-slide="prev">
                <i className="fa fa-arrow-left" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#testimo" role="button" data-slide="next">
                <i className="fa fa-arrow-right" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </React.Fragment>
  );
};
export default Testimonials;