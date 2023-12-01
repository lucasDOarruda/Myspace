import React from 'react';
import backgroundImage from '../components/18086.jpg';
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
      <section>
        <h2 className='mainhometitle'>Transforming Raw Data into Strategic Intelligence</h2>
      </section>
    </div>
  );
}

export default Home;
