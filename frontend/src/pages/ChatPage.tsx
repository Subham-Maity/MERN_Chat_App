import React from "react";
import axios from "axios";

const ChatPage = () => {
  const fetchChats = async () => {
    // const data = await axios.get("http://localhost:5000/api/chats");
    const { data } = await axios.get("http://localhost:5000/api/chats"); //destructure data from response
    console.log(data);
  };

  React.useEffect(() => {
    fetchChats();
  }, []);

  return <div>ChatPage</div>;
};

export default ChatPage;
