import React from 'react';

const Contact = (props) => {
  return (
    <React.Fragment>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>{props.h2}</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 padding_right0">
              <form id="request" className="main_form">
                <div className="row">
                  <div className="col-md-12 ">
                    <input className="contactus" placeholder="Name" type="type" name="Name" />
                  </div>
                  <div className="col-md-12">
                    <input className="contactus" placeholder="Email" type="type" name="Email" />
                  </div>
                  <div className="col-md-12">
                    <input className="contactus" placeholder="Phone Number" type="type" name="Phone Number" />
                  </div>
                  <div className="col-md-12">
                    <textarea className="textarea" placeholder="Message" type="type" message="Name" defaultValue={"Message"} />
                  </div>
                  <div className="col-md-12">
                    <button className="send_btn">Send</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6 padding_left0">
              <div className="map_main">
                <div className="map-responsive">
                  <iframe title='iFrame' src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width={600} height={463} frameBorder={0} style={{border: 0, width: '100%'}} allowFullScreen />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    </React.Fragment>
  );
};
export default Contact;