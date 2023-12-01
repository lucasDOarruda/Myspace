import React from 'react';
import microsoft from '../img/Microsoft.png';

const footerStyle = {
  position: 'fixed', // or 'absolute' if preferred
  bottom: '0',
  width: '100%',
  backgroundColor: '#f0f0f0', // You can change the background color
  textAlign: 'center',
  padding: '5px 0', // Reduced padding
};

const smallText = {
  fontSize: '12px', // Smaller font size
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={smallText}>
        &copy; {new Date().getFullYear()} YaData 
        <img src={microsoft} alt="Microsoft Gold Partner Logo" style={{ width: '100%' }} />
      </p>
    </footer>
  );
}

export default Footer;
