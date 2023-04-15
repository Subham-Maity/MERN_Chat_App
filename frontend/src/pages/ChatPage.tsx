import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = React.useState([]);
  const fetchChats = async () => {
    // const data = await axios.get("http://localhost:5000/api/chats");
    const { data } = await axios.get("http://localhost:5000/api/chats"); //destructure data from response
    setChats(data);
  };

  React.useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((chats) => (
        <div key={chats._id}>{chats.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
