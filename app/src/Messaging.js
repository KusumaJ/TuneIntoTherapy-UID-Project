import React, { useState, useContext } from 'react';
import './Messaging.css';
import { ChatContext } from './ChatContext';
import ReactMarkdown from 'react-markdown';

function Messaging() {
    const { chatMessages } = useContext(ChatContext);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
      if(newMessage.trim() !== ""){
          //setMessages([...messages, {text: newMessage, sender: "user"}]);
          setNewMessage('');
      }
    };

    const handleInputChange = (e) => {
        setNewMessage(e.target.value);
    };
    

  return (
    <div className="messaging-container">
        <div className="messaging-header">
            <h1> Messages</h1>
        </div>
        <div className="messaging-list">
            {chatMessages.map((message, index) => (
                <div 
                    key={index} 
                    className={`message-item ${
                        message.sender === 'user' ? 'user-message' : 'other-message'}`}>
                    {/* {message.fullMessage || message.text} */}
                    <ReactMarkdown>{message.fullMessage || message.text}</ReactMarkdown>
                </div>
            ))}
        </div>
        <div className="messaging-input-area">
            <input 
                type="text" 
                value={newMessage} 
                onChange={handleInputChange} 
                placeholder="Type your message..." />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    </div>
  );
}

export default Messaging;