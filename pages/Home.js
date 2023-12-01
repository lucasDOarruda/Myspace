import React from 'react';
import backgroundImage from '../components/18086.jpg';
import homeImage from '../img/homeimg.png'; // Adjust the path if necessary
import '../Home.css';

function Home() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100%'
  };

  return (
    <div style={sectionStyle}>
      <div>
   <br/>
   <br/>
   <br/>
        <h2 className='mainhometitle'>Transforming Raw Data into Strategic Intelligence</h2>
        <img src={homeImage} alt="Home" className="small-round-image" />

        </div>
    </div>
  );
}

export default Home;
