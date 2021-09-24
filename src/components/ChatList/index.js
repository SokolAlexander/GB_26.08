import React, { useState, useEffect } from "react";
import { List, Button } from "@material-ui/core";

import { ChatItem } from "../ChatItem";
import { useSelector, useDispatch } from "react-redux";
import { selectChats } from "../../store/chats/selectors";
import { addChat, addChatFb } from "../../store/chats/actions";
import { ref, onValue, set } from "firebase/database";
import { db } from "../../services/firebase";

export const ChatList = ({ onDeleteChat, onAddChat }) => {
  const chats = useSelector(selectChats);
  // const [chats, setChats] = useState([]);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleAddChat = (e) => {
    e.preventDefault();

    dispatch(addChatFb(value))

    setValue("");
    // dispatch(addChat(value));
  };

  return (
    <List>
      {chats.map((chat) => (
        <ChatItem
          chat={chat}
          key={chat.id}
          id={chat.id}
          onDelete={onDeleteChat}
        />
      ))}
      <form onSubmit={handleAddChat}>
        <input type="text" value={value} onChange={handleChange} />
        <Button variant="outlined" type="submit" disabled={!value}>
          Add chat
        </Button>
      </form>
    </List>
  );
};
