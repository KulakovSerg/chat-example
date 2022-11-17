import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ChatsContextProvider } from "./components/ChatsContext";
import { ChatsList } from "./components/ChatsList";

function App() {
  return (
    <div className="App">
      <ChatsContextProvider>
        <ChatsList />
      </ChatsContextProvider>
    </div>
  );
}

export default App;
