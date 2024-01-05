import React, { useState } from 'react';
import axios from 'axios';
import '../css/Chat.css'; // Import the CSS file

const Chat = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const handleSend = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/send-message', {
        email,
        message,
      });

      // Handle the response or update the chat as needed
      console.log(response.data);

      // Update the chat state with a single call
      setChat((prevChat) => [
        ...prevChat,
        { sender: 'user', message },
        { sender: 'bot', message: 'Thank you for your message!' },
      ]);
    } catch (error) {
      console.error('Error sending message:', error.message);
    }
  };

  return (
    <div className="chat-container">
      <div className="message-container">
        {chat.map((item, index) => (
          <div
            key={index}
            className={item.sender === 'user' ? 'user-message' : 'bot-message'}
          >
            <span>{item.sender === 'user' ? 'You: ' : 'Bot: '}</span>
            {item.message}
          </div>
        ))}
      </div>
      <div className="form-container">
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
