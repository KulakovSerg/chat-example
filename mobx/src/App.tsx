import './App.css';

import React from 'react';

import { ChatsContextProvider } from './components/ChatsContext';
import { ChatsList } from './components/ChatsList';
import { MessagesList } from './components/MessagesList';

function App() {
  return (
    <div className="App">
      <ChatsContextProvider>
        <ChatsList />
        <MessagesList />
      </ChatsContextProvider>
    </div>
  );
}

export default App;
