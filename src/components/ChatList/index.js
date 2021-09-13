import React, { useState } from "react";
import { List, Button } from "@material-ui/core";

import { ChatItem } from "../ChatItem";

export const ChatList = ({ chats, onDeleteChat, onAddChat }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddChat(value);
    setValue('');
  }

  return (
    <List>
      {chats.map((chat) => (
        <ChatItem chat={chat} key={chat.id} id={chat.id} onDelete={onDeleteChat} />
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <Button variant="outlined" disabled={!value}>
          Add chat
        </Button>
      </form>
    </List>
  );
};
