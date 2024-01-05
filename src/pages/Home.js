import React from 'react';
import homeImage from '../img/homeimg.png'; // Adjust the path if necessary
import newaiimg from '../img/newaiimg.png'; // Adjust the path if necessary
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../Home.css';

function Home() {
  return (
    <div className="container">
      {/* First row with image on the left and text on the right */}
      <div className="row align-items-center">
        <div className="col-md-6 col-sm-12">
          <img src={homeImage} alt="Strategic Intelligence" className="img-fluid" />
        </div>
        <div className="col-md-6 col-sm-12">
          <h2>Transforming Raw Data into Strategic Intelligence</h2>
          <p>With Microsoft Power BI, AI chatbots, and AI Builder for analytics and visualization.</p>
        </div>
      </div>
      
      {/* Second row with text on the left and image on the right */}
      <div className="row align-items-center">
        <div className="col-md-6 col-sm-12 order-md-2">
          <img src={newaiimg} alt="AI" className="img-fluid" />
        </div>
        <div className="col-md-6 col-sm-12 order-md-1">
          <h2>Unlock Insights with Advanced AI</h2>
          <p>Implement data-driven solutions to enhance business operations.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
