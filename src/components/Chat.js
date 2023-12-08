import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Function to send a message to the server and process the response
  const sendMessage = async () => {
    try {
      // Ensure that the URL matches the Flask server's URL
      const response = await axios.post('http://localhost:5000/process_message', { input });
      const botResponse = response.data.botResponse;
  
      // Update the messages state with both user and bot messages
      setMessages([
        ...messages,
        { text: input, from: 'user' },
        { text: botResponse, from: 'bot' },
      ]);
  
      // Clear the input field after sending the message
      setInput('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.from}`}>
            {message.text}
          </div>
        ))}
      </div>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        onKeyPress={(e) => e.key === 'Enter' && sendMessage()} 
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
