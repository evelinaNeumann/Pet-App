import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001'); // Replace with your server URL

function LiveChat() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Listen for incoming messages
    socket.on('chat message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up event listeners when component unmounts
    return () => {
      socket.off('chat message');
    };
  }, []);

  const handleSendMessage = () => {
    socket.emit('chat message', inputValue);
    setInputValue('');
  };

  return (
    <div>
      {/* Render chat messages */}
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}

      {/* Input field and send button */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default LiveChat;