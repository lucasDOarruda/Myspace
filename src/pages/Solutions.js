import React from 'react';
import aiprocess from '../img/aiprocess.gif'; // Import the image

const Solutions = () => {
  return (
    <div className="container">
      <br></br>
      <h1>Identify Solutions</h1>
      <div className="row">
        <div className="col">
          <p>Revitalise your operations and streamline business processes with Azure, SAP, and Salesforce. By integrating these powerful platforms, you can automate workflows across your organisation. This approach not only minimises manual intervention in reporting but also ensures that data is readily accessible on demand for all stakeholders.</p> {/* Text above the image */}
          <img src={aiprocess} className="img-fluid" alt="AI Process" /> {/* Responsive image */}
        </div>
      </div>
    </div>
  );
}

export default Solutions;
