import React, { useState } from 'react';
import Chat from './Chat'; // Import the chat component you created
import IconButton from '@mui/material/IconButton'; // Import IconButton for a clickable icon
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'; // Import a help icon

const ChatIcon = () => {
  const [chatOpen, setChatOpen] = useState(false);

  // Style object for the icon
  const iconStyle = {
    fontSize: '48px', // Set the size of the icon
    color: 'white', // Set the color of the icon if needed
  };

  // Style object for the IconButton component
  const buttonStyle = {
    position: 'fixed', // Fixed position to stick on the screen
    left: '20px', // Distance from the left side of the screen
    bottom: '20px', // Distance from the bottom of the screen
    backgroundColor: 'black', // Background color of the button
    borderRadius: '50%', // Rounded corners for the button
  };

  return (
    <>
      <IconButton onClick={() => setChatOpen(!chatOpen)} style={buttonStyle}>
        <HelpOutlineIcon style={iconStyle} />
      </IconButton>
      {chatOpen && <Chat />}
    </>
  );
};

export default ChatIcon;
