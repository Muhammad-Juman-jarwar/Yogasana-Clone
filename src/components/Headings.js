import React from 'react';

const Headings = (props) => {
  return (
    <React.Fragment>
      <div className="back_re">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="title">
                       <h2>{props.heading}</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </React.Fragment>
  );
};
export default Headings;