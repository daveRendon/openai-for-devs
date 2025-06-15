import React, { useState } from 'react';
import { fetchResponse } from './api';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessages([...messages, { sender: 'user', text: userInput }]);
    setUserInput('');
    const response = await fetchResponse(userInput);
    const botMessage = response.data.choices[0].message.content;
    setMessages([...messages, { sender: 'user', text: userInput }, { sender: 'bot', text: botMessage }]);
  };

  return (
    <div>
      <div>{messages.map((m, i) => <p key={i}><strong>{m.sender}:</strong> {m.text}</p>)}</div>
      <form onSubmit={handleSubmit}>
        <input value={userInput} onChange={e => setUserInput(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
