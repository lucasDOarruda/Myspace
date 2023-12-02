import React from 'react';
import microsoft from '../img/Microsoft.png';

const footerStyle = {
  position: 'fixed', // or 'absolute' if preferred
  bottom: '0',
  right: '0',       // Aligns the footer to the right
  width: '10%',     // Sets the width of the footer
  paddingTop: '50%', // This may vary depending on your design
  
  textAlign: 'center', // Centers text inside the footer
  padding: '0px 0',    // Reduced padding
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
