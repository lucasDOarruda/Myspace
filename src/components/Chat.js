import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    try {
      const response = await axios.post('http://localhost:6000/process_message', { input });
      const botResponse = response.data.botResponse;
  
      // Append user and bot messages to the messages state
      setMessages([
        ...messages,
        { text: input, from: 'user' },
        { text: botResponse, from: 'bot' },
      ]);
  
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
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
