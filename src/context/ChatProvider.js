import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const ChatContext = createContext();

function ChatProvider({ children }) {
  const history = useHistory();
  const [user, setUser] = useState();
  const [selectedChat, setSelectedChat] = useState();
  const [chats, setChats] = useState([]);
  // useEffect(() => {
  //   const userInfo = Cookies.get("chatToken");
  //   setUser(userInfo);
  //   if (!userInfo) {
  //     history.push("/signin");
  //   }
  // }, [history]);
  return (
    <ChatContext.Provider
      value={{ user, setUser, selectedChat, setSelectedChat, chats, setChats }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
