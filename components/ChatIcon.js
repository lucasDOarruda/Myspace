import React, { useState } from 'react';
import Chat from './Chat'; // Import the chat component you created

const ChatIcon = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      <div className="chat-icon" onClick={() => setChatOpen(!chatOpen)}>
        {/* Icon design here */}
      </div>
      {chatOpen && <Chat />}
    </>
  );
};

export default ChatIcon;
