import React from 'react';
import microsoft from '../img/Microsoft.gif';
import ChatIcon from '../components/ChatIcon';



const footerStyle = {
  position: 'fixed', // or 'absolute' if preferred
  bottom: '0',
  right: '0',       // Aligns the footer to the right
  width: '10%',     // Sets the width of the footer
  paddingTop: '50%', // This may vary depending on your design
  
  textAlign: 'center', // Centers text inside the footer
  padding: '0px 0',    // Reduced padding
};





const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>
        <img src={microsoft} alt="Microsoft Gold Partner Logo" style={{ width: '100%' }} />
      </p>

      <ChatIcon />

    </footer>
  );
}

export default Footer;
