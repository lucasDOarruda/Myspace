import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const handleSend = async () => {
    const response = await axios.post('http://localhost:5000/api/send-message', {
      email,
      message,
    });

    // Handle the response or update the chat as needed
    console.log(response.data);

    // For simplicity, update the chat state
    setChat([...chat, { sender: 'user', message }]);
    setChat([...chat, { sender: 'bot', message: 'Thank you for your message!' }]);
  };

  return (
    <div>
      <div>
        {chat.map((item, index) => (
          <div key={index} className={item.sender}>
            <span>{item.sender === 'user' ? 'You: ' : 'Bot: '}</span>
            {item.message}
          </div>
        ))}
      </div>
      <div>
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Type your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
